use('test');
// --------------------------------------------------------------------
//   6.Beispiel) JSON Schema
// --------------------------------------------------------------------
// Programmieren Sie für folgendes JSON Dokument ein JSON Schema.

var cruise = {
    title : "Golden Cruise",   //
    description : "bla bla bla ...", //
    ship : {  
        name : "Phönix", //
        type : "CRUISE_SHIP",
        //
        cabinCount : 450 //
    }
};


db.getCollection("cruises").drop();
db.createCollection(
   "cruises", {
       validationAction: "error",
       validationLevel:"strict",
       validator:{
           $jsonSchema:{
               bsonType:"object",
               required:["title","ship"],
               additionalProperties : true,
               properties:{
                   title:{
                       bsonType:"string",
                       minLength:0,
                       maxLength:100
                   },
                   description:{
                       bsonType:"string"
                   },
                   ship:{
                       bsonType: "object",
                       required:["name","type","cabinCount"],
                       additionalProperties:false,
                       properties:{
                           name:{
                               bsonType:"string"
                           },
                           type:{
                               enum:["CRUISE_SHIP", "AIRCRAFT_CARRIER", "SUBMARINE"]
                           },
                           cabinCount:{
                               bsonType:"int",
                               minimum: 0,
                               maximum:2000
                           }
                       }
                   }
               }
           }
       }
   }
);

db.getCollection("cruises").insertOne({
    title:"Golden Grundgesetz",
    ship:{
        name:"WTF Schiff",
        type:"AIRCRAFT:CARRIER",
        cabinCount: new NumberInt(23)
    }
});

db.getCollection("cruises").find({});