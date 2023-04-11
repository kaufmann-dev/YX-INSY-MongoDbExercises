use('c_projects');

// --------------------------------------------------------------------------------------
// Abfragen Syntax
// --------------------------------------------------------------------------------------
// Syntax: db.getCollection("<collection>").find(<query>);
//
// Syntax: query => {
//           $logicalOperator : [
//             { <Condition> },
//             { <Condition> }
//           ]            
//         }
//
//
// $logicalOperator := $and || $or || $nor
//
// Syntax: Condition := { <field> : { $compOp : value  }}
//
//         $compOp := $eq || $ne || $lt || $lte || $gt || $gte
//
// --------------------------------------------------------------------------------------
// 2.) Beispiel - Abfragen
// --------------------------------------------------------------------------------------
// a) Finden Sie alle REQUEST_FUNDING_PROJECT Projekte.
use('c_projects');
db.projects.find({});
db.projects.aggregate([
    {
        $match: {
            projectType : "REQUEST_FUNDING_PROJECT"
        }
    }
])







use('c_projects');
db.getCollection("projects").find({
    $and : [
        {    projectType : { $eq: "REQUEST_FUNDING_PROJECT"}}
    ]
});

// b) Finden Sie alle Projekte die vom FWF und von der FFG gesponsert werden.






use('c_projects');
db.projects.aggregate([
    {
        $match : {
            isFWFSponsered : true,
            isFFGSponsered : true
        }
    }
])




use('c_projects');
db.getCollection("projects").find({
    $and : [
        { isFWFSponsered : {$eq : true} },
        { isFFGSponsered : {$eq : true} }
    ]
});

// c) Finden Sie alle Projekte aus die weder "REQUEST_FUNDING_PROJECT" Projekte noch
//    "RESEARCH_FUNDING_PROJECT" Projekte sind.

use('c_projects');
db.projects.aggregate([
    {
        $match : {
            $nor : [
                { projectType : "REQUEST_FUNDING_PROJECT" },
                { projectType : "RESEARCH_FUNDING_PROJECT" }
            ]
        }
    }
])



use('c_projects');
db.getCollection("projects").find({
    $nor : [
        {projectType : {$eq : "REQUEST_FUNDING_PROJECT"}},
        {projectType : {$eq : "RESEARCH_FUNDING_PROJECT"}}
    ]
});

// d) Finden Sie alle Projekte die einen der folgenden Projekttypen haben: REQUEST_FUNDING_PROJECT
//    RESEARCH_FUNDING_PROJECT


use('c_projects');
db.projects.aggregate([
    {
        $match: {
            $or : [
                { projectType : "REQUEST_FUNDING_PROJECT" },
                { projectType : "RESEARCH_FUNDING_PROJECT" }
            ]
        }
    }
])



use('c_projects');
db.getCollection("projects").find({
    $or : [
        {projectType : {$eq : "REQUEST_FUNDING_PROJECT"}},
        {projectType : {$eq : "RESEARCH_FUNDING_PROJECT"}}
    ]
});

// --------------------------------------------------------------------------------------
// 3.) Beispiel - Abfragen / Kurzformen
// --------------------------------------------------------------------------------------
// a) Finden Sie alle REQUEST_FUNDING_PROJECT Projekte.
//
// Kurzform: $and Operator


use('c_projects');
db.getCollection("projects").find({
    projectType: { $eq: "REQUEST_FUNDING_PROJECT" }
});

// b) Finden Sie alle Projekte die vom FWF und von der FFG gesponsert werden.

use('c_projects');
db.getCollection("projects").find({
    $and: [
        { isFFGSponsered: { $eq: true } },
        { isFWFSponsered: { $eq: true } }
    ]
});

// c) Finden Sie alle Subprojekte die einen appliedResearch Wert haben zwischen 50 und 100

use('c_projects');
db.subprojects.aggregate([
    {
        $match: {
            $and : [
                { appliedResearch : { $gte : 50 } },
                { appliedResearch : { $lte : 100}}
            ]
        }
    }
])

