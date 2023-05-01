// gibt für jeden Charakter die Reputation pro Faction aus
db.outerrim.find({});

db.outerrim.aggregate([
  {
    $unwind: '$crew'
  },
  {
    $unwind: '$factionReputation'
  },
  {
    $group: {
      _id: {
        name : "$crew.name",
        faction : "$factionReputation.faction"
      },
      factionReputations : {
        $sum : "$factionReputation.change"
      }
    }
  },
  {
    $group: {
      _id: "$_id.name",
      reputations: {
        $addToSet : {
          name : "$_id.faction",
          reputation : "$factionReputations"
        }
        
      }
    }
  }
]);

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

//* gibt für alle Factions alle Charaktäre und die Reputation die sie bei ihr haben aus
// "_id": "SYNDIKATE",
// "characters": [
//   {
//     "character": "Chewbacca",
//     "change": -130
//   },
//   {
//     "character": "Han Solo",
//     "change": -130
//   }
// ]

db.outerrim.find({});

db.outerrim.aggregate([
  {
    $unwind : "$factionReputation"
  },
  {
    $unwind : "$crew"
  },
  {
    $group: {
      _id: {
        name : "$factionReputation.faction"
      },
      changes: {
        $addToSet : {
          character: "$crew.name",
          change: "$factionReputation.change"
        }
      }
    }
  },
  {
    $unwind : "$changes"
  },
  {
    $
  }
]);

db.outerrim.aggregate([{
  $unwind : "$crew"
}, {
  $unwind : "$factionReputation"
}, {
  $group : {
      _id : {
          name : "$crew.name",
          faction : "$factionReputation.faction"
      },
      change : {
          $sum : "$factionReputation.change"
      }
  }
}, {
  $group : {
      _id : "$_id.faction",
      data : {
          $push : "$$ROOT"
      },
      maxChange : {
          $max : "$change"
      }
  }
}, {
  $addFields : {
      data : {
          $map : {
              input : "$data",
              as: "dataval",
              in : {
                  character : "$$dataval._id.name",
                  change : "$$dataval.change"
              }
          }
      }
  }
}, {
  $project : {
      characters : {
          $filter : {
              input : "$data",
              as : "dataval",
              cond : {
                  $eq : ["$$dataval.change", "$maxChange"]
              }
          }
      }
  }
}]);