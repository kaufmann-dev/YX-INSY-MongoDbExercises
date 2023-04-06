use('c_insy');

// -- ----------------------------------------------------------------------------------------- --
// --  1.Beispiel) aggregate Framework
// -- ----------------------------------------------------------------------------------------- --
// Geben Sie für jedes Institut folgenden Daten aus. Speichern Sie die Daten in einer Collection
// facilityReport.

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

db.facilities.find({});
db.projects.find({});

db.facilities.aggregate([
    {
        $lookup: {
            from: 'projects',
            localField: 'projects.project_id',
            foreignField: '_id',
            as: 'projectsLookup'
        }
    },
    {
        $unwind: '$projectsLookup'
    },
    {
        $project: {
            _id: 1,
            name: 1,
            code: 1,
            projects: {
                _id: "$projectsLookup._id",
                title: "$projectsLookup.title",
                projectFunding:{
                    $sum : "$projectsLookup.fundings.amount"
                }
                
            }
        }
    }
])


// -- ----------------------------------------------------------------------------------------- --
// --  2.Beispiel) aggregate Framework - $lookup subpipeline
// -- ----------------------------------------------------------------------------------------- --
// Finden Sie das Projekt mit der hoechsten Projektförderung. Geben Sie die folgenden Felder aus:
// title, projectType, projectState, projectFunding

db.projects.find({});




// -- ----------------------------------------------------------------------------------------- --
// --  3.Beispiel) aggregate Framework - if, switch 
// -- ----------------------------------------------------------------------------------------- --
// Für Projekte soll ein projectReport erstellt werden. Dazu wird für jedes Projekt eine Evaluierung
// durchgeführt. 

// Erfüllt ein Projekt die folgenden Kriterien werden ihm für folgende Posten Punktwerte zugeschrieben.

// REQUEST_FUNDING_PROJECT  -> 20.P
// RESEARCH_FUNDING_PROJECT -> 5.P

// IS_EU_SPONSORED    -> 10.P
// IS_FWF_SPONSORED   -> 5.P
// IS_FFG_SPONSORED   -> 3.P

// pro Subprojekt     -> 5.P


// Geben Sie für jedes Projekt folgende Werte aus:

// var project = {
//        _id : ...
//        title : ...
//        projectType  : ...
//        projectState : ...
//        projectEveluation: ...


// Sortieren Sie das Ergebnis nach dem projectEvaluation Wert absteigende.


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

// Syntax:   $cond : {
//              if : {
//                 ...
//              },
//              then : ...
//              else : ...
//          }

//          $switch : {
//              branches : [
//                  { case :  <expression>, then :  <expression> }}
//                  ...
//              ]  
//          }

//
// Syntax: arithmetic operator :   $op : ["", ""]
// Syntax: comparison operator :   $op : ["", ""]





// -- ----------------------------------------------------------------------------------------- --
// --  4.Beispiel) aggregate Framework - Arrayoperator filter
// -- ----------------------------------------------------------------------------------------- --
// Finden Sie das Projekt mit der hoechsten Projektförderung. Geben Sie die folgenden Felder aus:
// title, projectType, projectState, projectFunding

// Syntax: $filter : {
//             input : <array>,
//             as : <item>,
//             cond : { $op : [....] }
//          }

db.projects.find({});


