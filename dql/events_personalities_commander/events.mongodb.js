 // -- --------------------------------------------------------------------------------- --
// --  1.Beispiel) Aggregationsframework: $match, $project, $sort, $out (1.Punkt)
// -- --------------------------------------------------------------------------------- --
// Sammeln Sie die folgenden Eventdaten in der "eventsReport" Collection. Berücksichtigen
// Sie nur Battles.


// Ausgabe: eventName, battleVictor, description

// @eventName     -> name
// @battelVictor  -> victor
// @description   -> description

// Sortieren Sie das Ergebnis nach dem Eventnamen aufsteigend.
// Übernehmen Sie nur die ersten 2 Dokumente.


// Hinweis: Prüfung ob das review Array Elemente hat:

db.events.find({});

db.events.aggregate([
    {
        $match : {
            eventType : "BATTLE"
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
        $group: {
            _id: "$eventType",
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
    },
    {
        $addFields : {
            newBelligerents : {
                $map: {
                    input: "$belligerents",
                    as: "belligerent",
                    in: {
                        commander : "$$belligerent.commander",
                        nation : "$$belligerent.nation",
                    	troopCount : {
                    	    $sum : "$$belligerent.composition.amount"
                    	},
                    	troopTypes : "$$belligerent.composition.type",
                    	lossCount : {
                    	    $sum : "$$belligerent.losses.amount"
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

// Welche Person war am längsten an der Macht als Prozent seiner Lebensjahre?
db.personalities.find()

db.personalities.aggregate([
    {
        $addFields : {
            duration : {
                $sum : "$events.duration"
            },
            lifetime : {
                $cond: [ {
                    $eq : ["$birth.cat", "BC"]
                }, {
                    $subtract : ["$birth.year", "$death.year"]
                }, {
                    $subtract : ["$death.year", "$birth.year"]
                } ]
            }
        }
    },
    {
        $addFields : {
            reign_percent : {
                $divide : ["$duration", "$lifetime"]
            }
        }
    },
    {
        $group: {
            _id: null,
            maxReignPercent : {
                $max : "$reign_percent"
            },
            persons : {
                $addToSet : {
                    name : "$name",
                    reign_percent : "$reign_percent",
                    duration : "$duration",
                    lifetime : "$lifetime"
                }
            }
        }
    },
    {
        $addFields : {
            persons : {
                $filter: {
                    input: "$persons",
                    as: "person",
                    cond: {
                    	$eq : ["$$person.reign_percent", "$maxReignPercent"]
                    }
                }
            }
        }
    },
    {
        $unwind : "$persons"
    },
    {
        $replaceRoot : {
            newRoot : "$persons"
        }
    }
]);

// $mergeObjects:
db.personalities.find();

db.personalities.aggregate([
    {
        $addFields : {
            events : {
                $map : {
                    input : "$events",
                    as : "event",
                    in : {
                        $mergeObjects : ["$$event", {nickname : "$$event.title"}]
                    }
                }
            }
        }
    }
]);

//Welche Person war am längsten an der Macht als Prozent seiner Lebensjahre?
db.personalities.aggregate([
    {
        $match : {
            death : {
                $exists : true
            }
        }
    },
    {
        $addFields : {
            duration : {
                $sum : "$events.duration"
            },
            lifetime : {
                $cond: [ { $eq :["$birth.cat", "BC"]}, {
                    $subtract : ["$birth.year", "$death.year"]
                }, {
                    $subtract : ["$death.year", "$birth.year"]
                }]
            }
        }
    },
    {
        $addFields : {
            power : {
                $divide : ["$duration", "$lifetime"]
            }
        }
    },
    {
        $group: {
            _id: null,
            maxPower : {
                $max : "$power"
            },
            persons : {
                $addToSet : {
                    name : "$name",
                    lifetime : "$lifetime",
                    duration : "$duration",
                    power : "$power"
                }
            }
        }
    },
    {
        $addFields : {
            persons : {
                $filter: {
                    input: "$persons",
                    as: "person",
                    cond: {
                        $eq : ["$$person.power", "$maxPower"]
                    }
                }
            }
        }
    },
    {
        $unwind : "$persons"
    },
    {
        $replaceRoot : {
            newRoot : "$persons"
        }
    }
]);

//Gib die Person aus, die am längsten geherrscht hat und einen corruption Wert von gt 1 hat
db.personalities.find()

db.personalities.aggregate([
    {
        $match : {
            corruption : {
                $gt : 1
            }
        }
    },
    {
        $addFields : {
            reign_duration : {
                $sum : "$events.duration"
            }
        }
    },
    {
        $group : {
            _id : null,
            max_reign_duration : {
                $max : "$reign_duration"
            },
            persons : {
                $addToSet : {
                    name : "$name",
                    reign_duration : "$reign_duration",
                    corruption : "$corruption"
                }
            }
        }
    },
    {
        $addFields : {
           persons : {
                $filter: {
                    input: "$persons",
                    as: "person",
                    cond: {
                    	$eq : ["$$person.reign_duration", "$max_reign_duration"]
                    }
                }
           }
        }
    },
    {
        $unwind : "$persons"
    },
    {
        $replaceRoot : {
            newRoot : "$persons"
        }
    }
]);

// -- ----------------------------------------------------------------- --
// --  2.) Beispiel
// -- ----------------------------------------------------------------- --
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

db.commander.find({});

db.commander.aggregate([

]);


// 2) Beispiel (einfaches Beispiel)

// schema: personalities

// Finden Sie das event mit der längsten Dauer

// "{title=King of Macedon, duration=16,
// person=Alexander III of Macedon
 //}"

 db.personalities.find()

 db.personalities.aggregate([
    {
        $unwind : "$events"
    },
    {
        $group : {
            _id : "null",
            events : {
                $addToSet : {
                    title : "$events.title",
                    duration : "$events.duration",
                    person : "$fullName"
                }
            }
        }
    },
    {
        $addFields : {
            maxDuration : {
                $max : "$events.duration"
            }
        }
    },
    {
        $addFields : {
            events : {
                $filter: {
                    input: "$events",
                    as: "event",
                    cond: {
                    	$eq : ["$$event.duration", "$maxDuration"]
                    }
                }
            }
        }
    },
    {
        $unwind : "$events"
    },
    {
        $replaceRoot : {
            newRoot : "$events"
        }
    }
 ]);

// 1) Beispiel (komplexes Beispiel)

// schema: events
// Für welche Truppentypen sind die höchsten Verluste zu verzeichnen

// Lösung:
// {
//    _id=HEAVY_INFANTRY,
//    lossCount=495400,
//    battles=[
//        Siege of Vienna II, Battle of Kursk, Battle of Gaugamela, Battle of the Granicus River, Siege of Vienna I, Siege of Vienna I, Battle of Agincourt, Battle of Kursk, Battle of Agincourt, Battle of Issus, Siege of Vienna II]
// }

db.events.find()

db.events.aggregate([
    {
        $addFields : {
            belligerents : {
                $map: {
                    input: "$belligerents",
                    as: "belligerent",
                    in: {
                        $map: {
                            input: "$$belligerent.losses",
                            as: "losses",
                            in: {
                                $mergeObjects: [{name : "$name"}, "$$losses" ]
                            }
                        }
                    }
                }
            }
        }
    },
    {
        $unwind : "$belligerents"
    },
    {
        $unwind : "$belligerents"
    },
    {
        $group : {
            _id : "$belligerents.type",
            lossCount : {
                $sum : "$belligerents.amount"
            },
            battles : {
                $addToSet : "$name"
            }
        }
    },
    {
        $group: {
            _id: null,
            maxLossCount : {
                $max : "$lossCount"
            },
            battles : {
                $addToSet : {
                    _id : "$_id",
                    battles : "$battles",
                    lossCount : "$lossCount"
                }
            }
        }
    },
    {
        $addFields : {
            battles : {
                $filter: {
                    input: "$battles",
                    as: "battle",
                    cond: {
                    	$eq : ["$$battle.lossCount", "$maxLossCount"]
                    }
                }
            }
        }
    },
    {
        $unwind : "$battles"
    },
    {
        $replaceRoot : {
            newRoot : "$battles"
        }
    }
]);

db.personalities.find()

db.personalities.aggregate([
    {
        $addFields : {
            events : {
                $map: {
                    input: "$events",
                    as: "event",
                    in: {
                    	$mergeObjects: [ "$$event", {fullName : "$fullName" }]
                    }
                }
            }
        }
    },
    {
        $unwind : "$events"
    },
    {
        $group: {
            _id: null,
            maxDuration : {
                $max : "$events.duration"
            },
            events : {
                $addToSet : {
                    title : "$events.title",
                    duration : "$events.duration",
                    fullName : "$fullName"
                }
            }
        }
    },
    {
        $addFields : {
            events : {
                $filter: {
                    input: "$events",
                    as: "event",
                    cond: {
                    	$eq : ["$$event.duration", "$maxDuration"]
                    }
                }
            }
        }
    },
    {
        $unwind : "$events"
    },
    {
        $replaceRoot : {
            newRoot : "$events"
        }
    }
]);

db.events.find()

db.events.aggregate([
    {
        $addFields : {
            belligerents : {
                $map: {
                    input: "$belligerents",
                    as: "belligerent",
                    in: {
                    	$map: {
                    	    input: "$$belligerent.losses",
                    	    as: "losses",
                    	    in: {
                    	    	$mergeObjects: [ "$$losses" , {name : "$name"}]
                    	    }
                    	}
                    }
                }
            }
        }
    },
    {
        $unwind : "$belligerents"
    },
    {
        $unwind : "$belligerents"
    },
    {
        $group : {
            _id : "$belligerents.type",
            lossCount : {
                $sum : "$belligerents.amount"
            },
            battles : {
                $addToSet : "$name"
            }
        }
    },
    {
        $group: {
            _id: null,
            maxLossCount : {
                $max : "$lossCount"
            },
            battles : {
                $addToSet : {
                    _id : "$_id",
                    battles : "$battles",
                    lossCount : "$lossCount"
                }
            }
        }
    },
    {
        $addFields : {
            battles : {
                $filter: {
                    input: "$battles",
                    as: "battle",
                    cond: {
                    	$eq : ["$$battle.lossCount", "$maxLossCount"]
                    }
                }
            }
        }
    },
    {
        $unwind : "$battles"
    },
    {
        $replaceRoot : {
            newRoot : "$battles"
        }
    }
]);

//Gib die Nation aus, die die meisten Verluste gemacht hat

db.events.find()

db.events.aggregate([
    {
        $addFields : {
            belligerents : {
                $map: {
                    input: "$belligerents",
                    as: "belligerent",
                    in: {
                    	$map: {
                    	    input: "$$belligerent.losses",
                    	    as: "losses",
                    	    in: {
                    	    	$mergeObjects: [ "$$losses" , {nation : "$$belligerent.nation"}]
                    	    }
                    	}
                    }
                }
            }
        }
    },
    {
        $unwind : "$belligerents"
    },
    {
        $unwind : "$belligerents"
    },
    {
        $group: {
            _id: "$belligerents.nation",
            losses : {
                $sum : "$belligerents.amount"
            }
        }
    },
    {
        $group : {
            _id : null,
            maxLosses : {
                $max : "$losses"
            },
            nations : {
                $addToSet : {
                    nation : "$_id",
                    losses : "$losses"
                }
            }
        }
    },
    {
        $addFields : {
            nations : {
                $filter: {
                    input: "$nations",
                    as: "nation",
                    cond: {
                    	$eq : ["$$nation.losses", "$maxLosses"]
                    }
                }
            }
        }
    },
    {
        $unwind : "$nations"
    },
    {
        $replaceRoot : {
            newRoot : "$nations"
        }
    }
]);