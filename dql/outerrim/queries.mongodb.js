// gibt für jeden Charakter die Reputation pro Faction aus

db.outerrim.aggregate([
    {
        $project : {
            crew : 1,
            factionReputation : 1
        }
    }, {
        $unwind : "$crew"
    }, {
        $unwind : "$factionReputation"
    }, {
        $group : {
            _id : {
                name : "$crew.name",
                faction : "$factionReputation.faction"
            },
            reputation : {
                $sum : "$factionReputation.change"
            }
        }
    }, {
        $group : {
            _id : "$_id.name",
            reputations : {
                $push : "$$ROOT"
            }
        }
    }, {
        $project : {
            reputations : {
                $map : {
                    input : "$reputations",
                    as : "reputation",
                    in : {
                        faction : "$$reputation._id.faction",
                        value : "$$reputation.reputation"
                    }
                }
            }
        }
    }, {
        $sort : {
            _id : 1
        }
    }
]);