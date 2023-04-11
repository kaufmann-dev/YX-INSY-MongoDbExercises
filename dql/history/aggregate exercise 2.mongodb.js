

// -----------------------------------------------------------------
//  1.) Beispiel
// -----------------------------------------------------------------
// Für die Teilnehmer (Belligerents) an Schlachten soll ein Report ver-
// faßt werden.

// I) Geben Sie für alle Belligerents die folgenden Werte aus:

//    var belligerent = {
//         commander : "...",
//         nation : "...",    
//         battles : [  // Kurzbeschreibung einer Schlacht
//             { name : "...", troopCount : ..., losses : ... },
//                  troopCount und losses beziehen sich auf die
//                  eigenen Truppen
//             { ... }
//         ],
//         victoryCount : ...  // Anzahl der Siege des Generals
//    }


// II) Speichern Sie das Ergebnis in einer Collection: commander

// Hinweis: Wenn nach mehreren Werten gruppiert werden soll, wird für
//          die $group Stufe die folgende Syntax verwendet:

// $group : {_id : { field1 : value1, field2: value2 } }


db.events.aggregate([
    {
        $match : {
            eventType : "BATTLE"
        }
    }, {
        $unwind : "$belligerents"
    }, {
        $project : {
            commander : "$belligerents.commander",
            nation : "$belligerents.nation",
            battle : {
                name : "$name",
                troopCount : {
                    $sum : "$belligerents.composition.amount"
                },
                losses : {
                    $sum : "$belligerents.losses.amount"
                }
            }
        }
    },
    {
        $group : {
            _id: {commander : "$commander", nation : "$nation"},
            battles : {
                $addToSet : "$battle"
            }
        }
    },
    {
        $unwind : "$battles"
    },
    {
        $group : {
            _id: {commander : "$_id.commander", nation : "$_id.nation"},
            battles : {
                $addToSet : "$battles"
            },
            victoryCount : {
                $sum : {
                    $cond : {
                        if : {
                            $eq : [ "$_id.commander", "$battles.victor" ]
                        },
                        then : 1,
                        else : 0
                    }
                }
            }
        }
    },
    {
        $project : {
            _id : 0,
            commander : "$_id.commander",
            nation : "$_id.nation",
            battles : 1,
            victoryCount : 1
        }
    }
]);

db.events.aggregate([
{
    $match : {
        eventType : "BATTLE"
    }
}, {
    $unwind : "$belligerents"
}, {
    $project : {
        commander : "$belligerents.commander",
        nation : "$belligerents.nation",
        name : 1,
        battle : {
            name : "$name",
            troopCount : {
                $sum : "$belligerents.composition.amount"
            },
            losses : {
                $sum : "$belligerents.losses.amount"
            }
        }
    }
},{
    $group : {
        _id: {commander : "$commander", nation : "$nation"},
        battles : {
            $addToSet : "$battle"
        }
    }
},{
     $lookup:
     {
       from: "events",
       localField: "_id.commander",
       foreignField: "victor",
       as: "temp"
     }
}, {
    $project : {
        _id : 0,
        commander : "$_id.commander",
        nation : "$_id.nation",
        battles : 1,
        victorCount : {
            $size : "$temp"
        }
    }
}]);


// -----------------------------------------------------------------
//  2.) Beispiel
// -----------------------------------------------------------------
// Für Commander (collection commander) soll ein Report verfaßt werden.
// Einem Commander werden dabei für bestimmte Aspekte Punkte zugeordnet.

// I) Berechnen Sie für jeden Commander einen influenceCount. Der Wert
//    für influenceCount setzt sich dabei aus folgenden Posten zusammen:

//    * victories -> $victoryCount * 50
//    * battleParticipation -> $(battle count) * 2
//    * troopCount -> ($(overall Troopcount) / $(battle count))/1000

// II) Geben Sie für jeden Commander die folgenden Felder aus. Speichern
//     Sie Ihr Ergebnis in einer collection commanderReport.

//     var commander = {
//          name : "",
//          nation : "",
//          influenceCount : ...
//     }

db.commander.aggregate([
    {
        $project: {
            _id : 0,
            name : "$commander",
            nation : 1,
            influenceCount : {
                $round : [
                    {
                        $add : [
                            {
                                $multiply : [ "$victorCount", 50 ]
                            },
                            {
                                $multiply : [
                                    {
                                        $size : "$battles"
                                    },
                                    2
                                ]
                            },
                            {
                                $divide : [
                                    {
                                        $divide : [
                                            {
                                                $sum : "$battles.troopCount"
                                            },
                                            {
                                                $size : "$battles"
                                            }
                                        ]
                                    },
                                    1000
                                ]
                            }
                        ]
                    },
                    0
                ]
            }
        }
    }
]);