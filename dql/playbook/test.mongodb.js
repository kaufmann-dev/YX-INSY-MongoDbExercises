// find amount of projects for each sectionType
db.lw1.aggregate([
    {
        $group: {
          _id: "$sectionType",
          documentCount: {
            $count:{}
          }
        }
    }
]);

db.lw1.aggregate([
    {
        $group: {
            _id: "$sectionType",
            count: {
                $sum: 1
            }
        }
    }
]);

// remove abilities and add abilityCount

db.lw1.aggregate([
    {
        $addFields: {
            abilityCount : {
                $cond : {
                    if: {
                        $ifNull : ["$abilities", false]
                    },
                    then : {
                        $size : "$abilities"
                    },
                    else : 0
                }
            }
        }
    },
    {
        $unset : "abilities"
    }
]);