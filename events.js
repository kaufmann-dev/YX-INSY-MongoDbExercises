 use insy;

// -- --------------------------------------------------------------------------------------------- --
// --    Collection: events
// -- --------------------------------------------------------------------------------------------- --
db.getCollection("events").drop();

var event =   {
    name : "Battle of Gaugamela",    // required  length: 0-100
    date :  new Date('Oct 1, 331'),  // required
    cat : "BC",           // required   values: [ AC, BC ]
    eventType : "BATTLE", // required   values: [ BATTLE, SIEGE ]
    location : "Iraq",    // length: 0 - 100
    war : "Alexander the Great - Conquest of the Persian Empire",
    victor   : "Alexander the Great", // length: 0-100
    territorialChange : "Alexander gains Babylon, half of Persia and all other parts of Mesopotamia.",
    description : "The Battle of Gaugamela, was the decisive battle of Alexander the Great's invasion of the Persian Achaemenid Empire. In 331 BC Alexander's army of the Hellenic League met the Persian army of Darius III near Gaugamela, close to the modern city of Dohuk in Iraqi Kurdistan. Though heavily outnumbered, Alexander emerged victorious due to his army's superior tactics and his deft employment of light infantry. It was a decisive victory for the Hellenic League and led to the fall of the Achaemenid Empire.", // required
    belligerents : [
        {
            commander : "Alexander the Great",  // required  length: 0-100
            nation : "Macedonia",               // required  length: 0-100
            generals : [
                "Hephaestion", "Ptolemy", "Parmenion", "Cleitus"
            ], // required
            composition : [
                {
                    type : "HEAVY_INFANTRY",       /* required values: [ "HEAVY_INFANTRY", "LIGHT_INFANTRY", "CAVALRY", "MERCENARIES", "ARCHER", "CHARIOTS", "HEAVY_CAVALRY", "BEASTS", "WARSHIP", "SHIP", "ARQUEBUSES", "ARTILLERY", "HEAVY_ARTILLERY","AIRCRAFT_CARRIER", "BATTLE_SHIP", "HEAVY_CRUISERS", "DESTROYER", "AIRCRAFT", "SUBMARINE", "TANKS", "GUNS"]   */
                    amount : new NumberInt(31000)  // required                  
                }
            ], // required
            losses : [
                {
                    type : "HEAVY_INFANTRY", // required
                    /* required values: [ "HEAVY_INFANTRY", "LIGHT_INFANTRY", "CAVALRY", "MERCENARIES", "ARCHER", "CHARIOTS", "HEAVY_CAVALRY", "BEASTS", "WARSHIP", "SHIP", "ARQUEBUSES", "ARTILLERY", "HEAVY_ARTILLERY","AIRCRAFT_CARRIER",    "BATTLE_SHIP", "HEAVY_CRUISERS", "DESTROYER", "AIRCRAFT", "SUBMARINE", "TANKS", "GUNS"]   */
                    amount : new NumberInt(300) // required        
                }
               
            ] // required
        }
    ]
};

