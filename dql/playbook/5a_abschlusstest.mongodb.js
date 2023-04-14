// Gib mir alle Sections, die zu einer terminierenden Seciton führen.
// Terminierende Sections haben als EventType "MISSION_FAILED_EVENT" oder "MISSION_ACCOMPLISHED_EVENT"

db.lw1.aggregate([
  {
    $match: {
      events : {
        $elemMatch : {
          eventType : {
            $in : ["MISSION_FAILED_EVENT", "MISSION_ACCOMPLISHED_EVENT"]
          }
        }
      }
    }
  }
]);

db.lw1.aggregate([{
  $unwind : "$events"
}, {
  $match : {
      $or : [
          {"events.eventType" : "MISSION_ACCOMPLISHED_EVENT"},
          {"events.eventType" : "MISSION_FAILED_EVENT"}
      ]
  }
}, {
  $lookup : {
      from : "lw1",
      pipeline : [{
          $unwind : "$outcomes"
      }],
      as : "sections"
  }
}, {
  $addFields : {
      sections : {
          $filter : {
              input : "$sections",
              as : "section",
              cond : {
                  $eq : ["$$section.outcomes.targetNr", "$sectionNr"]
              }
          }
      }
  }
}, {
  $unwind : "$sections"
}, {
  $group : {
      _id : null,
      sections : {
          $addToSet : "$sections"
      }
  }
}, {
  $unwind : "$sections"
}, {
  $replaceRoot : {
      newRoot : "$sections"
  }
}]);

// die region ausgeben wo die meisten kämpfe stattgefunden haben

db.lw1.aggregate([
  {
    $match : {
      events : {
        $elemMatch : {
          eventType : "COMBAT"
        }
      }
    }
  },
  {
    $unwind : "$events"
  },
  {
    $group: {
      _id: "$region.name",
      sections : {
        $count:{}
      }
    }
  },
  {
    $group : {
      _id : null,
      maxSections : {
        $max : "$sections" 
      },
      regions : {
        $addToSet : "$$ROOT"
      }
    }
  },
  {
    $unwind : "$regions"
  },
  {
    $match: {
      $expr : {
        $eq : [
          "$maxSections",
          "$regions.sections"
        ]
      }
    }
  },
  {
    $replaceRoot: {
      newRoot: "$regions"
    }
  }
]);

db.lw1.aggregate([
  {
    $match : {
      events : {
        $elemMatch : {
          eventType : "COMBAT"
        }
      }
    }
  },
  {
    $addFields : {
      battleCount : {
        $size : "$events"
      }
    }
  },
  {
    $group: {
      _id: "$region.name",
      fightCount : {
        $sum : "$battleCount"
      }
    }
  },
  {
    $group: {
      _id: null,
      maxFightCount: {
        $max: "$fightCount"
      },
      regions : {
        $addToSet : "$$ROOT"
      }
    }
  },
  {
    $unwind : "$regions"
  },
  {
    $match: {
      $expr : {
        $eq : [
          "$maxFightCount",
          "$regions.fightCount"
        ]
      }
    }
  },
  {
    $replaceRoot: {
      newRoot: "$regions"
    }
  }
]);

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
]);