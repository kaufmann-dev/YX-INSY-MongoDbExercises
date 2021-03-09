use insy;

// -- -------------------------------------------------------------------------------------------- --
// --    Collection: personalities
// -- -------------------------------------------------------------------------------------------- --
db.getCollection("personalities").drop();

var person =   {
    _id  : 1,                          
    name     : "Alexander the Great",       // required  length: 0 - 100
    fullName : "Alexander III of Macedon",  // reuqired  length: 0 - 200
    short    : "The General King",   // required length: 0 - 50    
    titles   : [
        "King of Macedon", "Pharaoh of Egypt", "King of Persia", "Lord of Asia"
    ], // type: stringarray, elements -> length: 0 - 100
    description : "Alexander III of Macedon, commonly known as Alexander the Great, was a king of the ancient Greek kingdom of Macedon and a member of the Argead dynasty.",
    birth : {
        year      : new NumberInt(356), // required
        cat       : "BC",               // required   values: [AC, BC, DC]
        location  : "Pella, Macedon",   // required   length: 0 - 100
        nation    : "Greece",           // required      
        continent : "EUROPE"            // required   values : ["EUROPE", "ASIA", "AMERICA", "AFIRCA", "AUSTRALIA"]
    }, // required
    death : {
        year : new NumberInt(323), // required   values: 0 - 8000
        cat  : "BC"                // required   values: [AC, BC, DC]
    },
    events : [
        {
            title : "King of Macedon",    // required length: 0 - 100
            duration : new NumberInt(16)  // required length: 0 - 100
        }
    ],
    keywords : [
       "King", "General", "Alexander the Great", "Commander"
    ]
};

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
                                enum : ["AC","BC", "DC"]  
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


