use('c_projects');

// -- ----------------------------------------------------------------------------------------- --
// --  1.Beispiel) aggregate Framework
// -- ----------------------------------------------------------------------------------------- --
// Geben Sie für jedes Institut folgenden Daten aus. Speichern Sie die Daten in einer Collection
// facilityReport.
//
// var institute = {
//       _id :  ...,
//       name : "..",
//       code : "...",
//       projects : [
//             {
//                _id : ...,
//                title : ...,
//                projectFunding : ....   
//             }, {
//                ...
//             }         
//       ]
//  };

use('c_projects');
db.facilities.aggregate([
  {
    $lookup : {
      from : "projects",
      localField : "projects.project_id",
      foreignField : "_id",
      as : "projects"
    }
  },
  {
    $unwind : "$projects"
  },
  {
    $project: {
      name : 1,
      code : 1,
      projects : {
        _id : 1,
        title : 1,
        fundingAmount : {
          $sum : "$projects.fundings.amount"
        }
      }
    }
  },
  {
    $group: {
      _id: "$_id",
      name: {
        $first: "$name"
      },
      code: {
        $first: "$code"
      },
      projects: {
        $push : "$projects"
      }
    }
  },
  {
    $out : "facilityReport"
  }
]);
db.facilityReport.find({});

// -- ----------------------------------------------------------------------------------------- --
// --  2.Beispiel) aggregate Framework - $lookup subpipeline
// -- ----------------------------------------------------------------------------------------- --
// Finden Sie das Projekt mit der höchsten Projektförderung. Geben Sie die folgenden Felder aus:
// title, projectType, projectState, projectFunding

use('c_projects');
db.projects.aggregate([
  {
    $group: {
      _id: null,
      maxFunding: { $max: { $sum: "$fundings.amount" } }
    }
  },
  {
    $lookup: {
      from: "projects",
      let: { maxFunding: "$maxFunding" },
      pipeline: [
        {
          $project: {
            _id: 0,
            title: 1,
            projectType: 1,
            projectState: 1,
            projectFunding: { $sum: "$fundings.amount" }
          }
        },
        {
          $match: {
            $expr: {
              $eq: [ "$projectFunding", "$$maxFunding" ]
            }
          }
        }
      ],
      as: "projects"
    }
  },
  {
    $unwind: "$projects"
  },
  {
    $replaceRoot: {
      newRoot: "$projects"
    }
  }
]);

// -- ----------------------------------------------------------------------------------------- --
// --  3.Beispiel) aggregate Framework - if, switch 
// -- ----------------------------------------------------------------------------------------- --
// Für Projekte soll ein projectReport erstellt werden. Dazu wird für jedes Projekt eine Evaluierung
// durchgeführt. 
//
// Erfüllt ein Projekt die folgenden Kriterien werden ihm für folgende Posten Punktwerte zugeschrieben.
//
// REQUEST_FUNDING_PROJECT  -> 20.P
// RESEARCH_FUNDING_PROJECT -> 5.P
//
// IS_EU_SPONSORED    -> 10.P
// IS_FWF_SPONSORED   -> 5.P
// IS_FFG_SPONSORED   -> 3.P
//
// pro Subprojekt     -> 5.P
//
//
// Geben Sie für jedes Projekt folgende Werte aus:
//
// var project = {
//        _id : ...
//        title : ...
//        projectType  : ...
//        projectState : ...
//        projectEveluation: ...
//
//
// Sortieren Sie das Ergebnis nach dem projectEvaluation Wert absteigende.
//
//
// Hinweis: 
// Syntax: expressions
//
//         <expression> := <expression operator> || <system variable> || <field path> || <object>
//                      
//         <operator> := <arithmetic operator> || <array operator> || <boolean operator> || ....
//         <arithmetic operator> :=  $abs || $add || $divide || $multiply || $subtract
//         <array operator>      :=  $arrayElemAt || $map || $in || $filter || $reduce
//         <comparison operator> :=  $eq || $ne || $gte || $lte
//         ...
//
// Syntax:   $cond : {
//              if : {
//                 ...
//              },
//              then : ...
//              else : ...
//          }
//
//          $switch : {
//              branches : [
//                  { case :  <expression>, then :  <expression> }}
//                  ...
//              ]  
//          }
//
//
// Syntax: arithmetic operator :   $op : ["", ""]
// Syntax: comparison operator :   $op : ["", ""]

use('c_projects');
db.projects.aggregate([
  {
    $lookup : {
      from : "subprojects",
      localField : "_id",
      foreignField : "project_id",
      as : "subprojects"
    }
  },
  {
    $project: {
      title : 1,
      projectType : 1,
      projectState : 1,
      projectEveluation : {
        $sum : [
          {
            $cond : [
              { $eq : ["$projectType", "REQUEST_FUNDING_PROJECT"] },
              20,
              0
            ]
          },
          {
            $cond : [
              { $eq : ["$projectType", "RESEARCH_FUNDING_PROJECT"] },
              5,
              0
            ]
          },
          {
            $cond : [
              { $eq : ["$IS_EU_SPONSORED", true] },
              10,
              0
            ]
          },
          {
            $cond : [
              { $eq : ["$IS_FWF_SPONSORED", true] },
              5,
              0
            ]
          },
          {
            $cond : [
              { $eq : ["$IS_FFG_SPONSORED", true] },
              3,
              0
            ]
          },
          {
            $multiply : [
              { $size : "$subprojects" },
              5
            ]
          }
        ]
      }
    }
  }
]);

// -- ----------------------------------------------------------------------------------------- --
// --  4.Beispiel) aggregate Framework - Arrayoperator filter
// -- ----------------------------------------------------------------------------------------- --
// Finden Sie das Projekt mit der hoechsten Projektförderung. Geben Sie die folgenden Felder aus:
// title, projectType, projectState, projectFunding
//
// Syntax: $filter : {
//             input : <array>,
//             as : <item>,
//             cond : { $op : [....] }
//          }

use('c_projects');
db.projects.aggregate([
  {
    $project: {
      _id : 0,
      title: 1,
      projectType: 1,
      projectState: 1,
      projectFunding: {
        $sum: "$fundings.amount"
      }
    }
  },
  {
    $sort: {
      projectFunding: -1
    }
  },
  {
    $group: {
      _id: null,
      maxFunding: {
        $first: "$projectFunding"
      },
      projects: {
        $push: "$$ROOT"
      }
    }
  },
  {
    $project: {
      _id: 0,
      projects: {
        $filter: {
          input: "$projects",
          as: "project",
          cond: {
            $eq: [
              "$$project.projectFunding",
              "$maxFunding"
            ]
          }
        }
      }
    }
  },
  {
    $unwind : "$projects"
  },
  {
    $replaceRoot: {
      newRoot: "$projects"
    }
  }
]);