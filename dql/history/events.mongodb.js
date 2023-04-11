// Welche Person war am längsten an der Macht als Prozent seiner Lebensjahre?

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

db.personalities.aggregate([
    {
        $project: {
          name : 1,
          ruling : {
            $sum : "$events.duration"
          },
          lifespan : {
            $switch : {
                branches : [
                    {
                        case: {
                            $and : [
                                {
                                    $eq : [ "$birth.cat", "BC" ]
                                },
                                {
                                    $eq : [ "$death.cat", "BC" ]
                                }
                            ]
                            
                        },
                        then : {
                            $subtract : [ "$birth.year", "$death.year" ]
                        }
                    },
                    {
                        case : {
                            $and : [
                                {
                                    $eq : [ "$birth.cat", "AC" ]
                                },
                                {
                                    $eq : [ "$death.cat", "AC" ]
                                }
                            ]
                        },
                        then : {
                            $subtract : [ "$death.year", "$birth.year" ]
                        }
                    },
                    {
                        case : {
                            $eq : [ "$death.cat", "AC" ]
                        },
                        then : {
                            $add : [ "$death.year", "$birth.year" ]
                        }
                    },
                    {
                        case : {
                            $eq : [ "$birth.cat", "AC" ]
                        },
                        then : {
                            $subtract : [ "$birth.year", "$death.year" ]
                        }
                    }
                ],
                default : "unknown"
            }
          }
        }
    },
    {
        $project: {
          name : 1,
          percentRuled : {
            $cond : {
                if : {
                    $or : [
                        {$eq : ["$ruling", 0]},
                        {$eq : ["$lifespan", "unknown"]}
                    ]
                    
                },
                then : 0,
                else : {
                    $round : [
                        {
                            $multiply : [
                                {
                                    $divide : [
                                        "$ruling",
                                        "$lifespan"
                                    ]
                                },
                                100
                            ]
                        },
                        0
                    ]
                    
                }
            }
            
          }
        }
    },
    {
        $group: {
          _id: "$percentRuled",
            field2 : {
                $push :  "$$ROOT"
                
            }
        }
    },
    {
        $limit : 1
    },
    {
        $unwind : "$field2"
    },
    {
        $replaceRoot: {
          newRoot: "$field2"
        }
    }
]);

// $mergeObjects

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

// Welche Person war am längsten an der Macht als Prozent seiner Lebensjahre?

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

// 2) Beispiel (einfaches Beispiel)

// schema: personalities

// Finden Sie das event mit der längsten Dauer

// "{title=King of Macedon, duration=16,
// person=Alexander III of Macedon
//}"

db.personalities.aggregate([
    {
        $unwind : "$events"
    },
    {
        $replaceRoot: {
          newRoot: "$events"
        }
    },
    {
        $group: {
          _id: null,
          maxDuration : {
            $max : "$duration"
          },
          events : {
            $addToSet : "$$ROOT"
          }
        }
    },
    {
        $unwind : "$events"
    },
    {
        $match : {
            $expr : {
                $eq : ["$maxDuration", "$events.duration"]
            }
        }
    },
    {
        $replaceRoot: {
          newRoot: "$events"
        }
    }
]);

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

db.events.aggregate([
    {
        $unwind : "$belligerents"
    },
    {
        $replaceRoot: {
          newRoot: "$belligerents"
        }
    },
    {
        $project: {
          nation : 1,
          losses : {
            amount : "$losses.amount"
          }
        }
    },
    {
        $unwind : "$losses"
    },
    {
        $unwind : "$losses.amount"
    },
    {
        $group: {
          _id: "$nation",
          lossAmount: {
            $sum : "$losses.amount"
          }
        }
    },
    {
        $group: {
          _id: null,
          maxLossCount : {
            $max : "$lossAmount"
          },
          countries : {
            $addToSet : "$$ROOT"
          }
        }
    },
    {
        $unwind : "$countries"
    },
    {
        $match: {
          $expr : {
            $eq : [ "$maxLossCount", "$countries.lossAmount" ]
          }
        }
    },
    {
        $replaceRoot: {
          newRoot: "$countries"
        }
    }
]);

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