db.getCollection("personalities").insertMany([
    {
        _id  : 1,
        name     : "Alexander the Great",
        fullName : "Alexander III of Macedon",
        short    : "The General King",
        titles   : [
           "King of Macedon", "Pharaoh of Egypt", "King of Persia", "Lord of Asia"
        ],
        description : "Alexander III of Macedon, commonly known as Alexander the Great, was a king of the ancient Greek kingdom of Macedon and a member of the Argead dynasty.",
        birth : {
            year     : new NumberInt(356),
            cat      : "BC",
            location : "Pella, Macedon",
            nation    : "Greece",
            continent : "EUROPE"
        },
        death : {
            year : new NumberInt(323),
            cat  : "BC"  
        },
        events : [
            { title : "King of Macedon", duration : new NumberInt(16) },
            { title : "Pharaoh of Egypt", duration : new NumberInt(13) },
            { title : "King of Persia", duration : new NumberInt(7) }
        ],
        keywords : [
             "King", "General", "Alexander the Great", "Commander", "Pharaoh"
        ],
        corruption : 3
    }, {
        _id  : 2,
        name     : "Guan Yu",
        fullName : "Guan Yu",
        short    : "The Worrior",
        titles : [
            "General of the Vanguard", "Administrator of Xiangyang", "Lieutenant General"
        ],
        description : "Guan Yu was a military general serving under the warlord Liu Bei during the late Eastern Han dynasty of China.",
        birth : {
            year     : new NumberInt(181),
            cat      : "AC",
            location : "Hedong, China",
            nation    : "China",
            continent : "ASIA"
        },
        death : {
            year : new NumberInt(220),
            cat  : "AC"  
        },
        events : [
            { title : "General of the Vanguard", duration : new NumberInt(5) },
            { title : "Administrator of Xiangyang", duration : new NumberInt(4) },
            { title : "Lieutenant General", duration : new NumberInt(11) },
        ],
        keywords : [
            "General", "Guan Yu", "Commander", "Lord"
        ],
        corruption : 1
    }, {
       _id : 3,
       name     : "Yi Sun-sin",
       fullName : "Yi Sun-sin",
       short    : "The Admiral",
       titles : [ "Admiral" ],
       description : "Admiral Yi Sunsin was a Korean admiral and military general famed for his victories against the Japanese navy during the Imjin war in the Joseon Dynasty. Yi has since been celebrated as a national hero in Korea.",
       birth : {
           year     : new NumberInt(1545),
           cat      : "AC",
           location : "Hanseong, Korea",
           nation    : "Korea",
           continent : "ASIA"
       },
        death : {
            year : new NumberInt(1598),
            cat  : "AC"  
        },
        keywords : [
           "Admiral", "Yi Sun-sin", "Lord", "Naval Battles"
        ],
        corruption : 0
    }, {
       _id : 4,
       name     : "Konfuzius",
       fullName : "Kungtse",
       short    : "The Teacher",
        description : "Confucius was a Chinese philosopher and politician of the Spring and Autumn period who was traditionally considered the paragon of Chinese sages.",
        birth : {
            year     : new NumberInt(551),
            cat      : "BC",
            location : "Zou, China",
            nation    : "China",
            continent : "ASIA"
        },
        death : {
            year : new NumberInt(479),
            cat  : "BC"  
        },
        keywords : [
            "Konfuzius", "Teacher", "Politician", "Philosoph"
        ],
        corruption : 0
    }, {
       _id : 5,
       name     : "Lao Tse",
       fullName : "Laozi",
       short    : "The Silent Teacher",
       description : "Lao Tse commonly translated as Old Master was an ancient Chinese philosopher and writer. He is the reputed author of the Tao Te Ching, the founder of philosophical Taoism",
       birth : {
           year     : new NumberInt(551),
           cat      : "BC",
           location : "Chujen, China",
           nation    : "China",
           continent : "ASIA"
       },
       keywords : [
           "Lao Tse", "Administrator", "Philosoph"
       ],
        corruption : 0
    }, {
       _id : 6,
       name     : "Charles de Gaulle",
       fullName : "Charles de Gaulle",
       short    : "Le President",
       titles   : [
           "Minister of Defence", "Leader of Free France", "Prime Minister of France", "President of France"
       ] ,
       description : "Charles de Gaulle was a French army officer and statesman who led Free France against Nazi Germany in World War II and chaired the Provisional Government of the French Republic from 1944 to 1946 in order to reestablish democracy in France. He rewrote the Constitution of France and founded the Fifth Republic after approval by referendum.",
       birth : {
           year     : new NumberInt(1890),
           cat      : "AC",
           location : "Lille, France",
           nation    : "France",
           continent : "EUROPE"
       },
        death : {
            year : new NumberInt(1970),
            cat  : "AC"  
        },
        events : [
            { title : "Leader of Free France", duration : new NumberInt(4) },
            { title : "Prime Minister of France", duration : new NumberInt(2) },
            { title : "President of France", duration : new NumberInt(10) },
        ],
        keywords : [
           "Charles de Gaulle", "Freedom Fighter", "Allie", "President"
        ],
        corruption : 4
    }, {
       _id : 7,
       name     : "Eisenhower",
       fullName : "Dwight David Ike Eisenhower",
       short    : "Ike",
       titles   : [
           "Chief of Staff of the Army", "Supreme Allied Commander Europe", "President of the United States"
       ],
       description : "Dwight David  Eisenhower was an American politician and soldier who served as the 34th president of the United States from 1953 to 1961. During World War II, he became a five-star general in the Army and served as Supreme Commander of the Allied Expeditionary Force in Europe.",
       birth : {
           year     : new NumberInt(1890),
           cat      : "AC",
           location : "Denison, U.S.",
           nation    : "United States of America",
           continent : "AMERICA"
       },
        death : {
            year : new NumberInt(1969),
            cat  : "AC"  
        },
        events : [
            { title : "Chief of Staff of the Army", duration : new NumberInt(3) },
            { title : "Supreme Allied Commander Europe", duration : new NumberInt(2) },
            { title : "President of the United States", duration : new NumberInt(8) },
        ],
        keywords : [
           "Eisenhower", "Allie", "President", "Commander", "General", "Supreme Commander"
        ],
        corruption : 5
    }, {
       _id : 8,
       name     : "Martin Luther King",
       fullName : "Martin Luther King Jr.",
       short    : "The wise Man",
       titles : [
          "Southern Christian Leadership Conference"
       ],
       description : "Martin Luther King Jr. was an American Baptist minister and activist who became the most visible spokesperson and leader in the Civil Rights Movement from 1955 until his assassination in 1968.",
       birth : {
           year     : new NumberInt(1929),
           cat      : "AC",
           location : "Atlanta, U.S.",
           nation    : "United States of America",
           continent : "AMERICA"
       },
        death : {
            year : new NumberInt(1968),
            cat  : "AC"  
        },
        keywords : [
           "Martin Luther King", "Freedomfighter"
        ],
        corruption : 2
    }, {
       _id : 9,
       name     : "Abraham Lincoln",
       fullName : "Abraham Lincoln",
       short    : "The Fighter",
       titles : [
          "President of the United States"
       ],
       description : "Abraham Lincoln was an American statesman and lawyer who served as the 16th president of the United States from 1861 until his assassination in 1865.",
       birth : {
           year     : new NumberInt(1809),
           cat      : "AC",
           location : "Kentucky, U.S.",
           nation    : "United States of America",
           continent : "AMERICA"
       },
       death : {
            year : new NumberInt(1865),
            cat  : "AC"  
        },
        keywords : [
           "Abraham Lincol", "President"
        ],
        corruption : 4
    }, {
       _id : 10,
       name     : "Toyotomi Hideyoshi",
       fullName : "Toyotomi Hideyoshi",
       short    : "The Fool",
       titles : [
           "Emperor Chief Advisor", "Chancellor of the Realm", "Head of Toyotomi clan"
       ],
       description : "Toyotomi Hideyosh was a Japanese politician of the late Sengoku period regarded as the second Great Unifier of Japan.",
       birth : {
           year     : new NumberInt(1537),
           cat      : "AC",
           location : "Nakamura, Japan",
           nation    : "Japan",
           continent : "ASIA"
       },
        death : {
            year : new NumberInt(1598),
            cat  : "AC"  
        },
        keywords : [
           "Toyotomi Hideyoshi", "Shogun"
        ],
        corruption : 10
    }
]);

db.getCollection("personalities").find({});