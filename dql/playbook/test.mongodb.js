// find amount of projects for each sectionType
db.lw1.find({});
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
          abilityCount: {
            $ifNull: [
                { $size: "$abilities" },
                0
              ]
          }
        }
    },
    {
        $unset: 'abilities'
    }
])