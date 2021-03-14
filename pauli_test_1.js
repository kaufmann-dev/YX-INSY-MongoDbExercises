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

db.creature.createCollection({
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






// -- ----------------------------------------------------------------- --
// --  2.Beispiel
// -- ----------------------------------------------------------------- --
// Ändern Sie alle projects Dokumente die folgende Eigenschaften erfüllen:

// I )  Das Projekt ist ein "REQUEST_FUNDING_PROJECT" (projectType).
// II)  Das Projekt befindet sich weder im Zustand "CREATED" noch "CANCLED"
//      (projectState).
// III) Im Durchschnitt belaufen sich die einzelnen Förderungen für das
//      Projekt auf mindestens 5000 (fundings.amount).
// IV)  Prüfen Sie ob das Feld fundigs existiert.
// V)   Das Projekt muss zumindestens eine Förderung von "Oracle Microsystems inc."
//      erhalten haben. (fundings.debitorName)


// Führen Sie folgende Änderungen durch:

// I) Fügen Sie folgende Förderung zum Projekt hinzu:
//    
//    var funding = {
//         _id : ObjectId("874632936283294250329112"),
//         debitorName : "HTL Krems",
//         amount : new NumberLong(10000)
//    }
//  
// II) Fügen Sie ein Feld changed : true hinzu.

db.projects.updateMany({
    projectType : "REQUEST_FUNDING_PROJECT",
    projectState : {
        $nin : ["CREATED", "CANCLED"]
    },
    $where : function() {
        let amount = 0;
        let revision = 0;
        for(let x in this.fundings){
            amount += x.amount; 
            revision++;
        }
        return amount/revision >= 5000;
    },
    $exists : {
        fundings : true
    },
    $where : function(){
        for(let x in this.fundings){
            return x.debitorName == "Oracle Microsystems inc.";
        }
        return false;
    }
},{
    $set : {
        changed : true
    },
    $push : {
        fundings : {
            _id : ObjectId("874632936283294250329112"),
            debitorName : "HTL Krems",
            amount : new NumberLong(10000)
        }
    }
});