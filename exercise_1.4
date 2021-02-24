// --------------------------------------------------------------------
//   1.Beispiel) JSON
// --------------------------------------------------------------------
// Schreiben Sie für folgende c# Klasse ein JSON Objekt und fügen Sie
// es in die Datenbank ein.

/*
public class Person {

     private string _firstName;
     
     private string _lastName;
     
     private Date _birthday;
     
     private int _age;
   
     private float _height;
   
     private float _weight;
     
     private bool _isMale;

     public string FirstName {
            get => _firstName;
            set => _firstName = value;
     }
     
     public string LastName {
            get => _lastName;
            set => _lastName = value;
     }
     
     public float Height {
            get => _height;
            set => _height = value;
     }
     
     public float Weight {
            get => _firstName;
            set => _firstName = value;
     }
     
     public bool IsMale {
            get => _isMale;
            set => _isMale = value;
     }
     
     public int Age {
            get => _age;
            set => _age = value;
     }
     
     public Date Birthday {
            get => _birthday;
            set => _birthday = value;
     }
     
}
*/

db.persons.insertOne({

});

db.persons.insertMany([
   {
     
    }
]);

// --------------------------------------------------------------------
//   2.Beispiel) JSON - Embedded Objects
// --------------------------------------------------------------------
// Schreiben Sie für folgende c# Klasse ein JSON Objekt und fügen Sie
// es in die Datenbank ein.

/*
public class Address {

    private string _location;
   
    private string _city;
     
    private string _code;
     
    private string _country;
   
    public string Location {
        get => _location;
        set => _lacation = value;
    }
   
     public string City {
        get => _city;
        set => _city = value;
    }
   
    public string Code {
        get => _code;
        set => _code = value;  
    }
   
    public string Country {
        get => _country;
        set => _country = value;
    }
}
*/

db.persons.insertOne({

});


// --------------------------------------------------------------------
//   3.Beispiel) JSON - Arrays
// --------------------------------------------------------------------
// Schreiben Sie für folgende c# Klasse ein JSON Objekt und fügen Sie
// es in die Datenbank ein.

/*
public class Item {

    private string _articelNumber;
   
    private string _description;

    private float _price;
   
    public string ArticelNumber {
        get => _articelNumber;
        set => _articelNumber = value;
    }
   
    public string Description {
        get => _description;
        set => _description = value;  
    }
   
    public float Price {
        get => _price;
        set => _price = value;  
    }
}
*/

db.persons.insertOne({
    firstName : "Vladimir",
    lastName  : "Putin",
    address   :  {
        code     :  "3470",
        location :  "Franz Rosskopfgasse 21",
        city     :  "Kirchberg am Wagram",
        country  :  "Austria"
    },
    age       :  new NumberInt(54),
    height    :  new NumberDecimal(1.80),
    weight    :  new NumberDecimal(75.3),
    isMale    :  true,
    keywords  :  ["President", "The Bear"],
    orders    :  [
         { articelNumber : "2332a", description : "Twilight Imperium", price : new NumberDecimal(112) },
         { articelNumber : "2332b", description : "Mage Knight", price : new NumberDecimal(112) }
    ]
});

// --------------------------------------------------------------------
//   4.Beispiel) JSON Schema
// --------------------------------------------------------------------
// Programmieren Sie für folgendes Dokument ein JSON Schema.

var person = {
    firstName : "Yi",     //lenght: 2 - 100  //required
    lastName  : "Sunsin", //lenght: 2 - 100  //required
    age       :  new NumberInt(55),       //Werte: 0 - 200  //required
    height    :  new NumberDecimal(1.78), //Min: 0
    weight    :  new NumberDecimal(78.3), //Min: 0
    isMale    :  true
};


db.getCollection("persons").drop();
db.createCollection(
      "persons", {
          validationAction : "error",
          validationLevel : "strict",
          validator : {
              $jsonSchema : {
                  bsonType : "object",
                  required : ["firstName", "lastName", "age"],
                  additionalProperties : true,
                  properties : {
                      firstName : {
                          
                          bsonType : "string",
                          minLength : 2,
                          maxLength : 100
                      },
                      lastName : {
                          bsonType : "string",
                          minLength : 2,
                          maxLength : 100
                      },
                      age : {
                          bsonType : "int",
                          minimum : 0,
                          maximum : 200
                      },
                      height : {
                          bsonType : "decimal",
                          minimum : 0,
                      },
                      weight : {
                          bsonType : "decimal",
                          minimum : 0
                      },
                      isMale : {
                          bsonType : "bool"
                      }
                  }
              }
          }
      }
);


db.getCollection("persons").insertOne({
    firstName : "Yi",
    lastName  : "Sunsin",
    age : new NumberInt(45),
    height : new NumberDecimal(1.78),
    weight : new NumberDecimal(82.2)
});

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