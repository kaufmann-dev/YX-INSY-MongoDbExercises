// Gib mir alle Sections, die zu einer terminierenden Seciton führen.
// Terminierende Sections haben als EventType "MISSION_FAILED" oder "MISSION_ACCOMPLISHED_EVENT"

db.lw1.find({});
db.lw1.aggregate([
    {
        $match: {
            "events" : {
                $elemMatch : {
                    eventType : {
                        $in : ["MISSION_FAILED_EVENT", "MISSION_ACCOMPLISHED_EVENT"]
                    }
                }
            }
        }
    }
])

// die region ausgeben wo die meisten kämpfe stattgefunden haben
db.lw1.aggregate([
    {
        $unwind : "$events"
    },
    {
        $group: {
          _id: "$_id",
          eventCount: {
            $sum : {
                $cond : [
                    { $eq: [ "$events.eventType", "COMBAT" ] },
                    1,
                    0
                ]
            }
          }
        }
    },
    {
      $sort: {
        eventCount: -1
      }
    },
    {
      $limit: 1
    },
    {
        $lookup: {
          from: "lw1",
          localField: "_id",
          foreignField: "_id",
          as: "result"
        }
    },
    {
        $unwind : "$result"
    },
    {
        $replaceRoot: {
          newRoot: "$result"
        }
    }
])