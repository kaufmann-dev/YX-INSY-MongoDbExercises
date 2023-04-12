// Berechnen Sie das Team mit den meisten Fouls

db.matches.aggregate([
    {
        $unwind : "$teams"
    },
    {
        $group: {
            _id: "$teams.name",
            foulsCount : {
                $sum : "$teams.fouls"
            }
        }
    },
    {
        $group: {
            _id: null,
            maxFoulsCount : {
                $max : "$foulsCount"
            },
            matches : {
                $addToSet : {
                    teamName : "$_id",
                    foulCount : "$foulsCount"
                }
            }
        }
    },
    {
        $addFields : {
            matches : {
                $filter: {
                    input: "$matches",
                    as: "match",
                    cond: {
                    	$eq : ["$$match.foulCount", "$maxFoulsCount"]
                    }
                }
            }
        }
    },
    {

        $unwind : "$matches"
    },
    {
        $replaceRoot : {
            newRoot : "$matches"
        }
    }
]);

// Berechnen Sie das Match, bei dem die meisten Tore gefallen sind

db.matches.aggregate([
    {
        $unwind : "$teams"
    },
    {
        $addFields : {
            goals : {
                $size : {
                    $filter : {
                        input : "$teams.events",
                        as : "event",
                        cond : {
                            $eq : ["$$event.eventType", "GOAL"]
                        }
                    }
                }
            }
        }
    },
    {
        $group : {
            _id : "$_id",
            matches : {
                $addToSet : {
                    GoalsScored : {
                        $sum : "$goals"
                    },
                    name : "$teams.name"
                }
            }
        }
    },
    {
        $unwind : "$matches"
    },
    {
        $group: {
          _id: "$_id",
          matchCount: {
            $sum : "$matches.GoalsScored"
          }
        }
    },
    {
        $group : {
            _id: null,
            maxMatchCount : {
                $max : "$matchCount"
            },
            matches : {
                $addToSet : "$$ROOT"
            }
        }
    },
    {
        $unwind : "$matches"
    },
    {
        $match : {
            $expr : {
                $eq : [ "$maxMatchCount", "$matches.matchCount" ]
            }
        }
    },
    {
        $replaceRoot : {
            newRoot : "$matches"
        }
    },
    {
        $lookup: {
          from: "matches",
          localField: "_id",
          foreignField:"_id",
          as: "match"
        }
    },
    {
        $unwind : "$match"
    },
    {
        $replaceRoot: {
          newRoot: "$match"
        }
    }
]);

//todo Match bei dem die meisten Tore gefallen sind (mithilfe von reduce, map und filter)

db.matches.aggregate([
    {
        $unwind : "$teams"
    },
    {
        $unwind : "$teams.events"
    },
    {
        $match : {
            "teams.events.eventType" : "GOAL"
        }
    },
    {
        $addFields : {
            MatchBatch : {
                $map : {
                    input : "$teams",
                    as : "team",
                    in : {
                        goalsScored : {
                            $size : "$$team.events"
                        }
                    }
                }
            }
        }
    }
]);

// Gibt das Team aus welches im durchschnitt am meisten Ballsitz hat,
// berücksichtige nur Spiele die mindestens 1000 Pässe haben

db.matches.aggregate([
    {
        $match: {
            $expr : {
                $gte : [
                    {
                        $sum : "$teams.passes"
                    },
                    1000
                ]
            }
        }
    },
    {
        $unwind : "$teams"
    },
    {
        $group: {
          _id: "$teams.name",
          avgerageBallPossession: {
            $avg : "$teams.ballPossession"
          }
        }
    },
    {
        $group: {
          _id: null,
          maxBallPossession : {
            $max : "$avgerageBallPossession"
          },
          teams  :{
            $addToSet : "$$ROOT"
          }
        }
    },
    {
        $unwind : "$teams"
    },
    {
        $match: {
          $expr : {
            $eq : ["$maxBallPossession", "$teams.avgerageBallPossession"]
          }
        }
    },
    {
        $replaceRoot: {
          newRoot: "$teams"
        }
    }
]);

db.matches.aggregate([
    {
        $addFields : {
            pass_count : {
                $sum : "$teams.passes"
            }
        }
    },
    {
        $unwind : "$teams"
    },
    {
        $match : {
            pass_count : {
                $gte : 1000
            }
        }
    },
    {
        $group : {
            _id : "$teams.name",
            posession : {
                $sum : "$teams.ballPossession"
            },
            match_count : {
                $sum : 1
            }
        }
    },
    {
        $addFields : {
            avg_posession : {
                $divide : ["$posession", "$match_count"]
            }
        }
    },
    {
       $group: {
           _id: null,
           max_ball_posession : {
                $max : "$avg_posession"
            },
            teams : {
                $addToSet : {
                    name : "$_id",
                    ballPosession : "$avg_posession"
                }
            }
       }
    },
    {
        $addFields : {
            teams : {
                $filter: {
                    input: "$teams",
                    as: "team",
                    cond: {
                    	$eq : ["$$team.ballPosession", "$max_ball_posession"]
                    }
                }
            }
        }
    },
    {
        $unwind : "$teams"
    },
    {
        $replaceRoot : {
            newRoot : "$teams"
        }
    }
]);