
// -- ----------------------------------------------------------------------- --
// --  1.Beispiel
// -- ----------------------------------------------------------------------- --
// Für Dokumente folgender Struktur soll ein Collection zusammen mit einem
// Schema definiert werden.

// Legen Sie die Collection unter dem Namen "monsters" an. Es soll möglich sein
// dem Dokument zusätzliche Felder hinzuzufügen. (Das gilt jedoch nicht fuer Objekte
// innerhalb von arrays).


var monster = {
    name : "Frankenstein", // required, length: 2 - 100
    type : "MONSTER",      // required, values = ["MONSTER", "FAIRY", "HANDLER"]
    abilities : [
        {
           name : "SIXTH_SENSE",
           // required, values = ["CAMOUFLAGE", "HUNTIN","SIXTH_SENSE","TRACKING","HEALING","WEAPONSKILL","MINDSHIELD"]  
           description : "This skill ..."
           // required, length : 0 - 200
        }
    ]
    // required
};

db.createCollection("monsters", {
    validationAction : "error",
    validationLevel : "strict",
    validator : {
        $jsonSchema : {
            bsonType : "object",
            required: ["name", "type", "abilities"],
            additionalProperties : true,
            properties : {
                name : {
                    bsonType : "string",
                    minLength : 2,
                    maxLength : 100
                },
                type : {
                    enum : ["MONSTER", "FAIRY", "HANDLER"]
                },
                abilities : {
                    bsonType : "array",
                    items : {
                        bsonType : "object",
                        additionalProperties : false,
                        required : ["name", "description"],
                        properties : {
                            name : {
                                enum : ["CAMOUFLAGE", "HUNTIN","SIXTH_SENSE","TRACKING","HEALING","WEAPONSKILL","MINDSHIELD"]
                            },
                            description : {
                                bsonType : "string",
                                maxLength : 200
                            }
                        }
                    }
                }
            }
        }
    }
});

db.monsters.insertOne(monster);


