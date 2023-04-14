db.projects.aggregate([
    {
        $unwind : "$fundings"
    },
    {
        $group: {
          _id: "$fundings.debitorName",
          funding_projects : {
            $addToSet : "$$ROOT"
          }
        }
    },
    {
        $project: {
            _id : 0,
            name : "$_id",
            projects : {
                $reduce : {
                    input : "$funding_projects",
                    initialValue : "$_id",
                    in : "$funding_projects._id"
                }
            }
        }
    },
    {
        $out : "debitors"
    }
]);

db.debitors.aggregate([
    {
      $lookup: {
        from: "projects",
        let: {
          pid: "$fundings.project_id",
          debid: "$_id"
        },
        pipeline: [
          {
            $unwind: "$fundings"
          },
          {
            $match: {
              $expr: {
                $and: [
                  {
                    $in: ["$_id", "$$pid"]
                  },
                  {
                    $eq: ["$$debid", "$fundings._id"]
                  }
                ]
              }
            }
          },
          {
            $project: {
              title: 1,
              type: "$projectType",
              state: "$projectState"
            }
          }
        ],
        as: "projects"
      }
    },
    {
      $project: {
        name: 1,
        projects: 1
      }
    }
]);
  