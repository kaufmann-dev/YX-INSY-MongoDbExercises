

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

db.projects.aggregate([
    {
        $match: {
            projectType : "REQUEST_FUNDING_PROJECT"
        }
    }
]);

db.getCollection("projects").find({
    $and : [
        {    projectType : { $eq: "REQUEST_FUNDING_PROJECT"}}
    ]
});

// b) Finden Sie alle Projekte die vom FWF und von der FFG gesponsert werden.

db.projects.aggregate([
    {
        $match : {
            isFWFSponsered : true,
            isFFGSponsered : true
        }
    }
]);

db.getCollection("projects").find({
    $and : [
        { isFWFSponsered : {$eq : true} },
        { isFFGSponsered : {$eq : true} }
    ]
});

// c) Finden Sie alle Projekte aus die weder "REQUEST_FUNDING_PROJECT" Projekte noch "RESEARCH_FUNDING_PROJECT" Projekte sind.

db.projects.aggregate([
    {
        $match : {
            $nor : [
                { projectType : "REQUEST_FUNDING_PROJECT" },
                { projectType : "RESEARCH_FUNDING_PROJECT" }
            ]
        }
    }
]);

db.getCollection("projects").find({
    $nor : [
        {projectType : {$eq : "REQUEST_FUNDING_PROJECT"}},
        {projectType : {$eq : "RESEARCH_FUNDING_PROJECT"}}
    ]
});

// d) Finden Sie alle Projekte die einen der folgenden Projekttypen haben: REQUEST_FUNDING_PROJECT, RESEARCH_FUNDING_PROJECT

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

db.getCollection("projects").find({
    projectType: { $eq: "REQUEST_FUNDING_PROJECT" }
});

// b) Finden Sie alle Projekte die vom FWF und von der FFG gesponsert werden.

db.getCollection("projects").find({
    $and: [
        { isFFGSponsered: { $eq: true } },
        { isFWFSponsered: { $eq: true } }
    ]
});

// c) Finden Sie alle Subprojekte die einen appliedResearch Wert haben zwischen 50 und 100

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

db.getCollection("subprojects").find({
    $and: [
        { appliedResearch: { $gte: 50 } },
        { appliedResearch: { $lte: 100 } }
    ]
});

// --------------------------------------------------------------------------------------
// 4.) Beispiel - Abfragen / Embedded Objects
// --------------------------------------------------------------------------------------
// a) Finden Sie alle Subprojekte die am Institut für Softwareentwicklung durchgeführt
//    werden und einen Förderung haben die höher ist als 10000€.

db.subprojects.aggregate([
    {
        $match:{
            "facility.name" : "Institut für Softwareentwicklung",
            "funding.amount" : { $gt : 10000 }
        }
    }
]);

// --------------------------------------------------------------------------------------
// 5.) Beispiel - Abfragen / in Operator
// --------------------------------------------------------------------------------------
// Finden Sie alle Projekte die sich in einem der folgenden Zustände befinden:
// "CREATED", "IN_APPROVEMENT", "APPROVED"

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
// a) Finden Sie alle Projekte die eine Förderung haben die höher ist als 120_000.


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
      fundingAmount: { $gt: 120000 }
    }
  }
]);

// b) Finden Sie alle Projekte die 2 oder mehrere Förderungen haben.

db.projects.aggregate([
    {
        $match : {
            $expr : {
                $gte : [
                    {
                        $add : [
                            { $cond : [ "$isFWFSponsered", 1, 0 ] },
                            { $cond : [ "$isFFGSponsered", 1, 0 ] },
                            { $cond : [ "$isEUSponsered", 1, 0 ] }
                        ]
                    },
                    2
                ]
            }
        }
    }
]);

db.projects.aggregate([
    {
        $project: {
            _id : 0,
            title : 1,
            fundingLength : {
                $size : "$fundings"
            }
        }
    },
    {
        $match: {
          fundingLength : {
            $gte : 2
          }
        }
    }
]);

db.projects.find({
    $where : function (){
        return this.fundings.length >=2;
    }
});

// c) Finden Sie alle Projekte die von der "TU Wien" gefördert werden.

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

db.projects.aggregate([
    {
        $match: {
            projectType : "REQUEST_FUNDING_PROJECT",
            $expr : {
                $gte : [
                    {
                        $size : "$subprojects"
                    },
                    2
                ]
            }
        }
    },
    {
        $project: {
          _id : 0,
          title : 1,
          projectType : 1,
          projectState : 1
        }
    }
]);