db.createCollection(
    "events", {
        validationLevel  : "strict",
        validationAction : "error",
        validator : {
            $jsonSchema : {
                 bsonType : "object",
                 required : [
                    "name", "date", "cat", "description", "eventType"
                 ],
                 additionalProperties : true,
                 properties : {
                     name : {
                         bsonType : "string",
                         maxLength : 100  
                     },
                     date : {
                         bsonType : "date"  
                     },
                     cat : {
                        enum : ["AC", "BC"]  
                     },
                     location : {
                         bsonType : "string",
                         maxLength : 100
                     },
                     description : {
                         bsonType : "string"                        
                     },
                     eventType : {
                         enum : [ "BATTLE", "SIEGE" ]  
                     },
                     war : {
                         bsonType : "string",
                         maxLength : 200  
                     },
                     victor : {
                         bsonType : "string",
                         maxLength : 100
                     },
                     territorialChange : {
                         bsonType : "string"
                     },  
                     belligerents : {
                         bsonType : "array",
                         items : {
                             bsonType : "object",
                             required : [ "commander", "nation", "generals", "composition", "losses" ],
                             additionalProperties : false,
                             properties : {
                                 commander : {
                                     bsonType : "string",
                                     maxLength : 50                                    
                                 },
                                 nation : {
                                     bsonType : "string",
                                     maxLength : 50  
                                 },
                                 generals : {
                                     bsonType : "array",
                                     items : {
                                         bsonType : "string",
                                         maxLength : 50  
                                     }
                                 },
                                 composition : {
                                     bsonType : "array",
                                     items : {
                                        bsonType : "object",
                                        required : ["type", "amount"],
                                        additionalProperties : false,
                                        properties : {
                                            type : {
                                                enum : [
                                                   "HEAVY_INFANTRY", "LIGHT_INFANTRY", "CAVALRY", "MERCENARIES", "ARCHER", "CHARIOTS", "HEAVY_CAVALRY", "BEASTS", "WARSHIP", "SHIP", "ARQUEBUSES", "ARTILLERY", "HEAVY_ARTILLERY",
                                                   "AIRCRAFT_CARRIER", "BATTLE_SHIP", "HEAVY_CRUISERS", "DESTROYER", "AIRCRAFT", "SUBMARINE", "TANKS", "GUNS"
                                                ]  
                                            },
                                            amount : {
                                                bsonType : "int"  
                                            }  
                                        }
                                     }  
                                 },
                                 losses : {
                                     bsonType : "array",
                                     items : {
                                         bsonType : "object",
                                         required : ["type", "amount"],
                                         additionalProperties : false,
                                         properties : {
                                             type : {
                                                 enum : [
                                                    "HEAVY_INFANTRY", "LIGHT_INFANTRY", "CAVALRY", "MERCENARIES", "ARCHER", "CHARIOTS", "HEAVY_CAVALRY", "BEASTS", "WARSHIP", "SHIP", "ARQUEBUSES", "ARTILLERY", "HEAVY_ARTILLERY",
                                                    "AIRCRAFT_CARRIER", "BATTLE_SHIP", "HEAVY_CRUISERS", "DESTROYER", "AIRCRAFT", "SUBMARINE", "TANKS", "GUNS"
                                                 ]  
                                             },
                                             amount : {
                                                 bsonType : "int"  
                                             }  
                                         }
                                     }
                                 }
                             }
                         }
                     }
                 }      
            }  
        }  
     }
);

