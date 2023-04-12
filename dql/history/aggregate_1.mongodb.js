
// ---------------------------------------------------------------------------------
//  1.Beispiel) Aggregationsframework: $match, $project, $sort, $out (1.Punkt)
// ---------------------------------------------------------------------------------
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

db.events.aggregate([
    {
        $match : {
            eventType : "BATTLE"/*,
            reviews : {
                $exists : true, $not : { $size : 0 }
            }*/
        }
    },
    {
        $project: {
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
    }
]);

// ---------------------------------------------------------------------------------
//  2.Beispiel) Aggregationsframework - $group, $out                     (1.Punkt)
// ---------------------------------------------------------------------------------
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

db.events.aggregate([
    {
        $group: {
          _id: "$eventType",
          documentCount : {
            $count : {}
          },
          eventNames : {
            $addToSet : {
                name : "$name",
                victor : "$victor"
            }
          }
        }
    }
]);

// ---------------------------------------------------------------------------------
//  3.Beispiel) Aggregationsframework - $match, $unwind, $addFields, $group, $lookup
//                                    - $project, $out
//  (3.Punkte)
// ---------------------------------------------------------------------------------

// Sammeln Sie für events die folgenden Daten in der eventReport collection. Berück-
// sichtigen Sie nur BATTLE eventTypes.
//
// name, eventType, description, territorialChange, belligerents
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

db.events.aggregate([
    {
        $match : {
            eventType : "BATTLE"
        }
    },
    {
        $unwind : "$belligerents"
    },
    {
        $project: {
          name : 1,
          eventType : 1,
          description : 1,
          territorialChange : 1,
          belligerents : {
            commander : 1,
            nation : 1,
            troopCout : {
                $sum : "$belligerents.composition.amount"
            },
            troopTypes : "$belligerents.composition.type",
            lossCount : {
                $sum : "$belligerents.losses.amount"
            }
          }
        }
    }
]);

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
    },
    {
        $project : {
            name : "$name",
            eventType : "$eventType",
            description : "$description",
            territorialChange : "$territorialChange",
            newBelligerents : 1
        }
    }
]);