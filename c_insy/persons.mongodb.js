use('test');
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