db.getCollection("events").insertMany([
     {
         name : "Battle of Gaugamela",
         date :  new Date('Oct 1, 331'),
         cat : "BC",
         eventType : "BATTLE",
         location : "Iraq",
         war : "Alexander the Great - Conquest of the Persian Empire",
         victor   : "Alexander the Great",
         territorialChange : "Alexander gains Babylon, half of Persia and all other parts of Mesopotamia.",
         description : "The Battle of Gaugamela, was the decisive battle of Alexander the Great's invasion of the Persian Achaemenid Empire. In 331 BC Alexander's army of the Hellenic League met the Persian army of Darius III near Gaugamela, close to the modern city of Dohuk in Iraqi Kurdistan. Though heavily outnumbered, Alexander emerged victorious due to his army's superior tactics and his deft employment of light infantry. It was a decisive victory for the Hellenic League and led to the fall of the Achaemenid Empire.",
         belligerents : [
              {
                  commander : "Alexander the Great",
                  nation : "Macedonia",
                  generals : [
                     "Hephaestion", "Ptolemy", "Parmenion", "Cleitus"
                  ],
                  composition : [
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(31000) },
                     { type : "LIGHT_INFANTRY", amount : new NumberInt(9000)  },
                     { type : "HEAVY_CAVALRY" , amount : new NumberInt(7000)  }
                  ],
                  losses : [
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(300) },
                     { type : "HEAVY_CAVALRY",  amount : new NumberInt(1000) }
                  ]
              }, {
                  commander : "Darius III",
                  nation : "Achaemenid Empire",
                  generals : [
                     "Bessus", "Mazaeus", "Atropates"
                  ],
                  composition : [
                     { type : "LIGHT_INFANTRY", amount : new NumberInt(50000) },
                     { type : "CAVALRY",  amount : new NumberInt(20000) },
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(10000) },
                     { type : "MERCENARIES",    amount : new NumberInt(10000) },
                     { type : "HEAVY_CAVALRY",  amount : new NumberInt(2000) },
                     { type : "ARCHER",   amount : new NumberInt(1500) },
                     { type : "CHARIOTS", amount : new NumberInt(200) },
                     { type : "BEASTS",   amount : new NumberInt(15) }
                  ],
                  losses : [
                     { type : "LIGHT_INFANTRY", amount : new NumberInt(30000) },
                     { type : "MERCENARIES", amount : new NumberInt(10000) },
                     { type : "CHARIOTS", amount : new NumberInt(120) },
                     { type : "BEASTS", amount : new NumberInt(15) }
                  ]
              }
         ]
     },  {
         name : "Battle of the Granicus River",
         date :  new Date('May 12, 334'),
         cat : "BC",
         eventType : "BATTLE",
         location : "Turkey",
         war : "Alexander the Great - Conquest of the Persian Empire",
         victor   : "Alexander the Great",
         territorialChange : "Alexander attains half of Asia Minor",
         description : "The Battle of the Granicus River in May 334 BC was the first of three major battles fought between Alexander the Great and the Persian Empire. Fought in northwestern Asia Minor, near the site of Troy, it was here that Alexander defeated the forces of the Persian satraps of Asia Minor, including a large force of Greek mercenaries led by Memnon of Rhodes.",
         belligerents : [
              {
                  commander : "Alexander the Great",
                  nation : "Macedonia",
                  generals : [
                     "Hephaestion", "Ptolemy", "Parmenion", "Cleitus"
                  ],
                  composition : [
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(31000) },
                     { type : "LIGHT_INFANTRY", amount : new NumberInt(9000)  },
                     { type : "HEAVY_CAVALRY" , amount : new NumberInt(7000)  }
                  ],
                  losses : [
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(100) },
                     { type : "HEAVY_CAVALRY",  amount : new NumberInt(1000) }
                  ]
              }, {
                  commander : "Darius III",
                  nation : "Achaemenid Empire",
                  generals : [
                     "Bessus", "Mazaeus", "Atropates"
                  ],
                  composition : [
                     { type : "CAVALRY",     amount : new NumberInt(20000) },
                     { type : "MERCENARIES", amount : new NumberInt(30000)},                
                     { type : "ARCHER",      amount : new NumberInt(1500) }
                   
                  ],
                  losses : [
                     { type : "MERCENARIES", amount : new NumberInt(30000) },
                     { type : "CAVALRY", amount : new NumberInt(10000) }
                  ]
              }
         ]
     }, {
         name : "Battle of Issus",
         date :  new Date('Nov 5, 333'),
         cat : "BC",
         eventType : "BATTLE",
         location : "Turkey",
         war : "Alexander the Great - Conquest of the Persian Empire",
         victor   : "Alexander the Great",
         territorialChange : "Alexander controls southern Asia Minor",
         description : "The Battle of Issus occurred in southern Anatolia, on November 5, 333 BC between the Hellenic League led by Alexander the Great and the Achaemenid Empire, led by Darius III, in the second great battle of Alexander's conquest of Asia. The invading Macedonian troops defeated Persia. After the Hellenic League soundly defeated the Persian satraps of Asia Minor (led by Greek mercenary Memnon of Rhodes) at the Battle of the Granicus, Darius took personal command of his army. ",
         belligerents : [
              {
                  commander : "Alexander the Great",
                  nation : "Macedonia",
                  generals : [
                     "Hephaestion", "Ptolemy", "Parmenion", "Cleitus"
                  ],
                  composition : [
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(31000) },
                     { type : "LIGHT_INFANTRY", amount : new NumberInt(9000)  },
                     { type : "HEAVY_CAVALRY" , amount : new NumberInt(7000)  }
                  ],
                  losses : [
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(100) },
                     { type : "HEAVY_CAVALRY",  amount : new NumberInt(1000) }
                  ]
              }, {
                  commander : "Darius III",
                  nation : "Achaemenid Empire",
                  generals : [
                     "Bessus", "Mazaeus", "Atropates"
                  ],
                  composition : [
                     { type : "CAVALRY",     amount : new NumberInt(20000) },
                     { type : "MERCENARIES", amount : new NumberInt(30000)},                
                     { type : "ARCHER",      amount : new NumberInt(1500) }
                   
                  ],
                  losses : [
                     { type : "MERCENARIES", amount : new NumberInt(30000) },
                     { type : "CAVALRY", amount : new NumberInt(10000) }
                  ]
              }
         ]
     }, {
         name : "Battle of Myeongnyang",
         date :  new Date('Oct 26, 1597'),
         cat : "AC",
         eventType : "BATTLE",
         location : "Korea",
         war : "Imjin War",
         victor   : "Yi Sun-sin",
         territorialChange : "Decisive Joseon victory",
         description : "In the Battle of Myeongnyang, the Korean Joseon Kingdom's navy, led by Admiral Yi Sun-sin, fought the Japanese navy in the Myeongnyang Strait, near Jindo Island, off the southwest corner of the Korean peninsula.  With only 13 ships remaining from Admiral Won Gyun's disastrous defeat at the Battle of Chilchonryang, Admiral Yi held the strait as a last stand battle against the Japanese navy, who were sailing to support their land army's advance towards the Joseon capital of Hanyang.",
         belligerents : [
              {
                  commander : "Yi Sun-sin",
                  nation : "Joseon",
                  generals : [
                     "Yi Sun-sin", "Kim Eok-chu", "Bae Heung-rip"
                  ],
                  composition : [
                     { type : "WARSHIP", amount : new NumberInt(13) }              
                  ],
                  losses : [
                     { type : "WARSHIP", amount : new NumberInt(1) }
                  ]
              }, {
                  commander : "Todo Takatora",
                  nation : "Japan",
                  generals : [
                     "Katō Yoshiaki", "Wakizaka Yasuharu", "Kan Michinaga"
                  ],
                  composition : [
                     { type : "WARSHIP", amount : new NumberInt(130) },
                     { type : "SHIP",    amount : new NumberInt(200)}                                        
                  ],
                  losses : [
                     { type : "WARSHIP", amount : new NumberInt(30) },
                     { type : "SHIP", amount : new NumberInt(65) }
                  ]
              }
         ]
     }, {
         name : "Siege of Vienna I",
         date :  new Date('Oct 15, 1529'),
         cat : "AC",
         eventType : "SIEGE",
         location : "Austria - Holy Roman Empire",
         war : "Siege of Vienna",
         victor   : "Holy Roman Empire",
         territorialChange : "Successful Habsburg defense, Ottoman army forced to withdraw",
         description : "The Siege of Vienna, in 1529, was the first attempt by the Ottoman Empire to capture the city of Vienna, Austria. Suleiman the Magnificent, sultan of the Ottomans, attacked the city with over 100,000 men, while the defenders, led by Niklas Graf Salm, numbered no more than 21,000. Nevertheless, Vienna was able to survive the siege, which ultimately lasted just over two weeks, from 27 September to 15 October 1529. ",
         belligerents : [
              {
                  commander : "Niklas Graf Salm",
                  nation : "Holy Roman Empire",
                  generals : [
                     "Wilhelm von Roggendorf"
                  ],
                  composition : [
                     { type : "HEAVY_INFANTRY",  amount : new NumberInt(3000) },
                     { type : "LIGHT_INFANTRY",  amount : new NumberInt(10000)},
                     { type : "ARQUEBUSES",      amount : new NumberInt(10000)},
                     { type : "HEAVY_ARTILLERY", amount : new NumberInt(50)}                    
                  ],
                  losses : [
                     { type : "HEAVY_INFANTRY",  amount : new NumberInt(300)},
                     { type : "LIGHT_INFANTRY",  amount : new NumberInt(1000)},
                     { type : "ARQUEBUSES",  amount : new NumberInt(1000)}
                  ]
              }, {
                  commander : "Suleiman the Magnificent",
                  nation : "Ottoman Empire",
                  generals : [
                     "Pargalı Ibrahim Pasha"
                  ],
                  composition : [
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(20000) },
                     { type : "LIGHT_INFANTRY", amount : new NumberInt(60000)},                
                     { type : "ARQUEBUSES", amount : new NumberInt(30000) },
                     { type : "ARTILLERY",  amount : new NumberInt(100)}                  
                  ],
                  losses : [
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(2000) },
                     { type : "LIGHT_INFANTRY", amount : new NumberInt(6000) },
                     { type : "ARQUEBUSES", amount : new NumberInt(5000) }
                  ]
              }
         ]
     }, {
         name : "Siege of Vienna II",
         date :  new Date('Sept 12, 1683'),
         cat : "AC",
         eventType : "SIEGE",
         location : "Austria",
         war : "Siege of Vienna",
         victor   : "John III. Sobieski",
         territorialChange : "Successful Habsburg defense, Ottoman army destroyed",
         description : "Die Zweite Wiener Türkenbelagerung oder Zweite Wiener Osmanenbelagerung[5][6] im Jahr 1683 war – wie die Erste von 1529 – ein erfolgloser Versuch des Osmanischen Reichs, Wien einzunehmen. Sie dauerte vom 14. Juli bis zum 12. September, als ein von Polens König Johann III. Sobieski befehligtes Entsatzheer die osmanische Armee des Großwesirs Kara Mustafa Pascha in der Schlacht am Kahlenberg zum Rückzug zwang.",
         belligerents : [
              {
                  commander : "Johann III. Sobieski",
                  nation : "Poland",
                  generals : [
                     "Ernst Rüdiger von Starhemberg", "Karl V. von Lothringen"
                  ],
                  composition : [
                     { type : "HEAVY_INFANTRY",  amount : new NumberInt(10000) },
                     { type : "ARQUEBUSES",      amount : new NumberInt(20000) },
                     { type : "HEAVY_ARTILLERY", amount : new NumberInt(150) },
                     { type : "HEAVY_CAVALRY",   amount : new NumberInt(60000)}
                  ],
                  losses : [
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(7000) },
                     { type : "ARQUEBUSES",     amount : new NumberInt(7000) },
                     { type : "HEAVY_CAVALRY",  amount : new NumberInt(1000) }
                  ]
              }, {
                  commander : "Kara Mustafa Pascha",
                  nation : "Ottoman Empire",
                  generals : [],
                  composition : [
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(40000) },
                     { type : "ARQUEBUSES",     amount : new NumberInt(50000)},                
                     { type : "CAVALRY", amount : new NumberInt(8000) },
                     { type : "LIGHT_INFANTRY", amount : new NumberInt(30000) }
                   
                  ],
                  losses : [
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(20000) },
                     { type : "ARQUEBUSES",     amount : new NumberInt(30000) },
                     { type : "LIGHT_INFANTRY", amount : new NumberInt(1000) }
                  ]
              }
         ]
     }, {
         name : "Battle of Agincourt",
         date :  new Date('Oct 25, 1415'),
         cat : "AC",
         eventType : "BATTLE",
         location : "France",
         war : "Hundred Years War",
         victor   : "King Henry V",
         territorialChange : "English victory",
         description : "The Battle of Agincourt was an English victory in the Hundred Years War. It took place on 25 October 1415 in northern France. The unexpected English victory against the numerically superior French army boosted English morale and prestige, crippled France and started a new period of English dominance in the war. ",
         belligerents : [
              {
                  commander : "King Henry V",
                  nation : "Kingdom of England",
                  generals : [
                     "Sir Thomas Camoys", "Sir Thomas Erpingham"
                  ],
                  composition : [
                     { type : "ARCHER",         amount : new NumberInt(6000) },
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(2000) }
                  ],
                  losses : [
                     { type : "HEAVY_INFANTRY",  amount : new NumberInt(600) }
                  ]
              }, {
                  commander : "Charles d'Albret",
                  nation : "Kingdom of France",
                  generals : [
                     "Duke of Bourbon", "Duke of Orleans"
                  ],
                  composition : [
                     { type : "ARCHER"        , amount : new NumberInt(6000) },
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(15000)},                
                     { type : "HEAVY_CAVALRY",  amount : new NumberInt(10000)}
                   
                  ],
                  losses : [
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(10000) },
                     { type : "HEAVY_CAVALRY",  amount : new NumberInt(8000) },
                     { type : "ARCHER", amount : new NumberInt(5000) }
                  ]
              }
         ]
     }, {
         name : "Battle of Midway",
         date :  new Date('Dec 7, 1942'),
         cat : "AC",
         eventType : "BATTLE",
         location : "Midway Islands",
         war : "World War II",
         victor   : "Chester W. Nimitz",
         territorialChange : "",
         description : "The Battle of Midway was a major naval battle in the Pacific Theater of World War II that took place on 4–7 June 1942, six months after Japan’s attack on Pearl Harbor and one month after the Battle of the Coral Sea. The U.S. Navy under Admirals Chester W. Nimitz, Frank J. Fletcher, and Raymond A. Spruance defeated an attacking fleet of the Imperial Japanese Navy under Admirals Isoroku Yamamoto, Chūichi Nagumo, and Nobutake Kondō near Midway Atoll, inflicting devastating damage on the Japanese fleet that rendered their aircraft carriers irreparable.",
         belligerents : [
              {
                  commander : "Chester W. Nimitz",
                  nation : "U.S.",
                  generals : [
                     "Frank Jack Fletcher", "Raymond A. Spruance"
                  ],
                  composition : [
                     { type : "AIRCRAFT_CARRIER", amount : new NumberInt(3)},
                     { type : "HEAVY_CRUISERS", amount : new NumberInt(7)  },
                     { type : "DESTROYER",      amount : new NumberInt(15) },
                     { type : "AIRCRAFT",       amount : new NumberInt(233)},
                     { type : "SUBMARINE",      amount : new NumberInt(16) }
                  ],
                  losses : [
                     { type : "AIRCRAFT_CARRIER", amount : new NumberInt(1) },
                     { type : "AIRCRAFT",  amount : new NumberInt(150) },
                     { type : "DESTROYER", amount : new NumberInt(1) }
                  ]
              }, {
                  commander : "Isoroku Yamamoto",
                  nation : "Japan",
                  generals : [
                     "Nobutake Kondo", "Chuichi Nagumo"
                  ],
                  composition : [
                     { type : "AIRCRAFT_CARRIER", amount : new NumberInt(4)},
                     { type : "BATTLE_SHIP",      amount : new NumberInt(2)},                
                     { type : "HEAVY_CRUISERS", amount : new NumberInt(2) },
                     { type : "AIRCRAFT",       amount : new NumberInt(248) }                            
                  ],
                  losses : [
                     { type : "AIRCRAFT_CARRIER", amount : new NumberInt(4) },
                     { type : "HEAVY_CRUISERS", amount : new NumberInt(1) },
                     { type : "AIRCRAFT", amount : new NumberInt(248) }
                  ]
              }
         ]
     }, {
         name : "Battle of Kursk",
         date :  new Date('Aug 23, 1943'),
         cat : "AC",
         eventType : "BATTLE",
         location : "Russia",
         war : "World War II",
         victor   : "Georgy Zhukov",
         territorialChange : "Soviets regain territory along a 2,000 km wide front after the battle",
         description : "The Battle of Kursk was a Second World War engagement between German and Soviet forces on the Eastern Front near Kursk (450 kilometres or 280 miles south-west of Moscow) in the Soviet Union, during July and August 1943.",
         belligerents : [
              {
                  commander : "Georgy Zhukov",
                  nation : "Russia",
                  generals : [
                     "Konstantin Rokossovsky", "Nikolai Vatutin", "Ivan Konev", "Pavel Rotmistrov", "Sergei Rudenko"
                  ],
                  composition : [
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(2000000) },
                     { type : "TANKS", amount : new NumberInt(5128)  },
                     { type : "GUNS" , amount : new NumberInt(25000) },
                     { type : "AIRCRAFT",  amount : new NumberInt(3500) }
                  ],
                  losses : [
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(400000) },
                     { type : "TANKS",    amount : new NumberInt(3000) },
                     { type : "AIRCRAFT", amount : new NumberInt(2000)},
                     { type : "GUNS", amount : new NumberInt(2300)}
                  ]
              }, {
                  commander : "Erich von Manstein",
                  nation : "Germany",
                  generals : [
                     "Günther von Kluge", "Walter Model", "Robert Ritter von Greim"
                  ],
                  composition : [
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(780000) },
                     { type : "TANKS", amount : new NumberInt(3000)},                
                     { type : "GUNS",  amount : new NumberInt(10000) },
                     { type : "AIRCRAFT", amount : new NumberInt(2200) }
                   
                  ],
                  losses : [
                     { type : "HEAVY_INFANTRY", amount : new NumberInt(55000) },
                     { type : "TANKS", amount : new NumberInt(300) },
                     { type : "GUNS", amount : new NumberInt(2000) },
                     { type : "AIRCRAFT", amount : new NumberInt(200) }
                  ]
              }
         ]
     }
]);