use('test');
// -- ------------------------------------------------------------------------------------ --
// --    Collection: lw1
// -- ----------------------------------------------------------------------------------- --

db.getCollection("lw1").drop();

db.createCollection(
   "lw1", {
        validationLevel  : "strict",
        validationAction : "error",
        validator : {
            $jsonSchema : {
                bsonType : "object",
                required : [
                   "sectionType", "content", "book"
                ],
                additionalProperties : true,
                properties : {
                    sectionType : {
                        enum : [
                            "RULE_SECTION",
                            "STORY_SECTION"
                        ]
                    },
                    content : {
                        bsonType : "string"
                    },
                    ruleType : {
                        enum : [
                            "TITLE_PAGE",
                            "THE_STORY_SO_FAR",
                            "ABILITIES",
                            "ITEMS",
                            "REGIONS"
                        ]
                    },
                    book : {
                        bsonType : "object",
                        required : [
                            "name", "imageUrl", "author", "illustrator"
                        ],
                        additionalProperties : false,
                        properties : {
                            name : {
                                bsonType : "string",
                                minLength : 1,
                                maxLength : 100
                            },
                            imageUrl : {
                                bsonType : "string",
                                minLength : 1,
                                maxLength : 100
                            },
                            author : {
                                bsonType : "string",
                                minLength : 1,
                                maxLength : 50
                            },
                            illustrator : {
                                bsonType : "string",
                                minLength : 1,
                                maxLength : 50
                            }
                        }
                    },
                    region : {
                        bsonType : "object",
                        required : [
                            "name",
                            "regionType",
                            "description",
                            "imageUrl"
                        ],
                        additionalProperties: true,
                        properties : {
                            name : {
                                bsonType : "string",
                                minLength : 1,
                                maxLength : 50
                            },
                            regionType : {
                                enum : [
                                    "BRIDGE",
                                    "BUILDING",
                                    "CAVE",
                                    "CITADEL",
                                    "CITY",
                                    "CITY_OUTSKIRTS",
                                    "CLEARING",
                                    "CONTINENT",
                                    "EVIL_TEMPLE",
                                    "GRAVEYARD",
                                    "KINGDOM",
                                    "LAKE",
                                    "PLACES_OF_WORSHIP",
                                    "MARSH",
                                    "RIVER_BANK",
                                    "RIVER_VALLEY",
                                    "ROAD",
                                    "STONE_BUILDING",
                                    "TEMPLE_RUIN",
                                    "VILLAGE",
                                    "WOOD_BUILDING",
                                    "WOODS"
                                ]
                            }
                        }
                    },
                    abilities : {
                        bsonType : "array",
                        items : {
                            bsonType : "object",
                            required : [
                                "abilityType", "description", "imageUrl"
                            ],
                            additionalProperties : false,
                            properties : {
                                abilityType : {
                                    enum : [
                                        "CAMOUFLAGE",
                                        "HUNTING",
                                        "SIXTH_SENSE",
                                        "TRACKING",
                                        "HEALING",
                                        "WEAPONSKILL",
                                        "MINDSHIELD",
                                        "MINDBLAST",
                                        "ANIMAL_KINSHIP",
                                        "MIND_OVER_MATTER"
                                    ]
                                },
                                 description: {
                                    bsonType : "string"
                                },
                                imageUrl : {
                                    bsonType : "string",
                                    minLength: 1,
                                    maxLength : 100
                                }
                            }
                        }
                    },
                    items : {
                        bsonType : "array",
                        items : {
                            bsonType : "object",
                            required : [
                                "code",
                                "name",
                                "itemType",
                                "description",
                                "weight",
                                "imageUrl"
                            ],
                            additionalProperties : false,
                            properties : {
                                code : {
                                    bsonType : "string",
                                    minLength : 2,
                                    maxLength : 20
                                },
                                name : {
                                    bsonType : "string",
                                    maxLength : 50
                                },
                                itemType : {
                                    enum : [
                                        "WEAPON",
                                        "MAGICAL_ITEM",
                                        "BACK_PACK",
                                        "KEY",
                                        "HERB"
                                    ]
                                },
                                description : {
                                    bsonType : "string"
                                },
                                weight : {
                                    enum : [
                                        "SMALL",
                                        "MEDIUM",
                                        "HEAVY"
                                    ]
                                },
                                imageUrl : {
                                    bsonType : "string"
                                }
                            }
                        }
                    },
                    sectionNr : {
                        bsonType : "int",
                        minimum : 1,
                        maximum : 500
                    },
                    events : {
                        bsonType : "array",
                        items : {
                            bsonType : "object",
                            required : [
                                "eventType", "ranking"
                            ],
                            additionalProperties : true,
                            properties : {
                                eventType : {
                                    enum : [
                                        "COMBAT",
                                        "ACQUIRE_ITEM_EVENT",
                                        "CHANGE_GOLD_AMOUNT_EVENT",
                                        "CHANGE_RATION_AMOUNT_EVENT",
                                        "MISSION_FAILED_EVENTS",
                                        "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                                        "CHANGE_ENDURANCE_EVENT",
                                        "STORY_EVENT"
                                    ]
                                },
                                ranking : {
                                    bsonType : "int",
                                    minimum : 1,
                                    maximum : 50
                                },
                                creature : {
                                    bsonType : "object",
                                    required : [
                                        "name",
                                        "combatSkill",
                                        "endurance",
                                        "imageUrl"
                                    ],
                                    additionalProperties : false,
                                    properties : {
                                        name : {
                                            bsonType : "string",
                                            minLength : 1,
                                            maxLength : 50
                                        },
                                        combatSkill : {
                                            bsonType : "int",
                                            minimum : 1,
                                            maximum : 200
                                        },
                                        endurance : {
                                            bsonType : "int",
                                            minimum : 1,
                                            maximum : 500
                                        },
                                        imageUrl : {
                                            bsonType : "string",
                                            maxLength : 100
                                        }
                                    }
                                },
                                item : {
                                    bsonType : "object",
                                    required : [
                                        "name",
                                        "itemType",
                                        "description",
                                        "weight",
                                        "imageUrl"
                                    ],
                                    additionalProperties : false,
                                    properties : {
                                        name : {
                                            bsonType : "string",
                                            maxLength : 50
                                        },
                                        itemType : {
                                            enum : [
                                                "WEAPON",
                                                "MAGICAL_ITEM",
                                                "BACK_PACK",
                                                "KEY",
                                                "HERB"
                                            ]
                                        },
                                        description : {
                                            bsonType : "string"
                                        },
                                        weight : {
                                            enum : [
                                                "SMALL",
                                                "MEDIUM",
                                                "HEAVY"
                                            ]
                                        },
                                        imageUrl : {
                                            bsonType : "string"
                                        }
                                    }
                                },
                                amount : {
                                    bsonType : "int"
                                }
                            }
                        }
                    },
                    outcomes : {
                        bsonType : "array",
                        items : {
                            bsonType : "object",
                            required : [
                                "outcomeType", "content", "targetNr"
                            ],
                            additionalProperties : true,
                            properties : {
                                outcomeType : {
                                    enum : [
                                        "DEFAULT",
                                        "RANDOM",
                                        "ABILITY",
                                        "ITEM",
                                        "GOLD",
                                        "MISSION_FAILED"
                                    ]
                                },
                                content : {
                                    bsonType : "string"
                                },
                                targetNr : {
                                    bsonType : "int",
                                    minimum : -1,
                                    maximum : 500
                                },
                                amount : {
                                    bsonType : "int"
                                },
                                ability : {
                                    bsonType : "object",
                                    required : [
                                        "abilityType", "description"
                                    ],
                                    additionalProperties : false,
                                    properties : {
                                        abilityType : {
                                             enum : [
                                                "CAMOUFLAGE",
                                                "HUNTING",
                                                "SIXTH_SENSE",
                                                "TRACKING",
                                                "HEALING",
                                                "WEAPONSKILL",
                                                "MINDSHIELD",
                                                "MINDBLAST",
                                                "ANIMAL_KINSHIP",
                                                "MIND_OVER_MATTER"
                                             ]
                                        },
                                        description : {
                                            bsonType : "string"
                                        }
                                    }
                                },
                                intervall : {
                                    bsonType : "object",
                                    required : [
                                        "min",
                                        "max"
                                    ],
                                    additionalProperties : false,
                                    properties : {
                                        min : {
                                            bsonType : "int",
                                            minimum : 0,
                                            maximum : 10
                                        },
                                        max : {
                                            bsonType : "int",
                                            minimum : 0,
                                            maximum : 10
                                        }
                                    }
                                },
                                item : {
                                    bsonType : "object",
                                    required : [
                                        "code",
                                        "name",
                                        "description",
                                        "imageUrl"
                                    ],
                                    additionalProperties : true,
                                    properties : {
                                        name : {
                                            bsonType : "string",
                                            minLength : 1,
                                            maxLength : 50
                                        },
                                        description : {
                                            bsonType : "string"
                                        },
                                        imageUrl : {
                                            bsonType : "string",
                                            minLength : 1,
                                            maxLength : 100
                                        },
                                        code : {
                                            bsonType : "string"
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

db.getCollection("lw1").insertMany([
    {
     /*
       * -- --------------------------------------------------------
       * --  Rulesection: Title Page
       * -- --------------------------------------------------------
       */
       sectionType : "RULE_SECTION",
       ruleType : "TITLE_PAGE",
       book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
       },
       content : "You are Lone Wolf. In a devastating attack the Darklords have destroyed the monastery where you were learning the skills of the Kai Lords. You are the sole survivor. In Flight from the Dark, you swear revenge. But first you must reach Holmgard to warn the King of the gathering evil. Relentlessly the servants of darkness hunt you across your country and every turn of the page presents a new challenge. Choose your skills and your weapons carefully—for they can help you succeed in the most fantastic and terrifying journey of your life."
    }, {
      /*
       * -- --------------------------------------------------------
       * --  Rulesection: The story so far
       * -- --------------------------------------------------------
       */
       sectionType : "RULE_SECTION",
       ruleType : "THE_STORY_SO_FAR",
       book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
       },
       content : "<p>In the northern land of Sommerlund, it has been the custom for many centuries to send the children of the Warrior Lords to the monastery of Kai. There they are taught the skills and disciplines of their noble fathers.The Kai monks are masters of their art, and the children in their charge love and respect them in spite of the hardships of their training. For one day when they have finally learnt the secret skills of the Kai, they will return to their homes equipped in mind and body to defend themselves against the constant threat of war from the Darklords of the west.</p> <p>In olden times, during the Age of the Black Moon, the Darklords waged war on Sommerlund. The conflict was a long and bitter trial of strength that ended in victory for the Sommlending at the great battle of Maakengorge. King Ulnar and the allies of Durenor broke the Darkland armies at the pass of Moytura and forced them back into the bottomless abyss of Maakengorge. Vashna, mightiest of the Darklords, was slain upon the sword of King Ulnar, called Sommerswerd, the sword of the sun. Since that age, the Darklords have vowed vengeance upon Sommerlund and the House of Ulnar.</p> <p>Now it is in the morning of the feast of Fehmarn, when all of the Kai Lords are present at the monastery for the celebrations. Suddenly a great black cloud comes from out of the western skies. So many are the numbers of the black-winged beasts that fill the sky, that the sun is completely hidden. The Darklords, ancient enemy of the Sommlending, are attacking. War has begun. On this fateful morning, you, Silent Wolf (the name given to you by the Kai) have been sent to collect firewood in the forest as a punishment for your inattention in class. As you are preparing to return, you see to your horror a vast cloud of black leathery creatures swoop down and engulf the monastery. Dropping the wood, you race to the battle that has already begun. But in the unnatural dark, you stumble and strike your head on a low tree branch. As you lose consciousness, the last thing that you see in the poor light is the walls of the monastery crashing to the ground.</p> <p>Many hours pass before you awake. With tears in your eyes you now survey the scene of destruction. Raising your face to the clear sky, you swear vengeance on the Darklords for the massacre of the Kai warriors, and with a sudden flash of realization you know what you must do. You must set off on a perilous journey to the capital city to warn the King of the terrible threat that now faces his people. For you are now the last of the Kai—you are now the Lone Wolf.</p>"
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Rulesection: Abilities
         * -- --------------------------------------------------------
         */
        sectionType : "RULE_SECTION",
        ruleType : "ABILITIES",
        book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
        },
        abilities : [
            {
                abilityType : "CAMOUFLAGE",
                description : "This Discipline enables a Kai Lord to blend in with his surroundings. In the countryside, he can hide undetected among trees and rocks and pass close to an enemy without being seen. In a town or city, it enables him look and sound like a native of that area, and can help him to find shelter or a safe hiding place.",
                imageUrl : "images/flight/abilities/camouflage.png"
            }, {
                abilityType : "HUNTING",
                description : "This skill ensures that a Kai Lord will never starve in the wild. He will always be able to hunt for food for himself except in areas of wasteland and desert. The skill also enables a Kai Lord to be able to move stealthily when stalking his prey.",
                imageUrl : "images/flight/abilities/hunting.png"
            }, {
                abilityType : "SIXTH_SENSE",
                description : "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks.",
                imageUrl : "images/flight/abilities/sixthsense.png"
            }, {
                abilityType : "HEALING",
                description : "This Discipline can be used to restore ENDURANCE points lost in combat. If you possess this skill you may restore 1 ENDURANCE point to your total for every numbered section of the book you pass through in which you are involved in combat. (This is only to be used after your ENDURANCE has fallen below its original level.) Remember that your ENDURANCE cannot rise above its original level.",
                imageUrl : "images/flight/abilities/healing.png"
            }, {
                abilityType : "WEAPONSKILL",
                description : "Upon entering the Kai Monastery, each initiate is taught to master one type of weapon. If Weaponskill is to be one of your Kai Disciplines, pick a number in the usual way from the Random Number Table, and then find the corresponding weapon from the list below. This is the weapon in which you have skill. When you enter combat carrying this weapon, you add 2 points to your COMBAT SKILL.",
                imageUrl : "images/flight/abilities/weaponskill.png"
            }, {
                abilityType : "MINDSHIELD",
                description : "The Darklords and many of the evil creatures in their command have the ability to attack you using their Mindforce. The Kai Discipline of Mindshield prevents you from losing any ENDURANCE points when subjected to this form of attack.",
                imageUrl : "images/flight/abilities/mindshield.png"
            }, {
                abilityType : "MINDBLAST",
                description : "This enables a Kai Lord to attack an enemy using the force of his mind. It can be used at the same time as normal combat weapons and adds two extra points to your COMBAT SKILL. Not all the creatures encountered on this adventure will be harmed by Mindblast. You will be told if a creature is immune.",
                imageUrl : "images/flight/abilities/mindblast.png"
            }, {
                abilityType : "ANIMAL_KINSHIP",
                description : "This skill enables a Kai Lord to communicate with some animals and to be able to guess the intentions of others.",
                imageUrl : "images/flight/abilities/animalkinship.png"
            }, {
                abilityType : "MIND_OVER_MATTER",
                description : "Mastery of this Discipline enables a Kai Lord to move small objects with his powers of concentration.",
                imageUrl : "images/flight/abilities/mindovermatter.png"
            }
        ],
        content : "Over the centuries, the Kai monks have mastered the skills of the warrior. These skills are known as the Kai Disciplines, and they are taught to all Kai Lords. You have learnt only five of the skills listed below. The choice of which five skills these are, is for you to make. As all of the Disciplines may be of use to you at some point on your perilous quest, pick your five with care. The correct use of a Discipline at the right time can save your life."
    }, {
       /*
        * -- --------------------------------------------------------
        * --  Rulesection: Items
        * -- --------------------------------------------------------
        */
        sectionType : "RULE_SECTION",
        ruleType : "ITEMS",
        book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
        },
        items : [
            {
                code : "DAGGER",
                name : "Dagger",
                itemType : "WEAPON",
                description : "Dagger",
                weight : "SMALL",
                imageUrl : "images/flight/items/dagger.png"
            }, {
                code : "SPEAR",
                name : "Spear",
                itemType : "WEAPON",
                description : "Spear",
                weight : "MEDIUM",
                imageUrl : "images/flight/items/spear.png"
            }, {
                code : "MACE",
                name : "Mace",
                itemType : "WEAPON",
                description : "Mace",
                weight : "MEDIUM",
                imageUrl : "images/flight/items/mace.png"
            }, {
                code : "SHORT_SWORD",
                name : "Short Sword",
                itemType : "WEAPON",
                description : "Short Sord",
                weight : "MEDIUM",
                imageUrl : "images/flight/items/shortsword.png"
            }, {
                code : "WARHAMMER",
                name : "Warhammer",
                itemType : "WEAPON",
                description : "Warhammer",
                weight : "HEAVY",
                imageUrl : "images/flight/items/warhammer.png"
            }, {
                code : "SWORD",
                name : "Sword",
                itemType : "WEAPON",
                description : "Sword",
                weight : "MEDIUM",
                imageUrl : "images/flight/items/sword.png"
            }, {
                code : "AXE",
                name : "Axe",
                itemType : "WEAPON",
                description : "Axe",
                weight : "HEAVY",
                imageUrl : "images/flight/items/axe.png"
            }, {
                code : "QUARTER_STAFF",
                name : "Quarterstaff",
                itemType : "WEAPON",
                description : "Quarterstaff",
                weight : "SMALL",
                imageUrl : "images/flight/items/quarterstaff.png"
            }, {
                code : "BROADSWORD",
                name : "Broadsword",
                itemType : "WEAPON",
                description : "Broadsword",
                weight : "HEAVY",
                imageUrl : "images/flight/items/broadsword.png"
            }, {
                code : "VORDAK_GEM",
                name : "Vordak Gem",
                itemType : "WEAPON",
                description : "Vordak Gem",
                weight : "SMALL",
                imageUrl : "images/flight/items/vordakgem.png"
            }, {
                code : "BACK_PACK",
                name : "Back Pack",
                itemType : "WEAPON",
                description : "Back Pack",
                weight : "SMALL",
                imageUrl : "images/flight/items/backpack.png"
            }, {
                code : "GOLDEN_KEY",
                name : "Golden Key",
                itemType : "WEAPON",
                description : "Golden Key",
                weight : "SMALL",
                imageUrl : "images/flight/items/goldenkey.png"
            }
        ],
        content : "You are dressed in the green tunic and cloak of a Kai initiate. You have little with you to arm yourself for survival."
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Rulesection: Regions
         * -- --------------------------------------------------------
         */
         sectionType : "RULE_SECTION",
         ruleType : "REGIONS",
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         content : "... ",
         regionTree : {
                name : "Magnamund",
                regionType : "CONTINENT",
                description : "Originally Magnamund comprised one land mass. During the Age of Chaos, when Naar sought to destroy the wise dragon Nyxator, Magnamund was torn asunder, and the Tentarias strait split the land into the two continents of Northern Magnamund and Southern Magnamund. There are many notable geographic features on Magnamund. Features of other worlds and places can also be found here. The northwestern quarter of Northern Magnamund is the Darklands, a hellish wasteland ruled by the Darklords. It is in this terrible land that the Darklords create their armies and breed creatures of darkness. The northeastern quarter of Northern Magnamund is the Lastlands, giving rise to the human nations of Sommerlund and Durenor. It is against these bastions of hope that the full might of the Darklords is directed, for if Sommerlund and Durenor should fall, the rest of Magnamund would fall in their wake. The eastern third of Southern Magnamund is characterized by the Sadi desert and the Shadakine Empire. The tyrannical Shadakine Empire arose under the rulership of Shasarak the Wytch-king to conquer the free states of the south.",
                imageUrl : "images/flight/regions/magnamund.png",
                regions : [
                    {
                        name : "Sommerlund",
                        regionType : "KINGDOM",
                        description : "The country is situated on the Northern continent of Magnamund in the Northeastern corner. It is a sunlit land of verdant hills, deep forests and rich farmland. Its principal cities are Holmgard, Toran, Anskaven, Tyso, and Ruanon. It has been the Darklords bane since the time of King Kian.",
                        imageUrl : "images/flight/regions/sommerlund.png",
                        regions : [
                            {
                                name : "Kai Monastary",
                                regionType : "BUILDING",
                                description : "Kai Monastery is spiritual home and training ground of the Order of the Kai. The Tower of the Sun is the tallest tower in the Monastery. It contains the Lore Halls, the Kai Masters Hall and the Grandmasters Hall. The Kai Masters Hall is a chamber in the Tower of the Sun, positioned above the Lore Hall of the Spirit and below the Grandmasters Hall. It contains a plain, wooden throne and green pillars. The Grandmasters Hall is located in the topmost part of the Tower of the Sun. The order was founded in MS 3810 by a Baron of Sommerlund who later renamed himself Sun Eagle. He set out on a quest to find all the Lorestones of Nyxator and cultivate his inner talents, to the point where he became a Kai, with many superhuman abilities in fighting, his senses, and the ability to cure himself and others. He founded his monastery at the northwestern corner of Sommerlund near the Durcrag Mountains. During their long history, the First Order was renowned for their defense of Sommerlund, a vastly smaller country against the Darklords vaste hordes. During their time, it became almost a cyclical event of the Darklords attack and their repulsion from Sommerlund, thanks to the Kai. During Darklord Zagarnas war, the first order of the Kai was wiped out. And even after Lone Wolf successfully killed Archlord Zagarna and helped eject his armies from his country, he did not have time to attend to the creation of a new order. While Lone Wolf was sent to defeat the Deathlord of Ixia, other troubles were stirring far away in Sommerlund.",
                                imageUrl : "images/flight/regions/kaimonastary.png"
                            }, {
                                name : "Sommerlund Woodlands",
                                regionType : "WOODS",
                                description : "Deep Woods in Summerlund",
                                imageUrl : "images/flight/regions/sommerlundwoodlands.png",
                                regions : [
                                    {
                                        name : "River Valley",
                                        regionType : "RIVER_VALLEY",
                                        description : "River Valley",
                                        imageUrl : "images/flight/regions/sommerlundrivervalley.png"
                                    }, {
                                        name : "River Bridge",
                                        regionType : "BRIDGE",
                                        description : "Wooden bridge in the Summerlund Woodlands.",
                                        imageUrl : "images/flight/regions/woodenbridge.png"
                                    }, {
                                        name : "Graveyard of the Ancients",
                                        regionType : "GRAVEYARD",
                                        description : "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
                                        imageUrl : "images/flight/regions/graveyardofancients.png"
                                    }, {
                                        name : "Treehouse",
                                        regionType : "WOOD_BUILDING",
                                        description : "Looking up through the massive branches you can see a large treehouse some twhety-five feet above teh ground. There is no ladder, but the ganreld bark of teh tree offers many footholds.",
                                        imageUrl : "images/flight/regions/treehouse.png"
                                    }, {
                                        name : "Stoneclearing",
                                        regionType : "PLACES_OF_WORSHIP",
                                        description : "Your reach the top of a small wooded hill on which several large boulders form a rough circle.",
                                        imageUrl : "images/flight/regions/stoneclearing.png"
                                    }, {
                                        name : "Clearing",
                                        regionType : "CLEARING",
                                        description : "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
                                        imageUrl : "images/flight/regions/clearing.png"
                                    }, {
                                        name : "Main Road",
                                        regionType : "ROAD",
                                        description : "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
                                        imageUrl : "images/flight/regions/sommerlundmainroad.png"
                                    }, {
                                        name : "Silvermoon Lake",
                                        regionType : "LAKE",
                                        description : "The Silvermoon Lake is a ...",
                                        imageUrl : "images/flight/regions/silvermoonlake.png"
                                    }, {
                                        name : "Village",
                                        regionType : "VILLAGE",
                                        description : "A small Village in the middle of the Summerlund Woodland.",
                                        imageUrl : "images/flight/regions/sommerlundvillage.png"
                                    }, {
                                        name : "Wafford Clearing",
                                        regionType : "CLEARING",
                                        description : "You soon reach a small clearing in the woods.",
                                        imageUrl : "images/flight/regions/waffordclearing.png"
                                    }, {
                                        name : "Cave",
                                        regionType : "CAVE",
                                        description : "The floor of the cave is quite dry and dusty. As you explore deeper in the half-light, you detect the stale odour of rotting flesh.",
                                        imageUrl : "images/flight/regions/cave.png"
                                    }, {
                                        name : "Old Watch Tower",
                                        regionType : "WOOD_BUILDING",
                                        description : "The old Watchtower is ...",
                                        imageUrl : "images/flight/regions/ruinwatchtower.png"
                                    }, {
                                        name : "Dragon Bridge",
                                        regionType : "BRIDGE",
                                        description : "The Dragon Bridge connects the northern and southern part of Summerlund.",
                                        imageUrl : "images/flight/regions/dragonbridge.png"
                                    }, {
                                        name : "Ruins of Raumas",
                                        regionType : "TEMPLE_RUIN",
                                        description : "Edging nearer, you soon make out a clearing that you recognize to be the site of the ruins of Raumas.",
                                        imageUrl : "images/flight/regions/runinsofraumas.png"
                                    }, {
                                        name : "Fogwood",
                                        regionType : "VILLAGE",
                                        description : "A little path through the wood leads to Gogwood, a small cluster of huts that have beein used by a family of charcoal burnder for nearly fifty years.",
                                        imageUrl : "images/flight/regions/fogwood.png"
                                    }, {
                                        name : "Darkstone Temple",
                                        regionType : "EVIL_TEMPLE",
                                        description : "It was only by an unlucky chance you discovered teh secret temple of a sect of evil druids",
                                        imageUrl : "images/flight/regions/darkstonetemple.png"
                                    }, {
                                        name : "Yellow Marsh",
                                        regionType : "MARSH",
                                        description : "You soon realize that you are walking deeper into a wooded marsh.",
                                        imageUrl : "images/flight/regions/yellowmarch.png"
                                    }
                                ]
                        }, {
                            name : "Holmgard",
                            regionType : "CITY",
                            description : "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
                            imageUrl : "images/flight/regions/holmguard.png",
                            regions : [
                                {
                                    name : "Kings Citadel",
                                    regionType : "CITADEL",
                                    description : "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
                                    imageUrl : "images/flight/regions/holmguardcitadel.png"
                                }, {
                                    name : "Boat Crossing",
                                    regionType : "CITY_OUTSKIRTS",
                                    description : "The outer fildworks of the city can now be seen.",
                                    imageUrl : "images/flight/regions/holmguardoutskirts.png",
                                    regions : [
                                        {
                                            name : "Riverbank",
                                            regionType : "RIVER_BANK",
                                            description : "Peering over the steep undercut of the riverbank, you can see a tanble of driftwood along the waters edge.",
                                            imageUrl : "images/flight/regions/riverbank.png"
                                        }
                                    ]
                                }, {
                                    name : "Homgard Robbers Lane",
                                    regionType : "CITY",
                                    description : "The Homgard Robbers Lane is...",
                                    imageUrl : "images/flight/regions/holmguardupperlane.png"
                                }, {
                                    name : "Inner Courtyard",
                                    regionType : "STONE_BUILDING",
                                    description : "The inner courtyard is a bustle of activity. Cavalry scouts are waiting beside their nervous horses for messages from their unit commanders inside the  Great Hall. They  take orders with great speed to the defenders of the outer fieldworks.",
                                    imageUrl : "images/flight/regions/stonebuilding.png"
                                }, {
                                    name : "Holmgard - City Outscirts",
                                    regionType : "CITY_OUTSKIRTS",
                                    description : "You climb the wooded bank of the river and see the log walls of the fieldworks disappeiring into the distance. The log wall ahead of you has collapsed in several places.",
                                    imageUrl : "images/flight/regions/holmguardoutskirts.png"
                                }, {
                                    name : "Great Hall",
                                    regionType : "STONE_BUILDING",
                                    description : "The Great Hall is",
                                    imageUrl : "images/flight/regions/greathall.png"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 1
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 1,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "As you dash through the thickening trees, the shouts of the Giaks begin to fade behind you. You have nearly outdistanced them completely, when you crash headlong into a tangle of low branches.",
         outcomes :  [
            {
                outcomeType : "ABILITY",
                targetNr : 141,
                ability : {
                    abilityType : "SIXTH_SENSE",
                    description : "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure."
                },
                content : "If you wish to use your Kai Discipline of Sixth Sense, turn to"
            }, {
                outcomeType : "DEFAULT",
                targetNr : 88,
                content : "If you wish to take the right path into the wood, turn to"
            }, {
                outcomeType : "DEFAULT",
                targetNr : 275,
                content : "If you wish to follow the left track, turn to"
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 2
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 2,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "As you dash through the thickening trees, the shouts of the Giaks begin to fade behind you. You have nearly outdistanced them completely, when you crash headlong into a tangle of low branches.",
         outcomes :  [
            {
                outcomeType : "RANDOM",
                targetNr : 343,
                intervall : {
                    min : 0,
                    max : 4
                },
                content : "If you have picked a number 0–4, turn to "
            }, {
                outcomeType : "RANDOM",
                targetNr : 276,
                intervall : {
                    min : 5,
                    max : 9
                },
                content : "If you have picked a number 5-9, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 3
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 3,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Kings Citadel",
            regionType : "CITADEL",
            description : "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl : "images/flight/regions/holmguardcitadel.png"
         },
         content : "Staying close to the officer, you follow him through an arched portal and up a short flight of stairs to a long hall. Soldiers run back and forth bearing orders on ornate scrolls to officers stationed around the city wall. A haggard and scar-faced man dressed in the white and purple robes of the King’s court approaches you and bids you follow him to the citadel.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 196,
                content : "If you wish to follow this man, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 144,
                content : "If you wish to decline his offer and return to the crowded streets, turn to "
            }
         ]
    }
, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 4
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 4,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "River Valley",
            regionType : "RIVER_VALLEY",
            description : "River Valley",
            imageUrl : "images/flight/regions/sommerlundrivervalley.png"
         },
         content : "It is a small one-man canoe in very poor condition. The wood has split and warped, and the craft appears to be leaking in several places. You quickly patch up the worst of the holes with some clay and bail out the water. This seems to stop the leaking for the moment. Stowing your equipment at the bow, you set off downstream, using a piece of driftwood as a paddle. After a short while, you hear the sound of horses galloping towards you along the left bank.",
         outcomes :  [
            {
                outcomeType : "ABILITY",
                targetNr : 218,
                ability : {
                    abilityType : "SIXTH_SENSE",
                    description : "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure."
                },
                content : "If you wish to use the Kai Discipline of Sixth Sense, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 75,
                content : "If you wish to hide in the bottom of the canoe, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 175,
                content : "If you wish to try to attract their attention, turn to "
            }
         ]
    }
, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 5
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 5,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
          region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "After about an hour of walking, the track slowly bears round to the east. You reach a shallow ford where a fast-flowing brook runs on a steep rocky course towards the south. Just beyond the ford is a junction where the track meets a wider path running north to south. Realizing that the north path will take you away from the capital, you turn right at the junction and head south.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 11,
                content : "Turn to "
            }
         ]
    }
, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 6
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 6,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Main Road",
            regionType : "ROAD",
            description : "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl : "images/flight/regions/sommerlundmainroad.png"
         },
         content : "In the distance you can hear the sound of horses galloping nearer. You crouch behind a tree and wait as the riders come closer. They are the cavalry of the King’s Guard wearing the white uniforms of His Majesty’s army.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 183,
                content : "If you wish to call them, turn to"
            }, {
                outcomeType : "DEFAULT",
                targetNr : 200,
                content : "If you wish to let them pass and then continue on your way through the forest, turn to "
            }
         ]
    }
, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 7
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 7,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Holmgard",
            regionType : "CITY",
            description : "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl : "images/flight/regions/holmguard.png"
         },
         content : "For what seems an eternity, the rush of the crowd carries you along like a leaf on a fast-flowing stream. You desperately fight to stay on your feet, but you feel weak and dizzy from your ordeal, and your legs are as heavy as lead. Suddenly, you catch a glimpse of a long, narrow stone stairway that leads up to the roof of an inn. Gathering the last reserves of your strength, you dive for the stairs and climb slowly up to the top. From here you can see the magnificent view of the rooftops and spires of Holmgard, with the high stone walls of the citadel gleaming in the sun. The houses and buildings of the capital are built very close to each other, and it is possible to jump from one roof to the next. In fact many of the citizens of Holmgard used to use the Roofways (as they are known) when the heavy autumn rains made the unpaved parts of the streets too muddy for walking. But after many accidents, a royal decree forbade their use. After careful thought, you decide to use the Roofways, as they are your only chance of reaching the King. You have hopped, skipped, and jumped across several streets and you are only one street away from the citadel when you come to the end of a row of rooftops. The jump to the next row is much further than anything you have tried before, and your stomach begins to feel as if it were full of butterflies. Determined to reach the citadel, you turn and take a long run-up to the jump. With blood pounding in your ears, you sprint to the edge of the roof and leap into space, your eyes fixed on the opposite rooftop. Pick a number from the Random Number Table.",
         outcomes :  [
           {
                outcomeType : "RANDOM",
                targetNr : 108,
                intervall : {
                    min : 0,
                    max : 2
                },
                content : "If you have picked a number that is 0–2, turn to "
            }, {
                outcomeType : "RANDOM",
                targetNr : 25,
                intervall : {
                    min : 3,
                    max : 9
                },
                content : "If the number is 3–9, turn to "
            }
         ]
    }
, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 8
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 8,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "River Bridge",
            regionType : "BRIDGE",
            description : "Wooden bridge in the Summerlund Woodlands.",
            imageUrl : "images/flight/regions/woodenbridge.png"
         },
         content : "Your Kai Sixth Sense warns there is a fierce battle raging in the south. Your common sense tells you that the south is also the quickest route to the capital.",
         outcomes :  [
           {
                outcomeType : "DEFAULT",
                targetNr : 70,
                content : "Turn to 70 and choose your route. "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 9
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 9,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Graveyard of the Ancients",
            regionType : "GRAVEYARD",
            description : "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl : "images/flight/regions/graveyardofancients.png"
         },
         content : "You cannot move: you are being held rigid by some powerful force. Your eyes are drawn towards the mouth of the skeleton. From deep in the earth you hear a low humming, like the sound of millions of angry bees. A dull red glow appears in the empty eye sockets of the dead King and the humming increases until your ears are filled with the deafening roar. You are in the presence of an ancient evil, far older and stronger than the Darklords themselves.",
         outcomes :  [
            {
                outcomeType : "ITEM",
                targetNr : 236,
                item : {
                    code : "VORDAK_GEM",
                    name : "Vordak Gem",
                    description : "Vordak Gem",
                    imageUrl : "images/flight/items/vordakgem.png"
                },
                content : "If you possess a Vordak Gem, turn to "
            },  {
                outcomeType : "DEFAULT",
                targetNr : 292,
                content : "If you do not, turn to "
            }
         ]
    } , {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 10
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 10,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "You are sweating and your legs ache. In the middle distance you can see a group of cottages.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 115,
                content : "If you wish to enter a cottage and rest for a while, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 83,
                content : "If you wish to press on, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 11
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 11,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Kings Citadel",
            regionType : "CITADEL",
            description : "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl : "images/flight/regions/holmguardcitadel.png"
         },
         content : "You quickly dodge into the doorway of a stable and hide your surgeon’s cloak in the straw, for it would be better to be seen as a Kai Lord than as a charlatan. Without wasting a second, you set off towards the Great Hall on the other side of the courtyard.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 139,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 12
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 12,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Main Road",
            regionType : "ROAD",
            description : "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl : "images/flight/regions/sommerlundmainroad.png"
         },
         content : "The bodyguard looks at you with great suspicion and then slams the door shut. You can hear the sound of voices inside the caravan. Suddenly the door swings open and the face of a wealthy merchant appears. He demands 10 Gold Crowns as payment for the ride.",
         outcomes :  [
           {
                outcomeType : "GOLD",
                targetNr : 262,
                amount : -10,
                content : "If you have 10 Gold Crowns and wish to pay him, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 247,
                content : "If you do not have enough Gold Crowns or do not wish to pay him, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 13
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 13,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "The path soon ends at a large clearing. In the centre of the clearing is a tree much taller and wider than any other you have seen in the forest. Looking up through the massive branches you can see a large treehouse some twenty-five to thirty feet above the ground. There is no ladder, but the gnarled bark of the tree offers many footholds.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 307,
                content : "If you wish to climb the tree and search the treehouse, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 213,
                content : "If you would rather press on, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 14
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 14,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Stoneclearing",
            regionType : "PLACES_OF_WORSHIP",
            description : "Your reach the top of a small wooded hill on which several large boulders form a rough circle.",
            imageUrl : "images/flight/regions/stoneclearing.png"
         },
         content : "You reach the top of a small wooded hill on which several large boulders form a rough circle. Suddenly you hear a loud growl from behind a rock to your left.",
         outcomes :  [
           {
                outcomeType : "DEFAULT",
                targetNr : 43,
                content : "If you wish to draw your weapon and prepare to fight, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 106,
                content : "If you would rather take evasive action by running as fast as you can over the hill, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 15
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 15,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Clearing",
            regionType : "CLEARING",
            description : "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl : "images/flight/regions/clearing.png"
         },
         content : "You pass through a long, dark tunnel of overhanging branche that eventually opens out into a large clearing. On a stone plinth in the centre of the clearing is a Sword, sheathed in a black leather scabbard. A handwritten note has been tied to the hilt, but it is in a language which is foreign to you. You may take the Sword if you wish, and note it on your Action Chart. There are three exits from the clearing.",
         outcomes :  [
           {
                outcomeType : "DEFAULT",
                targetNr : 207,
                content : "If you decide to go east, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 201,
                content : "If you decide to go west, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 35,
                content : "If you decide to go south, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 16
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 16,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Main Road",
            regionType : "ROAD",
            description : "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl : "images/flight/regions/sommerlundmainroad.png"
         },
         content : "You manage to free a horse from the straps securing it to the caravan. It is frightened by the scent of the approaching Doomwolves, and the cries of their evil riders—the Giaks. Preparing your weapon, you spur your skittish horse towards the oncoming beasts. They are less than fifty yards away and they are lowering their lances at you as they get nearer and nearer.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 192,
                content : "You are charging head-on towards each other. Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 17
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 17,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "You raise your weapon to strike at the beast as its razor-fanged mouth snaps shut just inches from your head. Buffeted by the beating of its wings you find it difficult to stand. Deduct 1 point from your COMBAT SKILL and fight the Kraan. If you kill the creature, you quickly descend the far side of the hill to avoid the Giaks. Pick a number from the Random Number Table.",
         events : [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Kraan",
                    combatSkill : 16,
                    endurance : 24,
                    imageUrl : "images/flight/creatures/.png"
                }
            }
         ],
         outcomes :  [
            {
                outcomeType : "RANDOM",
                targetNr : 53,
                intervall : {
                    min : 0,
                    max : 0
                },
                content : "If you pick 0, turn to "
            }, {
                outcomeType : "RANDOM",
                targetNr : 274,
                intervall : {
                    min : 1,
                    max : 2
                },
                content : "If you pick 1–2, turn to "
            }, {
                outcomeType : "RANDOM",
                targetNr : 316,
                intervall : {
                    min : 3,
                    max : 9
                },
                content : "If you pick 3–9, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 18
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 18,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Silvermoon Lake",
            regionType : "LAKE",
            description : "The Silvermoon Lake is a ...",
            imageUrl : "images/flight/regions/silvermoonlake.png"
         },
         content : "You are awoken by the sound of troops in the distance. Across the lake you see the black-cloaked figures of Drakkarim and a pack of Doomwolves and their riders. A Kraan appears from above the trees and lands on the roof of the small wooden shack. It is ridden by a creature dressed in red. The Kraan takes off and begins to fly across the lake to where you are hidden.",
         outcomes :  [
            {
                outcomeType : "ABILITY",
                targetNr : 114,
                ability : {
                    abilityType : "CAMOUFLAGE",
                    description : "This Discipline enables a Kai Lord to blend in with his surroundings. In the countryside, he can hide undetected among trees and rocks and pass close to an enemy without being seen. In a town or city, it enables him to look and sound like a native of that area, and can help him to find shelter or a safe hiding place."
                },
                content : "If you wish to use the Kai Discipline of Camouflage, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 239,
                content : "If you wish to ride deeper in the forest, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 29,
                content : "If you wish to fight the creature, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 19
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 19,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "Just ahead through the tall trees you can see clumps of dark-red gallowbrush, a thorny briar with sharp crimson barbs. The common name for this forest weed is Sleeptooth, for the thorns are very sharp and can make you feel weak and sleepy if they scratch your skin.",
         outcomes :  [
            {
                outcomeType : "ABILITY",
                targetNr : 69,
                ability : {
                    abilityType : "TRACKING",
                    description : "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks."
                },
                content : "If you have the Kai Discipline of Tracking, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 272,
                content : "You can avoid the Sleeptooth by returning to the track. Turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 119,
                content : "Or you can push on through the briars, deeper into the forest, by turning to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 20
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 20,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Village",
            regionType : "VILLAGE",
            description : "A small Village in the middle of the Summerlund Woodland.",
            imageUrl : "images/flight/regions/sommerlundvillage.png"
         },
         content : "It seems that whoever lived here left in a great hurry—and they must have left quite recently. A half-eaten meal still remains on the table, and a mug of dark jala is still warm to the touch. Searching a chest and small wardrobe, you find a Backpack, food (enough for two Meals), and a Dagger. If you wish to take these items, remember to mark them on your Action Chart. You continue your mission.",
         events : [
            {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 1,
                item : {
                    name : "Dagger",
                    itemType : "WEAPON",
                    description : "A dagger is a small convinient weapon",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/dagger.png"
                }
            },  {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 2,
                item : {
                    name : "Backpack",
                    itemType : "BACK_PACK",
                    description : "A backpack",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/backpack.png"
                }
            }
         ],
         outcomes :  [
           {
                outcomeType : "DEFAULT",
                targetNr : 273,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 21
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 21,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "You have ridden about two miles into the tangle of trees when the ground becomes very marshy. Pick a number from the Random Number Table.",
         outcomes :  [
            {
                outcomeType : "RANDOM",
                targetNr : 189,
                intervall : {
                    min : 0,
                    max : 6
                },
                content : "If the number is 6 or below, you manage to steer clear of the morass and may now turn to "
            }, {
                outcomeType : "RANDOM",
                targetNr : 312,
                intervall : {
                    min : 7,
                    max : 8
                },
                content : "If the number is 7 or 8 you are stuck. The mud engulfs you up to your armpits. Your horse gives one last despairing scream as its muzzle disappears into the bubbling mud. "
            }, {
                outcomeType : "MISSION_FAILED",
                targetNr: -1,
                content : "the foul-smelling bog sucks you under and claims another victim. Your life and your mission end here."
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 22
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 22,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Main Road",
            regionType : "ROAD",
            description : "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl : "images/flight/regions/sommerlundmainroad.png"
         },
         content : "Knocking aside the leader, you sprint off along the highway. Then behind you the ominous click of a crossbow being cocked sends a shiver down your spine. Pick a number from the Random Number Table.",
         outcomes :  [
            {
                outcomeType : "RANDOM",
                targetNr : 181,
                intervall : {
                    min : 0,
                    max : 4
                },
                content : "If you have picked a number 0–4, turn to "
            }, {
                outcomeType : "RANDOM",
                targetNr : 145,
                intervall : {
                    min : 5,
                    max : 9
                },
                content : "If you have picked a number 5–9, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 23
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 23,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Graveyard of the Ancients",
            regionType : "GRAVEYARD",
            description : "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl : "images/flight/regions/graveyardofancients.png"
         },
         content : "The corridor soon widens into a large hall. At the far end, a stone staircase leads up to a huge door. Two black candles on either side of the stone steps dimly illuminate the chamber. You notice that no wax has melted, and as you get nearer you can feel that they give off no heat. Ancient engravings cover the stone surfaces of the walls. Anxious to leave this evil tomb, you examine the door for a latch. An ornate pin appears to lock the door, but there is also a keyhole in the lockplate.",
         outcomes :  [
            {
                outcomeType : "ITEM",
                targetNr: 326,
                item : {
                    code : "GOLDEN_KEY",
                    name : "Golden Key",
                    description : "The Golden Key emmits a shimmer ..",
                    imageUrl : "images/flight/items/goldenkey.png"
                },
                content : "If you have a Golden Key and wish to use it, turn to "
            }, {
                outcomeType : "ABILITY",
                targetNr : 151,
                ability : {
                    abilityType : "MIND_OVER_MATTER",
                    description : "Mastery of this Discipline enables a Kai Lord to move small objects with his powers of concentration."
                },
                content : "If you have the Kai Discipline of Mind Over Matter, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 337,
                content : "If you wish to remove the pin, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 24
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 24,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Main Road",
            regionType : "ROAD",
            description : "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl : "images/flight/regions/sommerlundmainroad.png"
         },
         content : "The merchant shouts to the driver of the caravan to jump. ‘We’re under attack!’ he cries, disappearing through a circular window.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 234,
                content : "If you decide to jump after him, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 184,
                content : "If you decide to run through the caravan and grab the reins of the horse team, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 25
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 25,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Homgard Robbers Lane",
            regionType : "CITY",
            description : "The Homgard Robbers Lane is...",
            imageUrl : "images/flight/regions/holmguardupperlane.png"
         },
         content : "You land with such a crash on the opposite roof, that the wind is knocked out of you and you lie flat on your back with your head in a spin. It takes a minute or so for you to realize that you’ve made it and are perfectly safe. When you are sure you are all right, you jump up and let out a shout for joy at your skill and daring. Quickly you find a way across the roof and climb down a long drainpipe to the street below. You see the large iron doors of the citadel open, and a wagon drawn by two large horses tries to leave. The horses are frightened by the noisy crowd and they both rear up, causing the wagon to smash a front wheel against the door. In the confusion, you see a chance to enter and quickly slip inside just as the guards slam the doors shut.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 139,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 26
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 26,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Graveyard of the Ancients",
            regionType : "GRAVEYARD",
            description : "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl : "images/flight/regions/graveyardofancients.png"
         },
         content : "Cautiously, you move along the corridor until you come to a sharp eastward turn. A strange greenish light can be seen in the distance.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 249,
                content : "If you wish to continue, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 100,
                content : "If you wish to go back and try the southern route, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 27
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 27,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "You walk along this path for over an hour, carefully watching the sky above you in case the Kraan attack again. Up ahead, a large tree has fallen across the path. As you approach you can hear voices coming from the other side of the massive trunk.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 250,
                content : "If you choose to attack, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 52,
                content : "If you choose to listen to what the voices say, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 28
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 28,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "After a few hundred yards, the path joins another one running north to south.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 130,
                content : "If you wish to go northwards, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 147,
                content : "If you wish to head south, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 29
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 29,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Silvermoon Lake",
            regionType : "LAKE",
            description : "The Silvermoon Lake is a ...",
            imageUrl : "images/flight/regions/silvermoonlake.png"
         },
         content : "You stride out to the water’s edge and prepare yourself for combat. The Kraan and its rider spot you and begin to speed across the lake barely inches above the surface. The rider lets out a scream that freezes your blood. He is a Vordak, a fierce lieutenant of the Darklords. He is upon you and you must fight him.",
         events : [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Vordak",
                    combatSkill : 18,
                    endurance : 25,
                    imageUrl : "images/flight/creatures/vordak.png"
                }
            }
         ],
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 270,
                content : "If you win the fight, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 30
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 30,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Main Road",
            regionType : "ROAD",
            description : "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl : "images/flight/regions/sommerlundmainroad.png"
         },
         content : "The people look tired and hungry. They have come many miles from their burning city. Suddenly, you hear the beat of huge wings coming from the north. ‘Kraan, Kraan! Hide yourselves!’ the cry goes up all along the road. Just in front of you, a wagon carrying small children breaks down, its right wheel jammed in a furrow. The children scream in panic.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 194,
                content : "If you wish to help the children, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 261,
                content : "If you’d rather run for the cover of the trees, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 31
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 31,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Dragon Bridge",
            regionType : "BRIDGE",
            description : "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl : "images/flight/regions/dragonbridge.png"
         },
         content : "You try to comfort the injured man as best you can, but his wounds are serious and he is soon unconscious again. Covering him with his cape, you turn and press deeper into the forest.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 264,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 32
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 32,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Main Road",
            regionType : "ROAD",
            description : "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl : "images/flight/regions/sommerlundmainroad.png"
         },
         content : "You have ridden about three miles when, in the distance, you spot the unmistakable silhouette of five large Doomwolves. Riding on their backs are Giaks. They seem to be going on ahead to where the path leads down into an open meadow. Suddenly, one of the Giaks leaves the others and begins to ride back along the path towards you.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 176,
                content : "If you wish to hide in the undergrowth and let him pass, turn to"
            }, {
                outcomeType : "DEFAULT",
                targetNr : 340,
                content : "If you wish to fight him, turn to"
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 33
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 33,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Clearing",
            regionType : "CLEARING",
            description : "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl : "images/flight/regions/clearing.png"
         },
         content : "The floor of the cave is quite dry and dusty. As you explore deeper in the half-light, you detect the stale odour of rotting flesh. Littering a crevice are the bones, fur, and teeth of several small animals. You notice a small cloth bag among these remains which you open to discover 3 Gold Crowns. Pocketing these coins, you leave what appears to be the lair of a mountain cat and carefully descend the hill.",
         events : [
            {
                eventType : "CHANGE_GOLD_AMOUNT_EVENT",
                ranking : 1,
                amount : 3
            }
         ],
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 248,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 34
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 34,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "Without warning, a terrible apparition in red robes swoops down from the sky on the back of a Kraan. Its cry freezes your blood. The beast is a Vordak, a fierce lieutenant of the Darklords. He is above you and you must fight him.",
         events : [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Vordak",
                    combatSkill : 18,
                    endurance : 25,
                    imageUrl : "images/flight/creatures/vordak.png"
                }
            }
         ],
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 328,
                content : "If you win, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 35
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 35,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "The forest is becoming denser, and the path more tangled with thorny briars. Almost completely hidden by the undergrowth, you notice another path branching off towards the east. Your current route seems to be coming to a prickly end, so you decide to follow the new path eastwards.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 207,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 36
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 36,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Old Watch Tower",
            regionType : "WOOD_BUILDING",
            description : "The old Watchtower is ...",
            imageUrl : "images/flight/regions/ruinwatchtower.png"
         },
         content : "The old watchtower ladder is rotten and several rungs break as you climb. Pick a number from the Random Number Table.",
         outcomes :  [
            {
                outcomeType : "RANDOM",
                targetNr : 140,
                intervall : {
                    min : 0,
                    max : 4
                },
                content : "If the number is 4 or lower "
            }, {
                outcomeType : "RANDOM",
                targetNr : 323,
                intervall : {
                    min : 5,
                    max : 9
                },
                content : "If the number is 5 or higher "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 37
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 37,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Kings Citadel",
            regionType : "CITADEL",
            description : "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl : "images/flight/regions/holmguardcitadel.png"
         },
         content : "You are feeling tired and hungry and you must stop to eat. After your Meal, you retrace your steps back to the citadel and begin to walk around the high, indomitable stone wall. You discover another entrance on the eastern side, guarded as before by two armoured soldiers.",
         events : [
            {
                eventType : "CHANGE_RATION_AMOUNT_EVENT",
                ranking : 1,
                amount : -1
            }
         ],
         outcomes :  [
            {
                outcomeType : "ABILITY",
                targetNr : 282,
                ability : {
                    abilityType : "CAMOUFLAGE",
                    description : "This Discipline enables a Kai Lord to blend in with his surroundings. In the countryside, he can hide undetected among trees and rocks and pass close to an enemy without being seen. In a town or city, it enables him to look and sound like a native of that area, and can help him to find shelter or a safe hiding place."
                },
                content : "If you wish to use the Kai Discipline of Camouflage, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 289,
                content : "If you wish to approach them and tell your story, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 38
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 38,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "For half an hour or more you press on through the forest, through the rich vegetation and ferns. You happen upon a small clear stream where you stop for a few minutes to wash your face and drink of the cold, fresh water. Feeling revitalized, you cross the stream and press on. You soon notice the smell of wood smoke which seems to be drifting towards you from the north.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 128,
                content : "If you wish to investigate the smell of wood smoke, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 347,
                content : "If you would rather avoid the source of this smoke, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 39
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 39,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "After a few seconds, two small furry faces nervously appear over the top of the trunk. They say they are Kakarmi and tell you that the Kraan are everywhere. To the west lie the remains of their village but little is left of it now. They are trying to find the rest of their tribe who took to the forest when the ‘Black-wings’ attacked. They point behind them—east along the path—and tell you that the trail appears to be a dead end, but that if you continue through the undergrowth for a few yards more, you will find a watchtower where the path splits into three directions. Take the east path. This leads to the King’s highway between the capital city Holmgard and the northern port of Toran. You thank the Kakarmi, and bid them farewell.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 228,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 40
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 40,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "Keeping a careful watch on the huts for any sign of the enemy, you make your way around the clearing under the cover of the trees and bracken. Rejoining the track, you hurry away from Fogwood.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 105,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 41
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 41,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Silvermoon Lake",
            regionType : "LAKE",
            description : "The Silvermoon Lake is a ...",
            imageUrl : "images/flight/regions/silvermoonlake.png"
         },
         content : "Three rangers gallop past the river bank, closely followed by the Giaks on their snarling Doomwolves. The bank is steep and you are spotted by the Giak leader who orders five of his troops to open fire at you with their bows. Their black arrows rain down on you.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 174,
                content : "If you decide to paddle downstream as fast as you can, turn to"
            }, {
                outcomeType : "DEFAULT",
                targetNr : 116,
                content : "If you decide to head for the cover of the trees on the opposite bank, turn to"
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 42
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 42,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Main Road",
            regionType : "ROAD",
            description : "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl : "images/flight/regions/sommerlundmainroad.png"
         },
         content : "You follow the track for nearly an hour when you come to a crossroads.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 86,
                content : "If you wish to continue east, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 238,
                content : "If you would rather head north, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 157,
                content : "If you decide to venture south, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 147,
                content : "Or if you prefer to go west, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 43
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 43,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "From behind the rock a huge black bear comes into view. It advances slowly towards you, its mouth open and its face lined in anger and pain. You notice that it is badly wounded and is bleeding from its neck and back. You must fight it.",
         events : [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Black Bear",
                    combatSkill : 16,
                    endurance : 10,
                    imageUrl : "images/flight/creatures/.png"
                }
            }
         ],
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 195,
                content : "If you win, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 44
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 44,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "Without warning, the old track ends abruptly at the edge of a steep slope. The ground here is very loose and unstable. You lose your footing and fall headlong over the edge. Pick a number from the Random Number Table.",
         outcomes :  [
            {
                outcomeType : "RANDOM",
                targetNr : 277,
                intervall : {
                    min : 0,
                    max : 4
                },
                content : "If you have picked a number that is 0–4, turn to "
            }, {
                outcomeType : "RANDOM",
                targetNr : 338,
                intervall : {
                    min : 5,
                    max : 9
                },
                content : "If the number is 5–9, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 45
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 45,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Boat Crossing",
            regionType : "CITY_OUTSKIRTS",
            description : "The outer fildworks of the city can now be seen.",
            imageUrl : "images/flight/regions/holmguardoutskirts.png",
         },
         content : "These men are not what they seem. The tunic of the leader is genuine but it is heavily bloodstained around the collar, as if its true owner had been murdered. Their weapons are not army issue, but expensive and lavishly decorated like the weapons made by the armourers of Durenor. The leader has a crossbow slung over his pack. An attempt to run would be suicide. You decide that you must fight them or you will surely be murdered as soon as you drop your weapon.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 178,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 46
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 46,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Silvermoon Lake",
            regionType : "LAKE",
            description : "The Silvermoon Lake is a ...",
            imageUrl : "images/flight/regions/silvermoonlake.png"
         },
         content : "You have covered about two miles when the trees ahead thin out. You can see a small wooden shack on the edge of a lake. A cloaked man approaches you and offers to row you and your horse across the lake for a fee of 2 Gold Crowns.",
         outcomes :  [
            {
                outcomeType : "ABILITY",
                targetNr : 296,
                ability : {
                    abilityType : "SIXTH_SENSE",
                    description : "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure."
                },
                content : "If you have the Kai Discipline of Sixth Sense, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 246,
                content : "If you accept the offer, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 90,
                content : "If you refuse and try to ride around the lake, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 47
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 47,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "Breathless and sweating, you claw your way towards the summit of the hill. Suddenly, a large winged shadow passes across the hillside. You look up to see a Kraan circling the peak above. Behind you the Giaks are gaining ground.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 136,
                content : "Do you stand and fight the Giaks where you are, using the high ground to your advantage? If so, turn to"
            }, {
                outcomeType : "DEFAULT",
                targetNr : 322,
                content : "Or do you grit your teeth and press on towards the peak of the hill? Turn to"
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 48
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 48,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "Your Sixth Sense warns you that these troops are not all they seem. You can detect an aura of evil about them. They are in the service of the Darklords.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 243,
                content : "You must leave here quickly before you are spotted. Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 49
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 49,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Holmgard",
            regionType : "CITY",
            description : "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl : "images/flight/regions/holmguard.png"
         },
         content : "As you begin to read the inscription, you notice a shadow moving towards you from behind the screen. Pick a number from the Random Number Table.",
         outcomes :  [
           {
                outcomeType : "RANDOM",
                targetNr : 339,
                intervall : {
                    min : 0,
                    max : 4
                },
                content : "If you have chosen a number that is 0–4, turn to "
            }, {
                outcomeType : "RANDOM",
                targetNr : 60,
                intervall : {
                    min : 5,
                    max : 9
                },
                content : "If the number is 5–9, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 50
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 50,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Dragon Bridge",
            regionType : "BRIDGE",
            description : "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl : "images/flight/regions/dragonbridge.png"
         },
         content : "The sound of fighting can be heard in the distance.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 97,
                content : "If you wish to continue towards the sound of battle, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 243,
                content : "If you wish to avoid the fighting, change direction and turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 51
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 51,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Boat Crossing",
            regionType : "CITY_OUTSKIRTS",
            description : "The outer fildworks of the city can now be seen.",
            imageUrl : "images/flight/regions/holmguardoutskirts.png"
         },
         content : "You climb the wooded bank of the river and see the log walls of the fieldworks disappearing into the distance. A battle rages about two miles away and the log wall has collapsed in several places where the Darklords are attacking. Most of the fieldworks ahead are unmanned, the soldiers having left to supply reinforcements for the raging battle.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 288,
                content : "There is a gate in the log wall. If you wish to approach it, turn to"
            }, {
                outcomeType : "DEFAULT",
                targetNr : 221,
                content : "If you would prefer to climb over the wall instead, turn to"
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 52
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 52,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "Now that you are closer, you can make out that the voices are not human. The sound is more like a kind of grunting and squeaking.",
         outcomes :  [
            {
                outcomeType : "ABILITY",
                targetNr : 225,
                ability : {
                    abilityType : "ANIMAL_KINSHIP",
                    description : "This skill enables a Kai Lord to communicate with some animals and to be able to guess the intentions of others."
                },
                content : "If you have the Kai Discipline of Animal Kinship, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 250,
                content : "If not, you must climb over the tree and face whatever lurks on the other side. Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 53
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 53,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "A searing pain tears through your right leg as it is twisted and crushed by the weight of your body. Down and down you tumble, until you finally land in a ditch at the base of the hill with such force that the wind is knocked out of you and you lose consciousness. You are awoken by the sharp pain of something stabbing your chest. It proves to be the tip of a Giak spear. You are greeted by the malicious sneer of its owner as he pins your left arm to the ground. Instinctively you reach for your weapon but it is no longer there. Defenceless against the cruel Giaks, the last thing that you see before all light fades is the jagged point of a Giak lance hurtling down towards your throat. Your mission ends here.",
         events : [
            {
                eventType : "MISSION_FAILED_EVENTS",
                ranking : 1
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 54
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 54,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Main Road",
            regionType : "ROAD",
            description : "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl : "images/flight/regions/sommerlundmainroad.png"
         },
         content : "It would seem that the heavens have not heard your prayers. A spear whistles past your head and embeds itself in the neck of your galloping horse. With a shriek of pain, the horse topples forward and you both roll in a tangled heap on the highway. Dazed and pinned down by the weight of the dead body of your horse, the last thing you remember is the sharp penetrating spearheads of the Giak lances. You have failed in your mission.",
         events : [
            {
                eventType : "MISSION_FAILED_EVENTS",
                ranking : 1
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 55
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 55,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Ruins of Raumas",
            regionType : "TEMPLE_RUIN",
            description : "Edging nearer, you soon make out a clearing that you recognize to be the site of the ruins of Raumas.",
            imageUrl : "images/flight/regions/runinsofraumas.png"
         },
         content : "Just as the Giak makes his leap, you race forward and strike out with your weapon—knocking the creature away from the young wizard’s back. You jump onto the struggling Giak and strike again. Due to the surprise of your attack, add 4 points to your COMBAT SKILL for the duration of this fight but remember to deduct it again as soon as the fight is over.",
         events : [
            {
                eventType : "COMBAT",
                ranking : 2,
                creature : {
                    name : "Giak",
                    combatSkill : 9,
                    endurance : 9,
                    imageUrl : "images/flight/creatures/giak.png"
                }
            }, {
                eventType : "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking : 1,
                amount : 4
            }
         ],
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 325,
                content : "If you win, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 56
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 56,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "You hear the scream of a large winged beast above the trees. It is a Kraan, a deadly servant of the Darklords. Quickly you hide beneath the thick fronds of fern until the horrible shrieks have passed away.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 222,
                content : "Now turn to "
            }
         ]
    },  {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 57
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 57,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "The cabin has only one room. In it you see a wooden table and two benches, a large bed made of straw bales lashed together, several bottles of coloured liquids, and an embroidered rug in the centre of the floor.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 164,
                content : "If you choose to take a closer look at the bottles, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 109,
                content : "If you choose to pull back the rug, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 308,
                content : "If you choose to leave the room and investigate the stable, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 58
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 58,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Boat Crossing",
            regionType : "CITY_OUTSKIRTS",
            description : "The outer fildworks of the city can now be seen.",
            imageUrl : "images/flight/regions/holmguardoutskirts.png"
         },
         content : "Bracing yourself for the run, you head off down the ridge at a steady pace. To the west, the army of the Darklords looks like a giant pot of black ink that has been spilled between the mountains and is spreading into the land below. You have been running for twenty minutes when you catch sight of a pack of Doomwolves lining a shallow ridge to your right.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 251,
                content : "If you decide to flatten yourself against the rocks along the side of the road and wait until they pass, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 160,
                content : "If you decide to carry on running, but draw your weapon just in case they attack, turn to "
            }
         ]
    },  {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 59
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 59,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Clearing",
            regionType : "CLEARING",
            description : "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl : "images/flight/regions/clearing.png"
         },
         content : "Peering into the darkness, you notice that rough stairs have been cut into the earth and that the mouth of the cave is in fact the entrance to a tunnel. Carefully descending the slippery stairway, you notice a small silver box on a shelf at the bottom of the staircase.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 124,
                content : "If you want to open the silver box, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 106,
                content : "If you wish to return to the surface and press on, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 211,
                content : "If you wish to investigate the tunnel further, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 60
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 60,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Holmgard",
            regionType : "CITY",
            description : "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl : "images/flight/regions/holmguard.png"
         },
         content : "The last thing you remember before darkness engulfs you is the flash of a long curved steel knife. You have become yet another victim of the Sage and his robber son—the very one who has just slit your throat! Your quest ends here.",
         events : [
            {
                eventType : "MISSION_FAILED_EVENTS",
                ranking : 1
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 61
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 61,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Boat Crossing",
            regionType : "CITY_OUTSKIRTS",
            description : "The outer fildworks of the city can now be seen.",
            imageUrl : "images/flight/regions/holmguardoutskirts.png"
         },
         content : "At last you can reach the wooden fieldworks surrounding the outer city. As you race towards a sentry post, you can hear the excited shouts of the guards cheering you on. Thank the gods that they recognize you, for you must appear a ragged and suspicious figure. Your cloak is torn and hangs in tatters, your face is scratched and blood-smeared, and the dust of the Graveyard covers you from head to toe. Splashing through a shallow stream, you stagger towards the gate. The full horror of the Graveyard encounter begins to catch up with you. The last thing you recall before exhaustion robs you of consciousness, is falling into the outstretched arms of two soldiers who have run from the fieldworks to help you.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 268,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 62
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 62,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Boat Crossing",
            regionType : "CITY_OUTSKIRTS",
            description : "The outer fildworks of the city can now be seen.",
            imageUrl : "images/flight/regions/holmguardoutskirts.png"
         },
         content : "The ‘soldiers’ lie dead at your feet. They were bandits who were stealing from the refugees of Toran, and from the abandoned houses and farms in the area. Searching their bodies you find 28 Gold Crowns and two Backpacks containing enough food for 3 Meals. They had been armed with a crossbow and three Swords. The crossbow has been damaged in the fight, but the Swords are untouched and you may keep one if you wish. You adjust your equipment, give a cautious glance towards the west, and continue your run towards the outer defences of the capital.",
         events : [
            {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 1,
                item : {
                    name : "Crossbow",
                    itemType : "WEAPON",
                    description : "Crossbow",
                    weight : "MEDIUM",
                    imageUrl : "images/flight/items/.png"
                }
            }, {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 2,
                item : {
                    name : "Sword",
                    itemType : "WEAPON",
                    description : "Sword",
                    weight : "MEDIUM",
                    imageUrl : "images/flight/items/.png"
                }
            }, {
                eventType : "CHANGE_GOLD_AMOUNT_EVENT",
                ranking : 3,
                amount : 28
            }, {
                eventType : "CHANGE_RATION_AMOUNT_EVENT",
                ranking : 4,
                amount : 3
            }
         ],
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 288,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 63
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 63,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Holmgard",
            regionType : "CITY",
            description : "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl : "images/flight/regions/holmguard.png"
         },
         content : "The wild old man is screaming at you. He blames you for the war and curses the Kai Lords as agents of the Darklords. He will not listen to reason and you must fight him.",
         events : [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Madman",
                    combatSkill : 11,
                    endurance : 10,
                    imageUrl : "images/flight/creatures/madman.png"
                }
            }
         ],
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 269,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 64
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 64,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Main Road",
            regionType : "ROAD",
            description : "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl : "images/flight/regions/sommerlundmainroad.png"
         },
         content : "You are awoken by the cries of a Kraan circling above the caravan. It is early morning and the sky is clear and bright. You can see a pack of Doomwolves less than a quarter of a mile away along the highway ahead. They are preparing to attack. You must act quickly.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 188,
                content : "If you decide to gather your equipment and run for the cover of the trees, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 16,
                content : "If you decide to cut free one of the horses and try to break through the attacking Doomwolves to the clear road beyond, then turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 65
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 65,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Graveyard of the Ancients",
            regionType : "GRAVEYARD",
            description : "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl : "images/flight/regions/graveyardofancients.png"
         },
         content : "Your senses scream at you that this place is very evil. Leave as quickly as you can.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 104,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 66
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 66,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Great Hall",
            regionType : "STONE_BUILDING",
            description : "The Great Hall is",
            imageUrl : "images/flight/regions/greathall.png"
         },
         content : "Startled, you turn around to see a burly sergeant and two soldiers running towards you, their swords drawn as if to strike. You prepare to defend yourself for it looks as if they are about to attack first and ask questions later; but suddenly the sergeant calls his men to a halt. He has recognized your cloak. They put away their weapons and apologize many times for their mistake. The sergeant orders one of the men to fetch the captain of the Guard as he leads you to the doors of the Great Hall. You are greeted by a tall and handsome warrior who listens intently to your story. When you have finished the account of your perilous journey to the capital, you notice a tear in the brave man’s eye as he bids you to follow him. You walk through the splendid halls and corridors of the inner Palace. The richness and grandeur are a wonder to behold. You eventually arrive at a large carved door, guarded by two soldiers wearing silver armour. You are about to meet the King.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 350,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 67
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 67,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "Your Kai Discipline of Tracking reveals to you fresh paw prints leading off along the south path. They are the prints of a black bear, an animal renowned for its ferocity. You decide the east path would be a much safer route.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 252,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 68
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 68,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "After a short walk, you reach a junction where a path crosses your present route heading from west to east.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 130,
                content : "If you wish to turn west, go to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 15,
                content : "If you wish to head east, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 69
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 69,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "You are very near a friendly village. ",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 272,
                content : "Avoid the gallowbrush and turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 70
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 70,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "River Bridge",
            regionType : "BRIDGE",
            description : "Wooden bridge in the Summerlund Woodlands.",
            imageUrl : "images/flight/regions/woodenbridge.png"
         },
         content : "You have reached a small bridge. A track follows the stream towards the east. A much narrower path disappears into thick forest towards the south.",
         outcomes :  [
            {
                outcomeType : "ABILITY",
                targetNr : 8,
                ability : {
                    abilityType : "SIXTH_SENSE",
                    description : "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure."
                },
                content : "If you wish to use the Kai Discipline of Sixth Sense, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 28,
                content : "If you wish to go east, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 157,
                content : "If you wish to go south, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 71
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 71,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Graveyard of the Ancients",
            regionType : "GRAVEYARD",
            description : "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl : "images/flight/regions/graveyardofancients.png"
         },
         content : "You are winded but not hurt. You have fallen fifteen feet or so through the roof of an underground tomb. The walls are sheer and you cannot climb them. An arched tunnel leads out of the tomb towards the east, in front of which lies the sarcophagus of some ancient noble.",
         outcomes :  [
            {
                outcomeType : "ABILITY",
                targetNr : 65,
                ability : {
                    abilityType : "SIXTH_SENSE",
                    description : "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure."
                },
                content : "If you wish to use the Kai Discipline of Sixth Sense, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 242,
                content : "If you wish to open the sarcophagus to see if it contains any treasure, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 104,
                content : "If you wish to leave via the tunnel, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 72
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 72,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "You turn to face a sneering Giak and the razor-fanged jaws of its mount. You must fight them as one enemy.",
         events : [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Giak on Doomwolf",
                    combatSkill : 15,
                    endurance : 24,
                    imageUrl : "images/flight/creatures/.png"
                }
            }
         ],
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 265,
                content : "If you win, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 73
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 73,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "Pulling your green cloak about you, you blend into the foliage and rocks. Peering carefully up at the track, you are shocked to see that they are not the King’s men at all. They are Drakkarim, some of the Darklords’ cruellest troops. They must have disguised themselves as soldiers of the King in order to get this far into the forest. Thanking your Kai training for saving your life, you silently slip away from the stream and push on into the forest.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 243,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 74
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 74,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "The Kraan and its riders land on the track barely ten feet from where you are hidden. The Giaks leap from the scaly backs of the Kraan and move towards you, their spears raised to strike. You have been seen.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 141,
                content : "If you decide to fight them, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 281,
                content : "If you decide to run deeper into the forest without delay, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 75
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 75,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "Peering out carefully, you can see three green-clad men on horses racing along the bank. You recognize them as Border Rangers, the regiment of the King’s Army that police the western borders. One of them is wounded and is slumped over the neck of his horse. Close behind follow a pack of twenty Doomwolves. Their Giak riders are firing arrows at the rangers which fall all around them. One ranger drops from his horse and rolls down the river bank, a black arrow deeply embedded in his right leg.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 260,
                content : "If you wish to help the ranger, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 163,
                content : "If you wish to stay hidden and drift downstream, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 76
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 76,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Boat Crossing",
            regionType : "CITY_OUTSKIRTS",
            description : "The outer fildworks of the city can now be seen.",
            imageUrl : "images/flight/regions/holmguardoutskirts.png"
         },
         content : "The Gem feels very hot and burns your hand. Lose 2 ENDURANCE points. You quickly grab it with the edge of your cloak and slip this Vordak Gem into your Backpack. A Gem that size must be worth hundreds of Crowns. You smile at your good fortune, mount your horse, and ride off along the south track.",
         events : [
              {
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : -2
             }, {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 2,
                item : {
                    name : "Glowing Gem",
                    itemType : "MAGICAL_ITEM",
                    description : "Glowing Gem",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/glowinggem.png"
                }
            }
         ],
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 118,
                content : "Turn to"
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 77
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 77,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "The Mountain Giaks are unaccustomed to pursuing their prey through forests and you soon outdistance them, until finally the sound of their grunts and curses disappears completely. When you are satisfied that they have given up the chase, you stop for a few minutes to catch your breath and check your equipment. With the memory of your ruined monastery still blazing in your mind, you gather up your meagre belongings and push on.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 19,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 78
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 78,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Main Road",
            regionType : "ROAD",
            description : "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl : "images/flight/regions/sommerlundmainroad.png"
         },
         content : "As the caravan careers past, you leap for the tailboard and manage to hold fast. Pulling yourself upright, you find that you are standing on the bottom rung of a ladder leadingto the rear door of the wagon. Suddenly the top half of the door flies open and you are confronted by the angry face of a bodyguard.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 132,
                content : "If you decide to inform him that you are a Kai Lord with an urgent message for the King, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 12,
                content : "If you decide to offer him Gold Crowns for safe passage to the capital, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 220,
                content : "If you decide to attack the guard with your weapon, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 79
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 79,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "You come to a small footbridge across a fast-flowing stream. On the other side of the bridge the path turns south. You cross the bridge and follow the path.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 204,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 80
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 80,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Holmgard",
            regionType : "CITY",
            description : "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl : "images/flight/regions/holmguard.png"
         },
         content : "You stumble backwards through the front door, clutching your burnt chest with both hands. Smoke is billowing from the shop and you must run—before the Sage or his robber son catch you. You make it back to the main street and lose yourself in the rush of the crowds.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 7,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 81
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 81,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Main Road",
            regionType : "ROAD",
            description : "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl : "images/flight/regions/sommerlundmainroad.png"
         },
         content : "After nearly an hour, the Kraan and their cruel riders vanish towards the west. As the shocked refugees start to emerge from the woods, you can hear the sound of horses in the distance galloping nearer. You stay hidden and wait as the riders come closer. They are the cavalry of the King’s Guard wearing the white uniforms of His Majesty’s army.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 183,
                content : "If you wish to call to them, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 200,
                content : "If you would rather continue along the forest edge towards the south, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 82
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 82,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Dragon Bridge",
            regionType : "BRIDGE",
            description : "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl : "images/flight/regions/dragonbridge.png"
         },
         content : "The giant Gourgaz lies dead at your feet. His evil followers hiss at you and then fall back from the bridge. The Prince’s soldiers form a protective wall around you and their dying leader with their shields. Black arrows whistle past your head.The dying Prince looks up into your eyes and says, ‘Kai Lord, you must take a message to my father. The enemy is too strong, we cannot hold him. The King must seek that which is in Durenor or all is lost. Take my horse and ride for the capital. May the luck of the gods ride with you.’You bid a sad farewell to the Prince, mount his white steed, and head south along the forest path. The battle still rages behind you as the Prince’s men fight off another assault on the bridge.",
         events : [
            {
                eventType : "STORY_EVENT",
                ranking : 1,
                code : "THE_DYING_PRINCE"
            }
         ],
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 235,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 83
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 83,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Boat Crossing",
            regionType : "CITY_OUTSKIRTS",
            description : "The outer fildworks of the city can now be seen.",
            imageUrl : "images/flight/regions/holmguardoutskirts.png"
         },
         content : "You have run about a mile when three soldiers appear from beneath a small footbridge. They demand that you halt and drop your weapons and equipment. They are bloodstained and unshaven. Their leader is wearing the tunic of a soldier of the Toran garrison.",
         outcomes :  [
            {
                outcomeType : "ABILITY",
                targetNr : 45,
                ability : {
                    abilityType : "SIXTH_SENSE",
                    description : "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure."
                },
                content : "If you possess the Kai Discipline of Sixth Sense, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 205,
                content : "If you wish to do as they say, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 180,
                content : "If you wish to prepare to fight them, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 232,
                content : "If you demand to know what they want, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 84
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 84,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Main Road",
            regionType : "ROAD",
            description : "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl : "images/flight/regions/sommerlundmainroad.png"
         },
         content : "Just as you feel the air beating on your back, you slip free of your horse and roll over—landing with a splash in a muddy ditch by the side of the highway. You are uninjured, and you quickly scramble to your feet and make a dash for the cover of the trees—but with thirty yards left to run, you see the Kraan circling above for another dive.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 188,
                content : "Turn to"
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 85
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 85,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "he path is wide and leads straight into thick undergrowth. The trees are tall here and unusually quiet. You walk for over a mile when suddenly you hear the beating of large wings directly above you. Looking up, you are shocked to see the sinister black outline of a Kraan diving to attack you.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 229,
                content : "If you draw your weapon and prepare to fight, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 99,
                content : "If you evade the attack by running south, deeper into the forest, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 86
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 86,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Main Road",
            regionType : "ROAD",
            description : "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl : "images/flight/regions/sommerlundmainroad.png"
         },
         content : "You soon reach another crossroads",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 6,
                content : "If you wish to journey east, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 35,
                content : "If you wish to head north, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 167,
                content : "If you prefer to go south, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 42,
                content : "Or if you wish to turn west, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 87
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 87,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Graveyard of the Ancients",
            regionType : "GRAVEYARD",
            description : "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl : "images/flight/regions/graveyardofancients.png"
         },
         content : "Focusing your powers on the lock, you try to visualize the inner mechanism. Gradually its image appears in your mind’s eye. It is old and corroded but it still functions. You are in danger of losing your concentration when a subtle click confirms that your effort has not been in vain. The pin is an easier task. Slowly it rises out of the lock and falls to the floor. The granite door swings towards you on hidden hinges and the grey half-light of the Graveyard floods into the tomb. The exit is overgrown with graveweed and you suffer many small cuts to your face and hands as you fight your way through to the surface. You are startled by a sudden noise. You turn to see the disembodied head of a corpse laughing at you. In blind panic, you race through the eerie necropolis towards the southern gate.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 61,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 88
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 88,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Dragon Bridge",
            regionType : "BRIDGE",
            description : "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl : "images/flight/regions/dragonbridge.png"
         },
         content : "You cautiously peer around the rock to see a soldier lying on his back. By his side is a Spear and shield. On the shield is the painting of a white pegasus—the Prince of Sommerlund’s emblem. He is one of the Prince’s soldiers, and he is only just conscious. His uniform is badly torn, and you can see that he has a deep wound in his left arm. As you move nearer, his eyes flicker open. Heal me, my lord, he begs. I can barely feel my arm.",
         outcomes :  [
            {
                outcomeType : "ABILITY",
                targetNr : 216,
                ability : {
                    abilityType : "HEALING",
                    description : "This Discipline can be used to restore ENDURANCE points lost in combat. If you possess this skill you may restore 1 ENDURANCE point to your total for every numbered section of the book you pass through in which you are involved in combat. (This is only to be used after your ENDURANCE has fallen below its original level.) Remember that your ENDURANCE cannot rise above its original level."
                },
                content : "If you possess and wish to use the Kai Discipline of Healing on this man, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 31,
                content : "If you do not possess the skill, or if you do not want to use it, then turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 89
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 89,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "In a cloud of dust and loose rocks you career down the steep hillside. The Kraan is still circling above as if waiting to direct the Giaks after you. Pick a number from the Random Number Table. ",
         outcomes :  [
            {
                outcomeType : "RANDOM",
                targetNr : 53,
                intervall : {
                    min : 0,
                    max : 1
                },
                content : "If you have picked 0–1, turn to "
            }, {
                outcomeType : "RANDOM",
                targetNr : 274,
                intervall : {
                    min : 2,
                    max : 4
                },
                content : "If it is 2–4, turn to "
            }, {
                outcomeType : "RANDOM",
                targetNr : 316,
                intervall : {
                    min : 5,
                    max : 9
                },
                content : "If it is 5–9, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 90
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 90,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Silvermoon Lake",
            regionType : "LAKE",
            description : "The Silvermoon Lake is a ...",
            imageUrl : "images/flight/regions/silvermoonlake.png"
         },
         content : "Night falls and you are soon engulfed in total darkness. To press on would be useless, for you would be sure to lose your way. Tethering your horse to a tree, you pull your green Kai cloak about you and fall into a restless sleep.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 18,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 91
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 91,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Holmgard",
            regionType : "CITY",
            description : "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl : "images/flight/regions/holmguard.png"
         },
         content : "The small shop is dark and musty. Books and bottles of every size and colour fill the many shelves. As you close the door, a small black dog begins to yap at you. A bald man appears from behind a large screen and bids you welcome. He politely enquires as to the nature of your visit and offers you a choice of his wares from the glass counter.",
         outcomes :  [
            {
                outcomeType : "ABILITY",
                targetNr : 198,
                ability : {
                    abilityType : "SIXTH_SENSE",
                    description : "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure."
                },
                content : "If you have the Kai Discipline of Sixth Sense, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 152,
                content : "If you wish to look at his wares, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 7,
                content : "If you would rather decline his offer and return to the street, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 92
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 92,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "You dive for cover not a moment too soon, for a hail of black arrows scream out of the woods and bombard the area where you were standing seconds before. Pulling your cloak around you to blend into the dense bracken, you dash through the forest and away from the hidden ambushers as fast as possible. This entire area is infested by Giaks and you must escape as quickly as you can. You run without rest for over an hour until you happen to fall upon a straight forest path heading towards the east. You follow the path, taking care to keep watch for signs of the enemy.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 13,
                content : "Turn to"
            }
         ]
    },  {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 93
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 93,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "You turn and run for the stairs just as a large block falls with a crash behind you. The room you were in has been completely sealed off. As you escape into the daylight, you glimpse behind you the crooked figure of an old druid as he raises his staff. A second later, a bolt of lightning explodes at your feet. You do not stop but run headlong down the hill, cursing the delay but thankful for your Sixth Sense.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 106,
                content : "Turn to"
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 94
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 94,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         content : "The Sage, seeing that you have killed his son, turns and runs from the shop by a back door. You find 12 Gold Crowns in the robber’s purse and another 4 Gold Crowns in a wooden box under the counter. Carefully examining the potions and the wand you soon realize that they are all cheap counterfeits. In fact the entire shop is full of imitations. You shake your head and return to the main street.",
         events : [
            {
                eventType : "CHANGE_GOLD_AMOUNT_EVENT",
                ranking : 1,
                amount : 16
            }
         ],
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 7,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 95
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 95,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "You soon stumble upon a narrow forest track running from north to south.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 240,
                content : "If you wish to set off along the track towards the north, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 5,
                content : "If you wish to go south instead, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 96
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 96,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         content : "Holding your breath, you tighten your grip on your weapon and prepare to strike. The tension is unbearable—the Giaks are so close that the foul stench of their unwashed bodies fills your nostrils. You hear them curse in their strange alien tongue and then leave the ledge and start to scramble towards the peak. When you are sure they have gone, you finally exhale and wipe the sweat from your eyes.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 33,
                content : "If you wish to explore the cave further, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 248,
                content : "If you wish to leave the cave and descend the hill in case the Giaks return, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 97
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 97,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Dragon Bridge",
            regionType : "BRIDGE",
            description : "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl : "images/flight/regions/dragonbridge.png"
         },
         content : "Ahead of you, you can see a fierce battle raging across a stone bridge. The clash of steel and the cries of men and beasts echo through the forest. In the midst of the fighting, you see Prince Pelathar, the King’s son. He is in combat with a large grey Gourgaz who is wielding a black axe above his scaly head. Suddenly, the Prince falls wounded—a black arrow in his side.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 255,
                content : "If you wish to defend the fallen Prince, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 306,
                content : "If you wish to run into the forest, turn to "
            }
         ]
    },  {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 98
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 98,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Inner Courtyard",
            regionType : "STONE_BUILDING",
            description : "The inner courtyard is a bustle of activity. Cavalry scouts are waiting beside their nervous horses for messages from their unit commanders inside the  Great Hall. They  take orders with great speed to the defenders of the outer fieldworks.",
            imageUrl : "images/flight/regions/stonebuilding.png"
         },
         content : "The guards seem to believe your story and bow with respect to your rank of Kai Lord. One of them pulls a concealed bell-rope and the huge doors start to swing open. They usher you inside and you hear the doors close behind you.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 139,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 99
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 99,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "You dive into the undergrowth just as the beast screams past your head. You quickly look back to see the Kraan turning in the air in preparation for another dive. You scramble to your feet and run deeper into the safety of the forest.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 222,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 100
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 100,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Graveyard of the Ancients",
            regionType : "GRAVEYARD",
            description : "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl : "images/flight/regions/graveyardofancients.png"
         },
         content : "The cold corridor suddenly makes an abrupt turning towards the east. You notice a greenish glow that lights the tunnel in the far distance. As you creep nearer you can see that the corridor opens out into a larger chamber. The strange light seems to emanate from a large bowl resting upon the top of a granite throne. On a plinth in front of the throne stands a statue. It looks like a winged serpent curved in the shape of an ‘S’.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 161,
                content : "If you wish to sit on the throne, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 133,
                content : "If you wish to examine the statue, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 257,
                content : "If you wish to look for an exit from this chamber, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 101
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 101,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "The noise of battle soon fades behind you but the ensuing silence is broken by a voice in your head that accuses you of being a coward, and deserting a fellow human in danger. You try to rid yourself of your nagging conscience by telling yourself that your mission is far more important, and that not only is the life of the young magician in peril but the lives of all your countrymen depend on you reaching the capital alive. Suddenly, the sight of a Giak war party in the distance makes you quickly take cover and hide. But it is too late—they have spotted you and you must run as fast as you can.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 281,
                content : "Turn to"
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 102
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 102,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Graveyard of the Ancients",
            regionType : "GRAVEYARD",
            description : "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl : "images/flight/regions/graveyardofancients.png"
         },
         content : "As you descend the rocky slope towards the Graveyard of the Ancients, you are aware of a strange mist and cloud that swirls all around this grey and forbidding place, blocking the sun and covering the Graveyard in a perpetual gloom. A chill creeps forward to greet your approach. With a feeling of deep dread, you enter the eerie necropolis.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 284,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 103
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 103,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "The overgrown path leads to a junction where another track branches off towards the east.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 13,
                content : "If you wish to take this path, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 287,
                content : "If you would rather continue towards the northeast, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 104
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 104,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Graveyard of the Ancients",
            regionType : "GRAVEYARD",
            description : "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl : "images/flight/regions/graveyardofancients.png"
         },
         content : "The walls are dank and slimy. The stale air chokes you and cobwebs brush across your face. You can feel panic grip your stomach, as the tunnel gets darker and darker. You reach a junction where the tunnel meets a corridor leading from north to south.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 26,
                content : "If you wish to turn north, go to "
            },  {
                outcomeType : "DEFAULT",
                targetNr : 100,
                content : "If you wish to go south, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 105
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 105,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "In the distance, perched on the branch of an old oak tree is a jet-black raven.",
         outcomes :  [
            {
                outcomeType : "ABILITY",
                targetNr : 298,
                ability : {
                    abilityType : "ANIMAL_KINSHIP",
                    description : "This skill enables a Kai Lord to communicate with some animals and to be able to guess the intentions of others."
                },
                content : "If you have the Kai Discipline of Animal Kinship, you may call to this bird by turning to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 335,
                content : "If you do not possess this skill, or if you do not wish to use it, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 106
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 106,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Clearing",
            regionType : "CLEARING",
            description : "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl : "images/flight/regions/clearing.png"
         },
         content : "Eventually you come to the edge of a fast-flowing icy stream. The white water cascades over the mossy rocks and disappears towards the east.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 263,
                content : "If you wish to follow the stream to the east, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 334,
                content : "If you would rather explore upstream, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 107
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 107,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Graveyard of the Ancients",
            regionType : "GRAVEYARD",
            description : "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl : "images/flight/regions/graveyardofancients.png"
         },
         content : "Running across the room, you lash out at the skulls, smashing them to fragments. You notice that inside each skull is a bubbling grey jelly that seems to writhe and change its shape, sprouting bat-like wings and suckers from its glistening form. In horror and loathing, you race for the exit corridor and escape just as a heavy portcullis falls with a crash, completely sealing off the chamber.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 23,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 108
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 108,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Homgard Robbers Lane",
            regionType : "CITY",
            description : "The Homgard Robbers Lane is...",
            imageUrl : "images/flight/regions/holmguardupperlane.png"
         },
         content : "You fly in an arc through the air towards the opposite roof. Everything seems to be happening in slow motion. You see the teeming crowds below in the street, and a nest of callysparrows in the eaves of a roof to your right. You hear their startled cries as you land with a crash on the other side. But it is the last sound that you will ever hear. The tiles splinter and collapse and you fall through the four floors of the ‘Green Slipper Inn’ breaking your back in several places. Your mission and your life end here.",
         events :  [
            {
                eventType : "MISSION_FAILED_EVENTS",
                ranking : 1
            }
         ]
    },
 {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 109
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 109,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "The only thing under the carpet is dirt!",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 164,
                content : "You may take a closer look at the bottles by turning to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 308,
                content : "Or you can leave the room and investigate the stable by turning to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 110
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 110,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         content : "You quickly take aim and hurl the rock at the Giak’s head as hard as you can, but to your horror the creature ducks and the rock arcs harmlessly over its back. You must act immediately to save the wizard.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 55,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 111
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 111,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "Only a few minutes after leaving the junction, you see in the distance a small log cabin and stable. On arrival you check the interior through a side window. The cabin looks deserted.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 57,
                content : "If you wish to enter the cabin, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 308,
                content : "If you wish to search the stable, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 112
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 112,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Clearing",
            regionType : "CLEARING",
            description : "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl : "images/flight/regions/clearing.png"
         },
         content : "Suddenly, the large rock you are hiding behind is rolled aside and you are faced by two snarling Giaks intent on your death. The cave mouth is a narrow entrance and you can only fight the Giaks one at a time.",
         events : [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Giak",
                    combatSkill : 13,
                    endurance : 10,
                    imageUrl : "images/flight/creatures/giak.png"
                }
            }, {
                eventType : "COMBAT",
                ranking : 2,
                creature : {
                    name : "Giak",
                    combatSkill : 13,
                    endurance : 10,
                    imageUrl : "images/flight/creatures/giak.png"
                }
            }
         ],
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 33,
                content : "If you win, you may explore the cave further by turning to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 248,
                content : "Or you may leave and descend the hill. Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 113
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 113,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Sommerlund Woodlands",
            regionType : "WOODS",
            description : "Deep Woods in Summerlund",
            imageUrl : "images/flight/regions/sommerlundwoodlands.png"
         },
         content : "You have been walking for over half an hour when your eye is caught by some bright red flowers growing near to a mossy bank. You recognize the plants to be Laumspur, a rare and beautiful herb much prized for its healing properties. Kneeling down, you pick a handful of Laumspur and place it in your Backpack. You may eat this herb to regain lost ENDURANCE points. Each Meal of Laumspur will restore 3 ENDURANCE points, and you have gathered enough for two such Meals.1 Closing your pack, you continue your mission.",
         events : [
            {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 1,
                item : {
                    name : "Laumspur",
                    itemType : "HERB",
                    description : "Each Meal of Laumspur may be consumed when prompted for a Meal, in which case it fulfills teh Meal re...",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/.png"
                }
            }, {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 2,
                item : {
                    name : "Laumspur",
                    itemType : "HERB",
                    description : "Each Meal of Laumspur may be consumed when prompted for a Meal, in which case it fulfills teh Meal re...",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/.png"
                }
            }
         ],
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 347,
                content : "If you wish to head northeast, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 295,
                content : "If you wish to head east, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 114
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 114,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Silvermoon Lake",
            regionType : "LAKE",
            description : "The Silvermoon Lake is a ...",
            imageUrl : "images/flight/regions/silvermoonlake.png"
         },
         content : "You coax the horse to lie down and begin to cover him and yourself with branches and dead leaves. You hear the wings of the Kraan as it passes over the trees. It returns and circles above you, but soon retreats back across the lake. You decide to leave now, in case it returns with some of its friends.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 239,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 115
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 115,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Boat Crossing",
            regionType : "CITY_OUTSKIRTS",
            description : "The outer fildworks of the city can now be seen.",
            imageUrl : "images/flight/regions/holmguardoutskirts.png"
         },
         content : "You stumble into the first building and fall to the floor exhausted. You can smell cooked meat. You notice a small cauldron hanging over the embers of a dying fire, and a large oak table that has been set for a meal. Whoever lived here must have left in a great hurry this very morning. There is water in a jug and a loaf of fresh bread on the table.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 150,
                content : "If you decide to take a quick Meal, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 177,
                content : "If you decide to search the building, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 83,
                content : "If you would rather leave now and continue your run, turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 116
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 116,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Silvermoon Lake",
            regionType : "LAKE",
            description : "The Silvermoon Lake is a ...",
            imageUrl : "images/flight/regions/silvermoonlake.png"
         },
         content : "As you climb out of the muddy water, black arrows fall all around you. Quickly, you dash for the cover of the trees and wait for the Giaks to leave the opposite bank, before continuing on foot towards the capital.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 321,
                content : "Turn to"
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 117
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 117,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Dragon Bridge",
            regionType : "BRIDGE",
            description : "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl : "images/flight/regions/dragonbridge.png"
         },
         content : "The man is badly injured and near to death. If you have the Kai Discipline of Healing, you may ease the pain of his wounds but he has been so seriously hurt he is beyond repair by your skills alone. He soon lapses into unconsciousness. You try to make him as comfortable as possible beneath a large forest oak, before leaving and pressing on through the thick woodland towards the northeast.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 330,
                content : "Turn to"
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 118
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 118,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         region : {
            name : "Boat Crossing",
            regionType : "CITY_OUTSKIRTS",
            description : "The outer fildworks of the city can now be seen.",
            imageUrl : "images/flight/regions/holmguardoutskirts.png"
         },
         content : "You spur your horse to a gallop and race down the long straight path. In the far distance you can just make out the silhouette of Holmgard on the horizon, its high walls and tall spires glinting in the morning sun. Your path joins a highway running from north to south. It is the main turnpike road between the northern port of Toran and the capital. You set off towards Holmgard, your eyes peeled for Kraan in the clear morning sky.",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 224,
                content : "Turn to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 119
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 119,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         content : "",
         events :  [
            {
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : -2
            }
         ],
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 226,
                content : "If you wish to slide down the slope as carefully as you can, turn to "
            }, {
                outcomeType : "DEFAULT",
                targetNr : 38,
                content : "If you do not feel that you are up to the risk of this tricky descent in your present sleepy state, walk around the edge of the ridge by turning to "
            }
         ]
    }, {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 120
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 120,
         book : {
            name : "Flight from the dark",
            imageUrl : "images/flight/title.jpg",
            author : "Joe Dever",
            illustrator : "Gary Chalk"
         },
         content : "Behind you can hear the blood-crazy Giaks killing the caravan horses. You risk a quick glance over your shoulder and see a Kraan start to climb high into the air. Will it attack you or is it interested in something else? The dark shadow that is gradually getting larger all around you tells you that you are its intended victim. The Kraan is diving full speed at you!",
         outcomes :  [
            {
                outcomeType : "DEFAULT",
                targetNr : 84,
                content : "If you wait until it is about to strike and then jump from the saddle, turn to"
            }, {
                outcomeType : "DEFAULT",
                targetNr : 171,
                content : "If you head as fast as you can for the trees, turn to"
            }, {
                outcomeType : "DEFAULT",
                targetNr : 54,
                content : "If you put your head down, pray to the heavens for good luck and gallop on regardless, turn to"
            }
         ]
    }
]);

db.lw1.find();
