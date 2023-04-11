db.matches.find()

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

use ('insy');

//Berechnen Sie das Match, bei dem die meisten Tore gefallen sind

db.matches.find();

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
        $group : {
            _id : null,
            maxGoalsScored : {
                $max : "$GoalsScored"
            },
            matches
        }
    }
]);



// Match bei dem die meisten Tore gefallen sind (mithilfe von reduce, map und filter)

db.matches.find();

db.matches.aggregate([
    {
        $match : {
            "$teams.events.eventType" : "GOAL"
        }
    },
    {
        $addFields : {
            MatchBatch : {
                $map : {
                    input : "$teams",
                    as : "team",
                    $in : {
                        goalsScored : {
                            $size : "$$team.events"
                        }
                    }
                }
            }
        }
    }
]);



// matches
//Gibt das Team aus welches im durchschnitt mehr den meistne Ballsitz hat,
//berücksichtige nur Spiele mit mindestens 1000 Pässe haben




















//Gibt das Team aus welches im durchschnitt am meisten Ballsitz hat,
//berücksichtige nur Spiele die mindestens 1000 Pässe haben
db.matches.find()

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
                $gt : 1000
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



