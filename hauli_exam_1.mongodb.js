// -- ------------------------------------------------------------------------------------------- --
// --    Collection: personalities
// -- ------------------------------------------------------------------------------------------- --
//use insy;
db.getCollection("personalities").drop();

// var person = {
//   _id: 1,
//   name: "Alexander the Great",       // required  length: 0 - 100 
//   fullName: "Alexander III of Macedon",  // reuqired  length: 0 - 200
//   short: "The General King",   // required length: 0 - 50    
//   titles: [
//     "King of Macedon", "Pharaoh of Egypt", "King of Persia", "Lord of Asia"
//   ], // type: stringarray, elements -> length: 0 - 100
//   description: "Alexander III of Macedon, commonly known as Alexander the Great, was a king of the ancient Greek kingdom of Macedon and a member of the Argead dynasty.",
//   birth: {
//     year: new NumberInt(356), // required
//     cat: "BC",               // required   values: [AC, BC, DC]
//     location: "Pella, Macedon"    // required   length: 0 - 100
//   }, // required
//   death: {
//     year: new NumberInt(323), // required   values: 0 - 8000
//     cat: "BC"                // required   values: [AC, BC, DC] 
//   },
// };

db.createCollection("personalities");  //Exercise: Anpassung und Test mit naechstem Insert
use (insy);

db.createCollection("personalities",
    {
        validationAction: "error",
        validationLevel: "strict",
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "fullName", "short", "birth"],
                additionalProperties: true,
                properties: {
                    name: {
                        bsonType: "string",
                        minLength: 0,
                        maxLength: 100
                    },
                    fullName: {
                        bsonType: "string",
                        minLength: 0,
                        maxLength: 200
                    },
                    short: {
                        bsonType: "string",
                        minLength: 0,
                        maxLength: 50
                    },
                    titles: {
                        bsonType: "array",
                        items: {
                            bsonType: "string",
                            minLength: 0,
                            maxLength: 100
                        }
                    },
                    description : {
                        bsonType : "string"                        
                    },
                    birth: {
                        bsonType: "object",
                        required: ["year", "cat", "location"],
                        additionalProperties: false,
                        properties: {
                            year: {
                                bsonType: "int",
                            },
                            cat: {
                                enum: ["AC", "BC", "DC"]
                            },
                            location: {
                                bsonType: "string",
                                minLength: 0,
                                maxLength: 100
                            }
                        }
                    },
                    death: {
                        bsonType: "object",
                        required: ["year", "cat"],
                        additionalProperties: false,
                        properties: {
                            year: {
                                bsonType: "int",
                                minimum: 0,
                                maximum: 8000
                            },
                            cat: {
                                enum: ["AC", "BC", "DC"]
                            }
                        }
                    }
                }
            }
        }
    }
);



db.getCollection("personalities").insertMany([
    {
        _id: 1,
        name: "Alexander the Great",
        fullName: "Alexander III of Macedon",
        short: "The General King",
        titles: [
            "King of Macedon", "Pharaoh of Egypt", "King of Persia", "Lord of Asia"
        ],
        description: "Alexander III of Macedon, commonly known as Alexander the Great, was a king of the ancient Greek kingdom of Macedon and a member of the Argead dynasty.",
        birth: {
            year: new NumberInt(356),
            cat: "BC",
            location: "Pella, Macedon"
        },
        death: {
            year: new NumberInt(323),
            cat: "BC"
        }
    }
]);

db.getCollection("personalities").find({});