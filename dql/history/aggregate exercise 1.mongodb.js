// use ('_');
 // -- --------------------------------------------------------------------------------- --
// --  1.Beispiel) Aggregationsframework: $match, $project, $sort, $out (1.Punkt)
// -- --------------------------------------------------------------------------------- --
// Sammeln Sie die folgenden Eventdaten in der "eventsReport" Collection. Berücksichtigen
// Sie nur Battles. Für das Event muß zumindestens ein Review abgegeben worden sein.


// Ausgabe: eventName, battleVictor, description, maxReview

// @eventName     -> name
// @battelVictor  -> victor
// @description   -> description

// Sortieren Sie das Ergebnis nach dem Eventnamen aufsteigend.
// Übernehmen Sie nur die ersten 2 Dokumente.


// Hinweis: Prüfung ob das review Array Elemente hat:

//  reviews : {
//       $exists : true, $not : { $size : 0 }
// }

db.events.find({});

db.events.aggregate([
    {
        $match : {
            eventType : "BATTLE",
        }
    },
    {
        $project : {
            eventName : "$name",
            battleVictor : "$victor",
            description : "$description"
        }
    },
    {
        $sort : {
            eventName : 1
        }
    },
    {
        $limit : 2
    },
    {
        $out : "eventsReport"
    }
])








db.events.aggregate([
    {
        $match : {
            eventType : "BATTLE",
            reviews : {
                $exists : true, $not : { $size : 0 }
            }
        }
    },
    {
        $project : {
            eventName : "$name",
            battelVictor : "$victor",
            description : "$description"
        }
    },{
      $limit : 2
   },
    {
      $out : "eventsReport"
   }
]);

// -- --------------------------------------------------------------------------------- --
// --  2.Beispiel) Aggregationsframework - $group, $out                     (1.Punkt)
// -- --------------------------------------------------------------------------------- --
// Geben Sie für jeden eventType folgende Werte aus. Speichern Sie Ihr Ergebnis in einer
// Collection eventReport

// {
//    "_id" : "BATTLE",
//    "documentCount" : ..., @Anzahl der Dokumente für den eventType
//    "eventNames" : [
//        {
//            "name" : "Battle of ...",
//            "victor" : "..."
//        }, ...
//     ]
//  }

db.events.find({});

db.events.aggregate([
    {
        $group : {
            _id : "$eventType",
            documentCount : {
                $sum : 1
            },
            eventNames : {
                $addToSet : {
                    name : "$name",
                    victor : "$victor"
                }
            }
        }
    },
    {
        $out : "eventsReport"
    }
]);



// -- --------------------------------------------------------------------------------- --
// --  3.Beispiel) Aggregationsframework - $match, $unwind, $addFields, $group, $lookup
// --                                    - $project, $out
// --  (3.Punkte)
// -- --------------------------------------------------------------------------------- --

// Sammeln Sie für events die folgenden Daten in der eventReport collection. Berück-
// sichtigen Sie nur BATTLE eventTypes.
//
// eventType, description, territorialChange, belligerents
//
// @name        -> name
// @eventType   -> eventType
// @description -> description
// @territorialChange -> territorialChange
// @belligerents : [{
//     commander : "...",
//     nation : "...",
//     troopCount : -> $sum composition.amount
//     troopTypes : ["...", "..."]
//     lossCount  : -> $sum losses.amount
// }]


// Hinweis: Zur Berechung der Werte der gegnerischen Seiten (belligerents)
//          sollte eine "$unwind" auf dem Array durchgeführt werden.

db.events.find({});

db.events.aggregate([
    {
        $match : {
            eventType : "BATTLE"
        }
    }, {
        $addFields : {
            newBelligerents : {
                $map : {
                    input : "$belligerents",
                    as : "belligerents",
                    in : {
                        commander : "$$belligerents.commander",
                        nation : "$$belligerents.nation",
                        troopCount : {
                            $sum : "$$belligerents.composition.amount"
                        },
                        troopTypes : "$$belligerents.composition.type",
                        lossCount : {
                            $sum : "$$belligerents.losses.amount"
                        }
                    }
                }
            }
        }
    }
]);

db.events.aggregate([

]);
