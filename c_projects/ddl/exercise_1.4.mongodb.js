// --------------------------------------------------------------------
//   5.Beispiel) JSON Schema
// --------------------------------------------------------------------
// Programmieren Sie für folgendes person Dokument ein JSON Schema.
// Hinweis: Alle Attribute sind required

var project = {
    title : "Produktionsplanungssysteme", // lenght: 5 - 100 // required
    projectType  : "REQUEST_FUNDING_PROJECT",
    /*[REQUEST_FUNDING_PROJECT, RESEARCH_FUNDING_PROJECT, MANAGEMENT_PROJECT, STIPENDIUM]*/
    projectState : "APPROVED",
    /*[APPROVED, CREATED, CANCLED, RUNNING]*/
    description  : "Projekt zur Planung von Produktionsplanungssystemen", // length: 4000
    projectBegin : ISODate("2012-06-22T22:00:00.000+0000"),
    isFWFSponsered : true,
    isFFGSponsered : false
};


db.getCollection("projects").drop();
db.createCollection(
   "projects", {
       validationAction : "error",
       validationLevel : "strict",
       validator : {
           $jsonSchema : {
               bsonType : "object",
               required : ["title"],
               additionalProperties : true,
               properties : {
                   title : {
                       bsonType : "string",
                       minLength : 5,
                       maxLength : 100
                   },
                   projectType : {
                       enum : ["REQUEST_FUNDING_PROJECT", "RESEARCH_FUNDING_PROJECT", "MANAGEMENT_PROJECT", "STIPENDIUM"]
                   },
                   projectState : {
                       enum : ["APPROVED", "CREATED", "CANCLED", "RUNNING"]
                   },
                   projectBegin : {
                       bsonType : "date"
                   }
               }
           }
       }
   }
);


db.getCollection("projects").insertOne({
    title : "Finite Elemente",
    projectType : "REQUEST_FUNDING_PROJECT",
    projectState : "APPROVED"
});