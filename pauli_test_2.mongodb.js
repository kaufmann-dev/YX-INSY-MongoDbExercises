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

db.creature.updateMany({
    projectType : "REQUEST_FUNDING_PROJECT",
    projectState : {
        $nin : ["CREATED", "CANCLED"]
    },
    $where : function(){
        let amount = 0;
        let revision = 0;
        for(let x in this.fundings){
            amount += x.amount;
            revision++;
        }

        return (amount/revision) >= 5000;
    },
    $exists : {
        fundings : true
    },
    $where : function() {
        for(let x in this.fundings){
            return x.debitorName == "Oracle Microsystems inc.";
        }
    }
},{
    $set : {
        changed : true
    },
    $push : {
        funding : {
            _id = ObjectId("874632936283294250329112"),
            debitorName = "HTL Krems",
            amount = new NumberLong(10000)
        }
    }
});