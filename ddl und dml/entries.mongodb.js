// use('_');
// --------------------------------------------------------------------
//   7.Beispiel) JSON Schema
// --------------------------------------------------------------------
// Programmieren Sie für folgendes JSON Dokument ein JSON Schema.

var entry = {
    message : "alora alora", // length: 1 - 4000  //required
    stars    : [3,4,5,2],    // required
    category : ["politics", "finance"], // required
    answers : [
       { message : "ans1" },
       { message : "ans2" }
    ]
};

db.getCollection("entries").drop();
db.createCollection(
   "entries"
);

db.getCollection("entries").insertOne({

});

db.getCollection("entries").find({});