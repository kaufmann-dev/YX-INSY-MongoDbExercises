

// -----------------------------------------------------------------------------------------
// aggregate Syntax
// -----------------------------------------------------------------------------------------
//
// db.<collection>.aggregate([
//     { <pipelineStep> },
//     ...
//
// ]);
//
// <pipelineStep> : { $pipelineOperator : ... }
//
// $pipelineOperator : <documentOperator> || <stuctureOperator> || <relationOperator> || <aggregatOperator>
//
//
// Dokumentstufen : Dokumentstufen verändern die Anzahl der Dokumente im Dokumentenstrom der
//                  Pipeline
//
// <documentOperator>: $match || $sort || $unwind || $limit || $out
//
//
// Stukturstufen: Mit Strukturstufen kann die Struktur
//
// ----------------------------------------------------------------------------------------
// 2.Beispiel) DocumentOperator - $match, $out
// ----------------------------------------------------------------------------------------
// Sammeln Sie alle "RESEARCH_FUNDING_PROJECT" Projekte die von der "TU Wien" gefördert werden,
// in einer Collection projectReport.


db.projects.aggregate([
    {
        $match : {
            projectType : "RESEARCH_FUNDING_PROJECT",
            fundings : {
                $elemMatch : {
                    debitorName : "TU Wien"
                }
            }
        }
    },
    {
        $out : "projectReport"
    }
]);
db.projectReport.find({});

// ----------------------------------------------------------------------------------------
// 3.Beispiel) DocumentOperator - $limit, $skip
// ----------------------------------------------------------------------------------------
// Sammeln Sie Elemente 2 bis 4 Projekte in einer Collection projectReport.


db.projects.aggregate([{
    $sort: {
        title: 1
    }
}, {
    $skip: 1
}, {
    $limit: 3
}, {
    $out: "projectReport"
}]);
db.projectReport.find({});

// ----------------------------------------------------------------------------------------
// 4.Beispiel) StrukturOperator - $project, $addFields
// ----------------------------------------------------------------------------------------
// Sammeln Sie alle REQUEST_FUNDING_PROJECT bzw. RESEARCH_FUNDING_PROJECT Projekte in einer
// Collection projectReport. Berücksichtigen Sie nur Projekte mit 2 oder mehreren subprojekten
//
// Geben Sie die folgenden Felder aus:
//   skalare Felder:      title, projectType, projectState
//   neue Felder:         projectDescription
//   konstante Felder:    marked
//   aggregierte Felder:  subprojectAmount, projectFunding, minReview, maxReview
//   Transformationen:    subprojects (array of titles)


db.projects.aggregate([{
    $match : {
        projectType : { $in: [ "REQUEST_FUNDING_PROJECT", "RESEARCH_FUNDING_PROJECT" ] }
    }
},{
    $project : {
        title : 1,
        projectType : 1,
        projectState : 1,
        projectDescription : "$description",
        subprojectAmount : {
            $size : "$subprojects"
        },
        projectFunding : {
            $sum : "$fundings.amount"
        },
        subprojects : "$subprojects.title"
    }
},{
    $match : {
        subprojectAmount : { $gte : 2 }
    }
},{
    $addFields : {
        marked : true
    }
}]);
db.projectReport.find({});

// ----------------------------------------------------------------------------------------
// 5.Beispiel) StrukturOperator - $lookup, $unwind, $addFields
// ----------------------------------------------------------------------------------------
// Sammeln Sie folgenden Daten für Subprojekte in einer Collection subprojectReports.
//
// subprojectTitle, projectTitle, facility, median, researchValues, subprojectFunding, projectFunding


db.subprojects.aggregate([
{
    $lookup : {
        from : "projects",
        localField : "project._id",
        foreignField : "_id",
        as : "project"
    }
},{
    $unwind : "$project"
},{
    $project : {
        subprojectTitle : "$title",
        projectTitle : "$project.title",
        facility : 1,
        researchValues : ["$appliedResearch", "$focusResearch", "$theoreticalResearch"],
        projectFunding : {
            $sum : "$project.fundings.amount"
        }
    }
}, {
    $out : "subprojectReports"
}]);
db.subprojectReports.find({});

// ----------------------------------------------------------------------------------------
// 7.Beispiel) Aggregatoperatoren: $group
// ----------------------------------------------------------------------------------------
// Ermitteln Sie welchem Projekttyp wieviele Projektdokumente zugeordnet sind. Speichern Sie
// die Daten in der projectReport Collection. Speichern Sie ebenfalls die Titel der den
// Projekttypen zugeordneten Dokumente.


db.projects.aggregate([
    {
        $group: {
            _id: "$projectType",
            projectCount : { $sum : 1 },
            projects : {
                $push : "$title"
            }
        }
    },
    {
        $project: {
            _id : 0,
            projectType : "$_id",
            projectCount : 1,
            projects : 1
        }
    },
    {
        $out : "projectReport"
    }
])
db.projectReport.find({});

// ----------------------------------------------------------------------------------------
// 8.Beispiel) Aggregatoperatoren: $bucket
// ----------------------------------------------------------------------------------------
// Bilden Sie für die projects Collection folgende Buckets. Speichern Sie pro Bucket folgende
// Daten: fundingAmount, title
//
// $bucket:   projectFunding:     0 - 20.000    20.001 - 50.000


db.projects.aggregate([
    {
        $addFields : {
            "fundingAmount" : {
                $sum : "$fundings.amount"
            }
        }
    },
    {
        $bucket : {
            groupBy : "$fundingAmount",
            boundaries : [ 20000, 50000 ],
            default : "more",
            output: {
                "count" : {
                    $sum : 1
                }
            }
        }
    }
])