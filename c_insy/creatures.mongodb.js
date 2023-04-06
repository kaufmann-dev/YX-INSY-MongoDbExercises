use('test');
// -- ---------------------------------------------------------------------- --
// --  1.Beispiel
// -- ----------------------------------------------------------------------- --
// Für Dokumente folgender Struktur soll ein Collection zusammen
// mit einem Schema definiert werden.

// Legen Sie die Collection unter dem Namen "creatures" an. Es soll
// möglich sein dem Dokument zusätzliche Felder hinzuzufügen. (Das
// gilt jedoch nicht fuer Objekte innerhalb von arrays).
//


var creature = {
    creatureType : "DRAGON",  
    // required, values = ["HUMAN", "ELF", "ORC", "DRAGON", "GRIFFIN", "EAGLE", "MANTICORE"]  
    size : "TREMENDOUS",
    // required, values = ["TINY", "SMALL", "MEDIUM", "LARGE", "TREMENDOUS"]
    description : "A dragon is a very dangerous creature ...", // length: 0 - 1000
    attackValue : new NumberInt(12), // required, min = 0, max = 21
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

db.createCollection("creatures",{
    validationLevel : "strict",
    validationAction : "error",
    validator : {
        $jsonSchema : {
            bsonType : "object",
            required : ["creatureType", "size", "attackValue", "abilities"],
            additionalProperties : true,
            properties : {
                creatureType : {
                    enum : ["HUMAN", "ELF", "ORC", "DRAGON", "GRIFFIN", "EAGLE", "MANICORE"]
                },
                size : {
                    enum : ["TINY", "SMALL", "MEDIUM", "LARGE", "TREMENDOUS"]
                },
                description : {
                    bsonType : "string",
                    minLength : 0,
                    maxLength : 100
                },
                attackValue : {
                    bsonType : "int",
                    minimum : 0,
                    maximum : 21
                },
                abilities : {
                    bsonType : "array",
                    items : {
                        bsonType : "object",
                        required : ["name", "description"],
                        additionalProperties : false,
                        properties : {
                            name : {
                                enum : ["CAMOUFLAGE", "HUNTIN","SIXTH_SENSE","TRACKING","HEALING","WEAPONSKILL","MINDSHIELD"]
                            },
                            description : {
                                bsonType : "string",
                                minLength : 0,
                                maxLength : 200
                            }
                        }
                    }
                }
            }
        }
    }
});






