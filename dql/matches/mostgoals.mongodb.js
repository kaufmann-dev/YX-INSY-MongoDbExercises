// Finde den Spieler mit den meisten Toren

db.matches.aggregate([{
    $unwind : "$teams"
}, {
    $unwind : "$teams.events"
}, {
    $group : {
        _id : "$teams.events.player",
        events : {
            $push : "$teams.events.eventType"
        }
    }
}, {
    $project : {
        goals : {
            $size : {
                $filter : {
                    input : "$events",
                    as : "event",
                    cond : {
                        $eq : ["$$event", "GOAL"]
                    }
                }
            }
        }
    }
}, {
    $group : {
        _id : null,
        maxGoals : {
            $max : "$goals"
        },
        players : {
            $push : "$$ROOT"
        }
    }
}, {
    $addFields : {
        players : {
            $filter : {
                input : "$players",
                as : "player",
                cond : {
                    $eq : ["$$player.goals", "$maxGoals"]
                }
            }
        }
    }
}, {
    $unwind : "$players"
}, {
    $replaceRoot : {
        newRoot : "$players"
    }
}]);