// Fundings für jedes Project berechnen ohne sum operator
// Zu jedem Funding 150.000 dazuzählen
db.projects.aggregate([{
    $addFields : {
        fundingAmount : {
            $reduce: {
                input: "$fundings.amount",
                initialValue: 0,
                in: {
                    $add : ["$$value", "$$this"]
                }
            }
        }
    }
}, {
    $addFields : {
        adjustedFundings : {
            $map: {
                input: "$fundings",
                as: "funding",
                in: {
                $mergeObjects: [ "$$funding", {
                    amount : {
                            $add : ["$$funding.amount", 150000]
                        }
                    }]
                }
            }
        }
    }
}])

db.projects.find()

db.projects.aggregate([
    {
        $addFields : {
            fundingAmount : {
                $sum :"$fundings.amount"
            }
        }
    },
    {
        $addFields : {
            fundingAmount : {
                $cond: [ {$eq : ["$projectType", "MANAGEMENT_PROJECT"]}, {$add : ["$fundingAmount", 15000]},
                 {
                    $switch: {
                        branches: [
                            { case: {$and : [{$gte :["$fundingAmount", 0]}, {$lte : ["$fundingAmount", 5000]}]}, then: { $multiply : ["$fundingAmount", 1.05]} },
                            { case: {$and : [{$gte :["$fundingAmount", 5001]}, {$lte : ["$fundingAmount", 20000]}]}, then: { $multiply : ["$fundingAmount", 1.1]} },
                            { case: {$and : [{$gte :["$fundingAmount", 20001]}, {$lte : ["$fundingAmount", 100000]}]}, then: { $multiply : ["$fundingAmount", 1.12]} },
                            { case: {$gte : ["$fundingAmount", 100001]}, then: { $multiply : ["$fundingAmount", 1.15]} },
                        ],
                        default: "$fundingAmount"
                    }
                 }
                 ]
            }
        }
    },
    {
        $project : {
            fundingAmount : 1,
            projectType : 1,
            title : 1
        }
    }
]);

// -- ----------------------------------------------------------------------------------------- --
// --  1.Beispiel) aggregate Framework
// -- ----------------------------------------------------------------------------------------- --
// Zur Abgleichung der Inflationsrate wird die Förderung für Projekte
// folgendermassen angepaßt werden. Für Managementprojekte (MANAGEMENT_PROJECT)
// soll keine Abgleichung erfolgen. Managementprojekte erhalten eine
// zusätzliche Förderung von der TU Wien in der Höhe von 15000.

// FundingAmount       Increase
// 0       -  5.000        5%
// 5.001   -  20.000      10%
// 20.001  -  100.000     12%
// 100.001 +              15%

// Hinweis:

// $switch : {
//     branches : [
//        {case : <exp>, then: <exp>},
//        {case : <exp>, then: <exp>},
//         ...
//     ],
//     default : <exp>
//  }

// $cond : {
//      if : <boolean-expression>,
//      then : <true-case>,
//      else : <false-case>
//  }

//  $map: {
//     input: <expression>,
//     as: <string>,
//     in: <expression>
//  }

// $concatArrays : [ <array1> , <array2> ]

db.projects.find()

db.projects.aggregate([{
    $addFields:{
        fundingAmount:{
            $sum: "$fundings.amount"
        }
    }
},{
    $addFields:{
        fundingAmount:{
            $cond: [ {$eq: ["$projectType", "MANAGEMENT_PROJECT"]}, {$add : ["$fundingAmount", 15000]}, {
        $switch:{
            branches:[
                {case: {$and  : [{$gte : ["$fundingAmount",0]},{$lte: ["$fundingAmount",5000]}]}, then:{ $multiply : ["$fundingAmount", 1.05]}},
                {case: {$and  : [{$gte : ["$fundingAmount",5001]},{$lte: ["$fundingAmount",20000]}]}, then:{ $multiply : ["$fundingAmount", 1.1]}},
                {case: {$and  : [{$gte : ["$fundingAmount",20001]},{$lte: ["$fundingAmount",100000]}]}, then:{ $multiply : ["$fundingAmount", 1.12]}},
                {case: {$gte : ["$fundingAmount",100001]}, then: { $multiply: ["$fundingAmount", 1.15]}}

            ],
            default:"$fundingAmount"
        }
        }
            ]
        }
    }
},
{
    $project:{
        projectTpye:1,
        fundingAmount:1
    }
}]);