use('c_projects');
db.getCollection("subprojects").find({
    $and: [
        { appliedResearch: { $gte: 50 } },
        { appliedResearch: { $lte: 100 } }
    ]
});

// --------------------------------------------------------------------------------------
// -- 4.) Beispiel - Abfragen / Embedded Objects
// --------------------------------------------------------------------------------------
// a) Finden Sie alle Subprojekte die am Institut für Softwareentwicklung durchgeführt
//    werden und einen Förderung haben die höher ist als 10000€.

use('c_projects');
db.subprojects.find({});
db.subprojects.aggregate([
    {
        $match: {
          "facility.name" : "Institut für Softwareentwicklung",
          "funding.amount" : {$gte:10000}
        }
    }
])

use('c_projects');
db.subprojects.aggregate([
    {
        $match:{
            "facility.name" : "Institut für Softwareentwicklung",
            "funding.amount" : { $gt : 10000 }
        }
    }
]);

// --------------------------------------------------------------------------------------
// -- 5.) Beispiel - Abfragen / in Operator
// --------------------------------------------------------------------------------------
// Finden Sie alle Projekte die sich in einem der folgenden Zustände befinden:
// "CREATED", "IN_APPROVEMENT", "APPROVED"


use('c_projects');
db.projects.find({});
db.projects.aggregate([
    {
        $match: {
          "projectState" : {
            $in : ["CREATED", "IN_APPROVEMENT", "APPROVED"]
          }
        }
    }
])

use('c_projects');
db.projects.aggregate([
    {
        $match: {
            projectState: { $in:["CREATED", "IN_APPROVEMENT", "APPROVED"] }
        }
    }
]);

// --------------------------------------------------------------------------------------
// 6.) Beispiel - Abfragen / where Operator
// --------------------------------------------------------------------------------------
// a) Finden Sie alle Projekte die eine Förderung haben die höher ist als 120000.

use('c_projects');
db.projects.aggregate([
  {
    $unwind: "$fundings"
  },
  {
    $group: {
      _id: "$_id",
      fundingAmount: {
        $sum : "$fundings.amount"
      }
    }
  },
  {
    $match: {
      fundingAmount: { $gt: 12000 }
    }
  }
]);

// b) Finden Sie alle Projekte die 2 oder mehrere Förderungen haben.



use ("c_projects");
db.projects.aggregate([
    {
        $match : {
            $expr : {
                $gte : [
                    {
                        $add : [
                            { $toInt : { $cond : [ "$isFWFSponsered", 1, 0 ] } },
                            { $toInt : { $cond : [ "$isFFGSponsered", 1, 0 ] } },
                            { $toInt : { $cond : [ "$isEUSponsered", 1, 0 ] } }
                        ]
                    },
                    2
                ]
            }
        }
    }
  ])
  














use('c_projects');
db.projects.find({
    $where : function (){
        return this.fundings.length >=2;
    }
});

// c) Finden Sie alle Projekte die von der "TU Wien" gefördert werden.

use('c_projects');
db.projects.find({
    $where : function(){
        for(let fundings of this.fundings){
            if(fundings.debitorName = "TU Wien") {
                return true;
            }
            return false;
        }
    }
});

// --------------------------------------------------------------------------------------
// 7.) Beispiel - Abfragen / where Operator
// --------------------------------------------------------------------------------------
// Finden Sie alle RESEARCH_FUNDING_PROJECT Projekte die 2 oder mehr Subprojekte haben.
// Geben Sie für die Projekte folgende Property aus: title, projectType, projectState.
//
// Sortieren Sie das Ergebnis nach dem titel aufsteigend.

use('c_projects');
db.projects.find({
    projectType: "RESEARCH_FUNDING_PROJECT",
    $where : function(){
        return this.subprojects.length >= 2;
    }
}, {
    _id : 0,
    title : 1,
    projectType : 1,
    projectState : 1
}).sort({ title : 1 });