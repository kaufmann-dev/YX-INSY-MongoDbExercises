// PROJECT
    // Method 1
    db.createCollection("project");
    var project = {
        titel: "Motorensimulation",
        description: "bla bla bla ...",
        reviews: new NumberInt(3),
        funding: 50000.50,
        duration: new NumberLong(650032),
        isSmallProject: true,
        projectBegin: new Date('Jan 2, 2020'),
        projectEnd: new Date('Dec 1, 2020')
    };
    db.getCollection("project").insertOne(project);

    //Method 2
    db.createCollection("project", {
        titel: "Motorensimulation",
        description: "bla bla bla ...",
        reviews: new NumberInt(3),
        funding: 50000.50,
        duration: new NumberLong(650032),
        isSmallProject: true,
        projectBegin: new Date('Jan 2, 2020'),
        projectEnd: new Date('Dec 1, 2020')
    });

// SUBPROJECT
db.createCollection("subproject",{
    facility: {
        name: "Institut für Computergrafik",
        code: "143.221.42"
    },
    title: "Finite Elemente",
    appliedResearch: new NumberInt(20),
    theoreticalResearch: new NumberInt(80) 
});

// DISHES
function Ingredient(name) {
    this.name = name;
}

db.createCollection("dishes", {
    name : "Wiener Schnitzel",
    reviews : [
        "Toll", "Wunderbar"
    ],
    points : [
        3, 5, 4
    ],
    Ingredients : [
        new Ingredient("Putenbrust"),
        new Ingredient("Ei"),
        new Ingredient("Semmelbrösel")
    ]
});

// PERSONALITIES JSON VALIDATION SCHEMA
db.createCollection(
   "personalities", {
        validationLevel  : "strict",
        validationAction : "error",
        validator : {
            $jsonSchema : {
                bsonType : "object",
                required : [
                   "name", "fullName", "short", "description", "birth"
                ],
                additionalProperties : true,
                properties : {
                    name : {
                        bsonType : "string",
                        maxLength : 100
                    },
                    fullName : {
                        bsonType : "string",
                        maxLength : 200
                    },
                    short : {
                        bsonType : "string",
                        maxLength : 50  
                    },
                    titles : {
                        bsonType : "array",
                        items : {
                           bsonType  : "string",
                           maxLength :  100
                        }
                    },
                    description : {
                        bsonType : "string"                        
                    },
                    birth : {
                        bsonType : "object",
                        required : ["year", "cat", "location", "nation", "continent"],
                        additionalProperties : false,
                        properties : {
                            year : {
                                bsonType : "int",
                                minimum : 0,
                                maximum : 8000  
                            },
                            cat : {
                                enum : ["AC", "BC", "DC"]  
                            },
                            location : {
                                bsonType : "string",
                                maxLength : 100
                            },
                            nation : {
                                bsonType : "string"
                            },
                            continent : {
                                enum : ["EUROPE", "ASIA", "AMERICA", "AFIRCA", "AUSTRALIA"]  
                            }
                        }
                    },
                    death : {
                        bsonType : "object",
                        required : ["year", "cat"],
                        additionalProperties : false,
                        properties : {
                            year : {
                                bsonType : "int",
                                minimum : 0,
                                maximum : 8000  
                            },
                            cat : {
                                enum : ["AC","BC", "DC"]  
                            }
                        }                        
                    },
                    events : {
                        bsonType : "array",
                        items : {
                             bsonType : "object",
                             required : [ "title", "duration" ],
                             additionalProperties : false,
                             properties : {
                                 title : {
                                     bsonType : "string",
                                     maxLength : 100  
                                 },
                                 duration : {
                                     bsonType : "int",
                                     minimum : 0,
                                     maximum : 100
                                 }
                             }                                                            
                        }
                    }
                }
            }            
        }
    }
);

// TEST
db.createCollection("newTestCollection", {
    validationLevel : "strict",
    validationAction : "error",
    validator : {
        $jsonSchema : {
            bsonType : "object",
            required : ["firstName", "lastName"],
            additionalProperties : true,
            properties : {
                firstName : {
                    bsonType : "string",
                    minLength: 3,
                    maxLength : 30
                },
                lastName : {
                    bsonType : "string",
                    minLength : 3,
                    maxLength : 30
                },
                nicknames : {
                    bsonType : "array",
                    items : {
                        bsonType : "string",
                        minLength : 3,
                        maxLength : 100
                    }
                },
                personalities : {
                    enum : ["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP"]
                },
                car : {
                    bsonType : "object",
                    required : ["manufactorer", "model", "year"],
                    additionalProperties : false,
                    properties : {
                        manufactorer : {
                            bsonType : "string",
                            minLength : 3,
                            maxLength : 100
                        },
                         model : {
                            bsonType : "string",
                            minLength : 3,
                            maxLength : 100
                        },
                         year : {
                            bsonType : "int",
                            minimum : 1900,
                            maximum : 2021
                        }
                    }
                }
            }
        }
    }
});

db.newTestCollection.count();

var bruh = {
    firstName : "David",
    lastName : "Kaufmann"
};

db.getCollection("newTestCollection").insertOne(bruh);

db.newTestCollection.find({});