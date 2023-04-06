use('c_insy');

// --------------------------------------------------------------------------------------

// -- 1.) Beispiel - Abfragen Syntax
// --------------------------------------------------------------------------------------
// Syntax: db.getCollection("<collection>").find(<query>);

/* Syntax: query => {
              $logicalOperator : [
                 { <Condition> },
                 { <Condition> }
              ]
           }
*/

// $logicalOperator := $and || $or || $nor

// Syntax: Condition := { <field> : { $compOp : value  }}

//         $compOp := $eq || $ne || $lt || $lte || $gt || $gte

// --------------------------------------------------------------------------------------
// -- 2.) Beispiel - Abfragen
// --------------------------------------------------------------------------------------
// a) Finden Sie alle REQUEST_FUNDING_PROJECT Projekte.


db.projects.find();
db.projects.aggregate([
    {
        $match: {
            $and: [
                {projectType: {$eq:"REQUEST_FUNDING_PROJECT"}}
            ]
        }
    }
]);


// b) Finden Sie alle Projekte die vom FWF und von der FFG gesponsert werden.

db.projects.find();
db.projects.aggregate([
    {
        $match: {
            $and: [
                {isFFGSponsered: {$eq:true}},
                {isFWFSponsered: {$eq:true}}
            ]
        }
    }
]);

// c) Finden Sie alle Projekte die weder "REQUEST_FUNDING_PROJECT" Projekte noch
//    "RESEARCH_FUNDING_PROJECT" Projekte sind.

db.projects.find();
db.projects.aggregate([
    {
        $match: {
            $nor: [
                {projectType: {$eq:"REQUEST_FUNDING_PROJECT"}},
                {projectType: {$eq:"RESEARCH_FUNDING_PROJECT"}}
            ]
        }
    }
]);


// d) Finden Sie alle Projekte die einen der folgenden Projekttypen haben: REQUEST_FUNDING_PROJECT
//    RESEARCH_FUNDING_PROJECT

db.projects.find();
db.projects.aggregate([
    {
        $match:{
            $or: [
                {projectType: {$eq:"REQUEST_FUNDING_PROJECT"}},
                {projectType: {$eq: "RESEARCH_FUNDING_PROJECT"}}
            ]
        }
    }
]);

// e) Finden Sie alle Subprojekte die einen appliedResearch Wert haben von 50 bis 100

db.subprojects.find();
db.subprojects.aggregate([
    {
        $match:{
            $and:[
                {appliedResearch: {$gte:50}},
                {appliedResearch: {$lte:100}}
            ]
        }
    }
]);

// --------------------------------------------------------------------------------------
// -- 3.) Beispiel - Abfragen / Kurzformen
// --------------------------------------------------------------------------------------
// a) Finden Sie alle REQUEST_FUNDING_PROJECT Projekte.

// Kurzform: $and Operator
/*db.getCollection("projects").find({
    $and: [
        { projectType: { $eq: "REQUEST_FUNDING_PROJECT" } }
    ]
});*/

db.projects.aggregate(
    {
        $match: {
            projectType : "REQUEST_FUNDING_PROJECT"
        }
    }
);


// b) Finden Sie alle Projekte die vom FWF und von der FFG gesponsert werden.

db.getCollection("projects").find({
    $and: [
        { isFFGSponsered: { $eq: true } },
        { isFWFSponsered: { $eq: true } }
    ]
});

db.projects.aggregate([
    {
        $match:{
            isFFGSponsered:true,
            isFWFSponsered:true
        }
    }
]);



// c) Finden Sie alle Subprojekte die einen appliedResearch Wert haben zwischen 50 und 100

db.getCollection("subprojects").find({
    $and: [
        { appliedResearch: { $gte: 50 } },
        { appliedResearch: { $lte: 100 } }
    ]
});

db.subprojects.aggregate([
   {
        $match:{
            appliedResearch:{$gte:50,$lte:100}
        }
   }
]);

// --------------------------------------------------------------------------------------
// -- 4.) Beispiel - Abfragen / Embedded Objects
// --------------------------------------------------------------------------------------
// a) Finden Sie alle Subprojekte die am Institut für Softwareentwicklung durchgeführt
//    werden und einen Förderung haben die höher ist als 10000€.

db.subprojects.find({
    $and:[
        {}
    ]
});

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

db.projects.find();
db.projects.aggregate([
    {
        $match: {
            projectState: { $in:["CREATED", "IN_APPROVEMENT", "APPROVED"] }
        }
    }
]);


// --------------------------------------------------------------------------------------
// -- 6.) Beispiel - Abfragen / where Operator
// --------------------------------------------------------------------------------------
// a) Finden Sie alle Projekte die eine Förderung haben die höher ist als 120000.




// b) Finden Sie alle Projekte die 2 oder mehrere Förderungen haben.




// c) Finden Sie alle Projekte die von der "TU Wien" gefördert werden.




// --------------------------------------------------------------------------------------
// -- 7.) Beispiel - Abfragen / where Operator
// --------------------------------------------------------------------------------------
// Finden Sie alle RESEARCH_FUNDING_PROJECT Projekte die 2 oder mehr Subprojekte haben.
// Geben Sie für die Projekte folgende Property aus: title, projectType, projectState.

// Sortieren Sie das Ergebnis nach dem titel aufsteigend.