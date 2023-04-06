use('c_insy');

// -- ------------------------------------------------------------------------------------ --
// --    Collection: projects
// -- ----------------------------------------------------------------------------------- --

db.getCollection("matches").drop();

db.getCollection("matches").insertMany([
    {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-12 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "FC Fulham",
            ballPossession : 45,
            passes : 523,
            fouls : 12,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "M.Hector"
                },
                {
                    eventType : "YELLOW_CARD",
                    player : "T.Cairney"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Arsenal London",
            ballPossession : 55,
            passes: 626,
            fouls : 12,
            events: [
                {
                    eventType: "GOAL",
                    player: "P.Aubameyang"
                },{
                    eventType: "YELLOW_CARD",
                    player: "P.Aubameyang"
                },{
                    eventType: "GOAL",
                    player: "A.Lacazette"
                },{
                    eventType: "GOAL",
                    player: "Gabriel"
                },{
                    eventType: "YELLOW_CARD",
                    player: "H.BEllerin"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Craven Cottage",
            capacity: 29600,
            city: "London",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-12 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "FC Liverpool",
            ballPossession : 48,
            passes : 432,
            fouls : 9,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "R.Firmino"
                },{
                    eventType : "GOAL",
                    player : "M.Salah"
                },
                {
                    eventType : "GOAL",
                    player : "M.Salah"
                },{
                    eventType : "GOAL",
                    player : "M.Salah"
                },{
                    eventType : "GOAL",
                    player : "V.van Dijk"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Leeds United",
            ballPossession : 52,
            passes: 459,
            fouls : 6,
            events: [
                {
                    eventType: "GOAL",
                    player: "P.Bamford"
                },
                {
                    eventType: "GOAL",
                    player: "M.Klich"
                },{
                    eventType: "GOAL",
                    player: "J.Harrison"
                }

            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Anfield",
            capacity: 53394,
            city: "Liverpool",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-12 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "West Ham United",
            ballPossession : 59,
            passes : 474,
            fouls : 13,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "R.Fredericks"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Newcastle United",
            ballPossession : 41,
            passes: 342,
            fouls : 7,
            events: [
                {
                    eventType: "GOAL",
                    player: "C.Wilson"
                },
                {
                    eventType: "GOAL",
                    player: "J.Hendrick"
                },{
                    eventType: "YELLOW_CARD",
                    player: "I.Hayden"
                },{
                    eventType: "YELLOW_CARD",
                    player: "Javi Manquillo"
                }

            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Olymiastation London",
            capacity: 80000,
            city: "London",
            country: "England"
        }
    },{
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-13 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Tottenham Hotspur",
            ballPossession : 52,
            passes : 552,
            fouls : 15,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "P.Hojbjerg"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Everton",
            ballPossession : 48,
            passes: 529,
            fouls : 7,
            events: [
                {
                    eventType: "GOAL",
                    player: "D.Calvert-Lewin"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Tottenham Hotspur Stadium",
            capacity: 62303,
            city: "London",
            country: "England"
        }
    },{
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-14 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Sheffield United",
            ballPossession : 56,
            passes : 460,
            fouls : 13,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "J.Egan"
                },{
                    eventType : "YELLOW_CARD",
                    player : "O.McBurnie"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Wolverhampton Wanderers",
            ballPossession : 44,
            passes: 391,
            fouls : 7,
            events: [
                {
                    eventType: "GOAL",
                    player: "R.Jimenez"
                },{
                    eventType: "GOAL",
                    player: "R.Saiss"
                },{
                    eventType: "YELLOW_CARD",
                    player: "F.Marcal"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Bramall Lane",
            capacity: 32050,
            city: "Sheffield",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-19 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Leeds United",
            ballPossession : 51,
            passes : 444,
            fouls : 13,
            events : [
                {
                    eventType : "GOAL",
                    player : "H.Costa"
                },{
                    eventType : "GOAL",
                    player : "H.Costa"
                },{
                    eventType : "GOAL",
                    player : "P.Bamford"
                },{
                    eventType : "GOAL",
                    player : "M.Klich"
                },{
                    eventType : "YELLOW_CARD",
                    player : "M.Klich"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Fulham",
            ballPossession : 49,
            passes: 438,
            fouls : 7,
            events: [
                {
                    eventType: "GOAL",
                    player: "A.Mitrovic"
                },{
                    eventType: "GOAL",
                    player: "A.Mitrovic"
                },{
                    eventType: "YELLOW_CARD",
                    player: "A.Mitrovic"
                },{
                    eventType: "YELLOW_CARD",
                    player: "K.Tete"
                },{
                    eventType: "GOAL",
                    player: "M.Hector"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Bramall Lane",
            capacity: 32050,
            city: "Sheffield",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-19 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Manchester United",
            ballPossession : 76,
            passes : 705,
            fouls : 13,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "T.Fosu-Mensah"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "H.Maguire"
                },{
                    eventType : "GOAL",
                    player : "D.Beek"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Crystal Palace",
            ballPossession : 24,
            passes: 225,
            fouls : 10,
            events: [
                {
                    eventType: "GOAL",
                    player: "W.Zaha"
                }, {
                    eventType: "GOAL",
                    player: "W.Zaha"
                },{
                    eventType: "GOAL",
                    player: "A.Townsend"
                },{
                    eventType: "YELLOW_CARD",
                    player: "J.Ward"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Old Trafford",
            capacity: 76000,
            city: "Manchester",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-19 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Arsenal London",
            ballPossession : 63,
            passes : 669,
            fouls : 11,
            events : [
                {
                    eventType : "GOAL",
                    player : "A.Lacazette"
                }, {
                    eventType : "GOAL",
                    player : "A.Lacazette"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Westham United",
            ballPossession : 37,
            passes: 383,
            fouls : 13,
            events: [
                {
                    eventType: "GOAL",
                    player: "M.Antonio"
                }, {
                    eventType: "YELLOW_CARD",
                    player: "R.Fredericks"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Emirates Stadium",
            capacity: 60260,
            city: "London",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-20 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Chelsea London",
            ballPossession : 38,
            passes : 488,
            fouls : 10,
            events : [
                {
                    eventType : "RED_CARD",
                    player : "A.Christensen"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Liverpool",
            ballPossession : 62,
            passes: 764,
            fouls : 6,
            events: [
                {
                    eventType: "GOAL",
                    player: "S.Mane"
                }, {
                    eventType: "GOAL",
                    player: "S.Mane"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Stamford Bridge",
            capacity: 41837,
            city: "London",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-20 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Leicester City",
            ballPossession : 68,
            passes : 621,
            fouls : 11,
            events : [
                {
                    eventType : "GOAL",
                    player : "H.Barnes"
                },{
                    eventType : "GOAL",
                    player : "E.Pieters"
                },{
                    eventType : "GOAL",
                    player : "J.Justin"
                },{
                    eventType : "GOAL",
                    player : "D.Praet"
                },{
                    eventType : "YELLOW_CARD",
                    player : "N.Mendy"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Burnley",
            ballPossession : 32,
            passes: 292,
            fouls : 13,
            events: [
                {
                    eventType: "GOAL",
                    player: "C.Wood"
                }, {
                    eventType: "GOAL",
                    player: "J.Dunne"
                } , {
                    eventType: "YELLOW_CARD",
                    player: "J.Rodriguez"
                }, {
                    eventType: "YELLOW_CARD",
                    player: "P.Bardsley"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "King Power Station",
            capacity: 32312,
            city: "Leicester",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-21 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Aston Villa",
            ballPossession : 72,
            passes : 553,
            fouls : 12,
            events : [
                {
                    eventType : "GOAL",
                    player : "E.Konsa"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "M.Cash"
                },{
                    eventType : "YELLOW_CARD",
                    player : "M.Targett"
                },{
                    eventType : "YELLOW_CARD",
                    player : "J.McGinn"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Sheffield United",
            ballPossession : 28,
            passes: 221,
            fouls : 13,
            events: [
                {
                    eventType: "YELLOW_CARD",
                    player: "J.Lundstram"
                }, {
                    eventType: "RED_CARD",
                    player: "J.Egan"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Villa Park",
            capacity: 42785,
            city: "Birmingham",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-21 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Wolverhampton Wanderers",
            ballPossession : 34,
            passes : 356,
            fouls : 7,
            events : [
                {
                    eventType : "GOAL",
                    player : "R.Jimenez"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Manchester City",
            ballPossession : 66,
            passes: 692,
            fouls : 13,
            events: [
                {
                    eventType: "GOAL",
                    player: "G.Jesus"
                }, {
                    eventType: "GOAL",
                    player: "K.DeBruyne"
                },{
                    eventType: "GOAL",
                    player: "P.Foden"
                },{
                    eventType: "YELLOW_CARD",
                    player: "Rodri"
                },{
                    eventType: "YELLOW_CARD",
                    player: "B.Mendy"
                },{
                    eventType: "YELLOW_CARD",
                    player: "G.Jesus"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Molineux Stadium",
            capacity: 31700,
            city: "Wolverhampton",
            country: "England"
        }
    },  {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-27 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Sheffield United",
            ballPossession : 36,
            passes : 327,
            fouls : 18,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "G.Baldock"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "J.Lundstram"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Leeds United",
            ballPossession : 64,
            passes: 578,
            fouls : 4,
            events: [
                {
                    eventType: "GOAL",
                    player: "K.Phillips"
                },{
                    eventType: "YELLOW_CARD",
                    player: "P.Bamford"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Bramall Lane",
            capacity: 32050,
            city: "Sheffield",
            country: "England"
        }
    },{
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-27 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Tottenham Hotspur",
            ballPossession : 66,
            passes : 640,
            fouls : 15,
            events : [
                {
                    eventType : "GOAL",
                    player : "Lucas"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "H.Winks"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Newcastle United",
            ballPossession : 34,
            passes: 319,
            fouls : 9,
            events: [
                {
                    eventType: "GOAL",
                    player: "C.Wilson"
                },{
                    eventType: "YELLOW_CARD",
                    player: "Joelinton"
                },{
                    eventType: "YELLOW_CARD",
                    player: "J.Shelvey"
                },{
                    eventType: "YELLOW_CARD",
                    player: "I.Hayden"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Tottenham Hotspur Station",
            capacity: 62303,
            city: "London",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-27 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Manchester City",
            ballPossession : 72,
            passes : 680,
            fouls : 13,
            events : [
                {
                    eventType : "GOAL",
                    player : "N.Ake"
                },{
                    eventType : "YELLOW_CARD",
                    player : "N.Ake"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Leicester City",
            ballPossession : 28,
            passes: 267,
            fouls : 8,
            events: [
                {
                    eventType: "YELLOW_CARD",
                    player: "Y.Tielemans"
                },{
                    eventType: "YELLOW_CARD",
                    player: "D.Amartey"
                },{
                    eventType: "YELLOW_CARD",
                    player: "C.Soyuncu"
                },{
                    eventType: "GOAL",
                    player: "J.Vardy"
                },{
                    eventType: "GOAL",
                    player: "J.Vardy"
                },{
                    eventType: "GOAL",
                    player: "J.Vardy"
                },{
                    eventType: "GOAL",
                    player: "J.Maddison"
                },{
                    eventType: "GOAL",
                    player: "Y.Tielemans"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Ethihad Station",
            capacity: "55097",
            city: "Manchester",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-27 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "West Ham United",
            ballPossession : 36,
            passes : 367,
            fouls : 7,
            events : [
                {
                    eventType : "GOAL",
                    player : "J.Bowen"
                },{
                    eventType : "GOAL",
                    player : "J.Bowen"
                },{
                    eventType : "GOAL",
                    player : "R.Jimenez"
                },{
                    eventType : "GOAL",
                    player : "S.Haller"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Wolverhampton Wanderers",
            ballPossession : 64,
            passes: 626,
            fouls : 11,
            events: [
                {
                    eventType: "YELLOW_CARD",
                    player: "C.Coady"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Olymiastation London",
            capacity: "80000",
            city: "London",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-28 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "FC Fulham",
            ballPossession : 65,
            passes : 538,
            fouls : 18,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "D.Odoi"
                },{
                    eventType : "YELLOW_CARD",
                    player : "B.Reid"
                },{
                    eventType : "YELLOW_CARD",
                    player : "T.Cairney"
                },{
                    eventType : "YELLOW_CARD",
                    player : "J.Bryan"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Aston Villa",
            ballPossession : 35,
            passes: 70,
            fouls : 14,
            events: [
                {
                    eventType: "YELLOW_CARD",
                    player: "M.Targett"
                },{
                    eventType: "YELLOW_CARD",
                    player: "T.Mings"
                },{
                    eventType: "YELLOW_CARD",
                    player: "J.McGinn"
                },{
                    eventType: "GOAL",
                    player: "J.Grealish"
                },{
                    eventType: "GOAL",
                    player: "C.Hourihane"
                },{
                    eventType: "GOAL",
                    player: "T.Mings"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Craven Cottage",
            capacity: "25700",
            city: "London",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-09-28 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "FC Liverpool",
            ballPossession : 66,
            passes : 772,
            fouls : 11,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "T.Alexander-Arnold"
                },{
                    eventType : "YELLOW_CARD",
                    player : "S.Mane"
                },{
                    eventType : "GOAL",
                    player : "S.Mane"
                },{
                    eventType : "GOAL",
                    player : "A.Robertson"
                },{
                    eventType : "GOAL",
                    player : "D.Jota"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Arsenal London",
            ballPossession : 35,
            passes: 34,
            fouls : 7,
            events: [
                {
                    eventType: "YELLOW_CARD",
                    player: "H.Bellerin"
                },{
                    eventType: "GOAL",
                    player: "A.Lacazette"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Anfield",
            capacity: "53394",
            city: "Liverpool",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-03 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Leeds United",
            ballPossession : 53,
            passes : 429,
            fouls : 11,
            events : [
                {
                    eventType : "GOAL",
                    player : "Rodrigo"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "P.Bamford"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Manchester City",
            ballPossession : 47,
            passes: 389,
            fouls : 12,
            events: [
                {
                    eventType: "GOAL",
                    player: "B.Mendy"
                }, {
                    eventType: "YELLOW_CARD",
                    player: "R.Sterling"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Elland Road",
            capacity: "37890",
            city: "Leeds",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-03 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Newcastle United",
            ballPossession : 47,
            passes : 416,
            fouls : 13,
            events : [
                {
                    eventType : "GOAL",
                    player : "A.Saint-Maximin"
                },{
                    eventType : "GOAL",
                    player : "C.Wilson"
                },{
                    eventType : "GOAL",
                    player : "C.Wilson"
                },{
                    eventType : "YELLOW_CARD",
                    player : "Joelinton"
                },{
                    eventType : "YELLOW_CARD",
                    player : "J.Lewis"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Burnley",
            ballPossession : 53,
            passes: 455,
            fouls : 17,
            events: [
                {
                    eventType: "GOALS",
                    player: "A.Westwood"
                },{
                    eventType: "YELLOW_CARD",
                    player: "C.McNeil"
                },{
                    eventType: "YELLOW_CARD",
                    player: "J.Tarkowski"
                },{
                    eventType: "YELLOW_CARD",
                    player: "A.Barnes"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "St.James Park",
            capacity: "52405",
            city: "Newcastle",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-04 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Arsenal London",
            ballPossession : 65,
            passes : 699,
            fouls : 3,
            events : [
                {
                    eventType : "GOAL",
                    player : "B.Saka"
                },{
                    eventType : "GOAL",
                    player : "N.Pepe"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Sheffield United",
            ballPossession : 35,
            passes: 373,
            fouls : 9,
            events: [
                {
                    eventType: "GOAL",
                    player: "D.McGoldrick"
                },{
                    eventType: "YELLOW_CARD",
                    player: "S.Berge"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Emirates Stadium",
            capacity: "60260",
            city: "London",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-04 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Wolverhampton Wnaderers",
            ballPossession : 47,
            passes : 478,
            fouls : 15,
            events : [
                {
                    eventType : "GOAL",
                    player : "P.Neto"
                },{
                    eventType : "YELLOW_CARD",
                    player : "R.Neves"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Fulham",
            ballPossession : 53,
            passes: 524,
            fouls : 8,
            events: [
                {
                    eventType: "YELLOW_CARD",
                    player: "M.LeMarchand"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Molineux Stadium",
            capacity: "31700",
            city: "Wolverhampton",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-04 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Manchester United",
            ballPossession : 47,
            passes : 478,
            fouls : 15,
            events : [
                {
                    eventType : "GOAL",
                    player : "B.Fernandes"
                },{
                    eventType : "YELLOW_CARD",
                    player : "E.Baily"
                },{
                    eventType : "YELLOW_CARD",
                    player : "L.Shaw"
                },{
                    eventType : "RED_CARD",
                    player : "A.Martial"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Tottenham Hotspur",
            ballPossession : 62,
            passes: 672,
            fouls : 11,
            events: [
                {
                    eventType: "GOAL",
                    player: "T.Ndombele"
                },{
                    eventType: "GOAL",
                    player: "S.Heung-min"
                },{
                    eventType: "GOAL",
                    player: "H.Kane"
                },{
                    eventType: "GOAL",
                    player: "H.Kane"
                },{
                    eventType: "GOAL",
                    player: "S.Aurier"
                },{
                    eventType: "GOAL",
                    player: "S.Heung-min"
                },{
                    eventType: "YELLOW_CARD",
                    player: "E.Lamela"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Old Trafford",
            capacity: "76000",
            city: "Manchester",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-04 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Aston Villa",
            ballPossession : 30,
            passes : 285,
            fouls : 7,
            events : [
                {
                    eventType : "GOAL",
                    player : "O.Watkins"
                },{
                    eventType : "GOAL",
                    player : "O.Watkins"
                },{
                    eventType : "GOAL",
                    player : "O.Watkins"
                },{
                    eventType : "GOAL",
                    player : "J.McGinn"
                },{
                    eventType : "GOAL",
                    player : "R.Barkley"
                },{
                    eventType : "GOAL",
                    player : "J.Grealish"
                },{
                    eventType : "GOAL",
                    player : "J.Grealish"
                },{
                    eventType : "YELLOW_CARD",
                    player : "D.Luiz"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Liverpool",
            ballPossession : 70,
            passes: 650,
            fouls : 10,
            events: [
                {
                    eventType: "GOAL",
                    player: "M.Salah"
                },{
                    eventType: "GOAL",
                    player: "M.Salah"
                },{
                    eventType: "YELLOW_CARD",
                    player: "V.vanDijk"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Villa Park",
            capacity: "42785",
            city: "Birmingham",
            country: "England"
        }
    },  {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-17 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "FC Everton",
            ballPossession : 11,
            passes : 380,
            fouls : 15,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "J.Rodriguez"
                },{
                    eventType : "YELLOW_CARD",
                    player : "Allan"
                },{
                    eventType : "YELLOW_CARD",
                    player : "A.Gomes"
                },{
                    eventType : "RED_CARD",
                    player : "Richarlison"
                },{
                    eventType : "GOAL",
                    player : "D.Calvert-Lewin"
                },{
                    eventType : "GOAL",
                    player : "M.Keane"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Liverpool",
            ballPossession : 59,
            passes: 524,
            fouls : 9,
            events: [
                {
                    eventType: "YELLOW_CARD",
                    player: "S.Mane"
                },{
                    eventType: "YELLOW_CARD",
                    player: "Fabinho"
                },{
                    eventType: "GOAL",
                    player: "S.Mane"
                },{
                    eventType: "GOAL",
                    player: "M.Salah"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Goodison Park",
            capacity: "39572",
            city: "Liverpool",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-17 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Manchester City",
            ballPossession : 59,
            passes : 665,
            fouls : 15,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "R.Dias"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "Rodri"
                },{
                    eventType : "YELLOW_CARD",
                    player : "J.Cancelo"
                },{
                    eventType : "YELLOW_CARD",
                    player : "N.Ake"
                },{
                    eventType : "GOALS",
                    player : "R.Sterling"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Liverpool",
            ballPossession : 41,
            passes: 462,
            fouls : 10,
            events: [

            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Ethihad Station",
            capacity: "55097",
            city: "Manchester",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-17 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Newcastle United",
            ballPossession : 36,
            passes : 358,
            fouls : 9,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "E.Krafth"
                }, {
                    eventType : "GOAL",
                    player : "L.Shaw"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Manchester United",
            ballPossession : 64,
            passes: 629,
            fouls : 12,
            events: [
                {
                    eventType : "GOAL",
                    player : "H.Maguire"
                },{
                    eventType : "GOAL",
                    player : "B.Fernandes"
                },{
                    eventType : "GOAL",
                    player : "A.Wan-Bissaka"
                },{
                    eventType : "GOAL",
                    player : "M.Rashford"
                },{
                    eventType : "YELLOW_CARD",
                    player : "D.James"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "St.James Park",
            capacity: "52405",
            city: "Newcastle",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-17 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Newcastle United",
            ballPossession : 36,
            passes : 358,
            fouls : 9,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "E.Krafth"
                }, {
                    eventType : "GOAL",
                    player : "L.Shaw"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Manchester United",
            ballPossession : 64,
            passes: 629,
            fouls : 12,
            events: [
                {
                    eventType : "GOAL",
                    player : "H.Maguire"
                },{
                    eventType : "GOAL",
                    player : "B.Fernandes"
                },{
                    eventType : "GOAL",
                    player : "A.Wan-Bissaka"
                },{
                    eventType : "GOAL",
                    player : "M.Rashford"
                },{
                    eventType : "YELLOW_CARD",
                    player : "D.James"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "St.James Park",
            capacity: "52405",
            city: "Newcastle",
            country: "England"
        }
    },{
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-18 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Sheffield United",
            ballPossession : 41,
            passes : 399,
            fouls : 5,
            events : [
                {
                    eventType : "GOAL",
                    player : "B.Sharp"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Fulham",
            ballPossession : 59,
            passes: 563,
            fouls : 9,
            events: [
                {
                    eventType : "GOAL",
                    player : "A.Lookman"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "A.Zambo Anguissa"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "I.Cavaleiro"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Bramall Lane",
            capacity: "32050",
            city: "Sheffield",
            country: "England"
        }
    },{
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-18 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Tottenham Hotspur",
            ballPossession : 52,
            passes : 522,
            fouls : 13,
            events : [
                {
                    eventType : "GOAL",
                    player : "S.Heung-min"
                },{
                    eventType : "GOAL",
                    player : "H.Kane"
                },{
                    eventType : "GOAL",
                    player : "H.Kane"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "West Ham United",
            ballPossession : 59,
            passes: 563,
            fouls : 9,
            events: [
                {
                    eventType : "GOAL",
                    player : "F.Balbuena"
                },{
                    eventType : "GOAL",
                    player : "D.Sanchez"
                },{
                    eventType : "GOAL",
                    player : "M.Lanzini"
                },{
                    eventType : "YELLOW_CARD",
                    player : "M.Antonio"
                },{
                    eventType : "YELLOW_CARD",
                    player : "T.Soucek"
                },{
                    eventType : "YELLOW_CARD",
                    player : "A.Ogbaonna"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Tottenham Hotspur Stadium",
            capacity: "62303",
            city: "Tottenham",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-19 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Leeds United",
            ballPossession : 68,
            passes : 553,
            fouls : 13,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "L.Ayling"
                },{
                    eventType : "YELLOW_CARD",
                    player : "K.Philips"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Wolverhampton Wanderers",
            ballPossession : 32,
            passes: 269,
            fouls : 12,
            events: [
                {
                    eventType : "GOAL",
                    player : "R.Jimenez"
                },{
                    eventType : "YELLOW_CARD",
                    player : "J.Moutinho"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Elland Road",
            capacity: "37890",
            city: "Leeds",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-19 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Leeds United",
            ballPossession : 68,
            passes : 553,
            fouls : 13,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "L.Ayling"
                },{
                    eventType : "YELLOW_CARD",
                    player : "K.Philips"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Wolverhampton Wanderers",
            ballPossession : 32,
            passes: 269,
            fouls : 12,
            events: [
                {
                    eventType : "GOAL",
                    player : "R.Jimenez"
                },{
                    eventType : "YELLOW_CARD",
                    player : "J.Moutinho"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Elland Road",
            capacity: "37890",
            city: "Leeds",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-23 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Aston Villa",
            ballPossession : 45,
            passes : 553,
            fouls : 13,
            events : [
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Leeds United",
            ballPossession : 55,
            passes: 269,
            fouls : 8,
            events: [
                {
                    eventType : "GOAL",
                    player : "Bamford"
                },{
                    eventType : "GOAL",
                    player : "Bamford"
                },{
                    eventType : "GOAL",
                    player : "Bamford"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Elland Road",
            capacity: "37890",
            city: "Leeds",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-24 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "West Ham United",
            ballPossession : 30,
            passes : 325,
            fouls : 14,
            events : [
                {
                    eventType : "GOAL",
                    player : "M.Antonio"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "V.Coufal"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "F.Balbuena"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Manchester City",
            ballPossession : 70,
            passes: 747,
            fouls : 6,
            events: [
                {
                    eventType : "GOAL",
                    player : "P.Foden"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Olymiastation London",
            capacity: "80000",
            city: "Leeds",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-24 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Manchester United",
            ballPossession : 51,
            passes : 582,
            fouls : 8,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "M.Rashford"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "Fred"
                },{
                    eventType : "YELLOW_CARD",
                    player : "L.Shaw"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Chelsea",
            ballPossession : 49,
            passes: 582,
            fouls : 6,
            events: [
                {
                    eventType : "YELLOW_CARD",
                    player : "K.Havertz"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Old Trafford",
            capacity: "76000",
            city: "Manchester",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-25 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Wolverhampton Wanderers",
            ballPossession : 64,
            passes : 702,
            fouls : 10,
            events : [
                {
                    eventType : "GOAL",
                    player : "R.Jimenez"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Newcastle",
            ballPossession : 36,
            passes: 400,
            fouls : 10,
            events: [
                {
                    eventType : "YELLOW_CARD",
                    player : "M.Almiron"
                },{
                    eventType : "GOAL",
                    player : "J.Murphy"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Molineux Stadium",
            capacity: "31700",
            city: "Wolverhampton",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-26 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "FC Burnley",
            ballPossession : 64,
            passes : 702,
            fouls : 10,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "K.Long"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Chelsea",
            ballPossession : 64,
            passes: 693,
            fouls : 15,
            events: [
                {
                    eventType : "GOAL",
                    player : "H.Ziyech"
                }, {
                    eventType : "GOAL",
                    player : "K.Zouma"
                },{
                    eventType : "GOAL",
                    player : "T.Werner"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Turf Moor",
            capacity: "22546",
            city: "Burnley",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-31 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Sheffield United",
            ballPossession : 35,
            passes : 373,
            fouls : 14,
            events : [

            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Manchester City",
            ballPossession : 65,
            passes: 715,
            fouls : 6,
            events: [
                {
                    eventType : "GOAL",
                    player : "K.Walker"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Bramall Lane",
            capacity: "21050",
            city: "Sheffield",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-31 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "FC Burnley",
            ballPossession : 36,
            passes : 392,
            fouls : 10,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "K.Long"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Chelsea",
            ballPossession : 64,
            passes: 693,
            fouls : 15,
            events: [
                {
                    eventType : "GOAL",
                    player : "H.Ziyech"
                }, {
                    eventType : "GOAL",
                    player : "K.Zouma"
                },{
                    eventType : "GOAL",
                    player : "T.Werner"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Turf Moor",
            capacity: "22546",
            city: "Burnley",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-10-31 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "FC Liverpool",
            ballPossession : 73,
            passes : 827,
            fouls : 13,
            events : [
                {
                    eventType : "GOAL",
                    player : "M.Salah"
                }, {
                    eventType : "GOAL",
                    player : "D.Jota"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "West Ham United",
            ballPossession : 27,
            passes: 304,
            fouls : 14,
            events: [
                {
                    eventType : "YELLOW_CARD",
                    player : "P.Fornals"
                }, {
                    eventType : "GOAL",
                    player : "P.Fornals"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Anfield",
            capacity: "53394",
            city: "Liverpool",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-11-01 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Newcastle United",
            ballPossession : 37,
            passes : 369,
            fouls : 9,
            events : [
                {
                    eventType : "GOAL",
                    player : "C.Wilson"
                }, {
                    eventType : "GOAL",
                    player : "C.Wilson"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "J.Murphy"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "C.Wilson"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Everton",
            ballPossession : 63,
            passes: 607,
            fouls : 10,
            events: [
                {
                    eventType : "YELLOW_CARD",
                    player : "Allan"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "N.Nkounkou"
                },{
                    eventType : "YELLOW_CARD",
                    player : "Y.Mina"
                },{
                    eventType : "YELLOW_CARD",
                    player : "A.Coucoure"
                },{
                    eventType : "GOAL",
                    player : "D.Calvert-Lewin"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "St.James Park",
            capacity: "52405",
            city: "Newcastle",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-11-01 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Manchester United",
            ballPossession : 54,
            passes : 570,
            fouls : 12,
            events : [
                {
                    eventType : "YELLOW_CARD",
                    player : "H.Maguire"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "Fred"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "M.Greenwood"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Arsenal",
            ballPossession : 46,
            passes: 501,
            fouls : 12,
            events: [
                {
                    eventType : "YELLOW_CARD",
                    player : "P.Aubameyang"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "Gabriel"
                },{
                    eventType : "YELLOW_CARD",
                    player : "R.Holding"
                },{
                    eventType : "GOAL",
                    player : "P.Aubameyang"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Old Trafford",
            capacity: "76000",
            city: "Manchester",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-11-02 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Leeds United",
            ballPossession : 68,
            passes : 639,
            fouls : 9,
            events : [
                {
                    eventType : "GOAL",
                    player : "S.Dallas"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "S.Dallas"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Manchester United",
            ballPossession : 32,
            passes: 501,
            fouls : 1,
            events: [
                {
                    eventType : "GOAL",
                    player : "B.Fernandes"
                }, {
                    eventType : "GOAL",
                    player : "B.Fernandes"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Elland Road",
            capacity: "37890",
            city: "Manchester",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-11-07 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Chelsea London",
            ballPossession : 55,
            passes : 523,
            fouls : 12,
            events : [
                {
                    eventType : "GOAL",
                    player : "T.Abraham"
                }, {
                    eventType : "GOAL",
                    player : "B.Chilwell"
                },{
                    eventType : "GOAL",
                    player : "T.Silva"
                },{
                    eventType : "GOAL",
                    player : "T.Werner"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Sheffield United",
            ballPossession : 29,
            passes: 320,
            fouls : 14,
            events: [
                {
                    eventType : "GOAL",
                    player : "D.McGoldrick"
                },{
                    eventType : "YELLOW_CARD",
                    player : "S.Berge"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "J.Egan"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Stamford Bridge",
            capacity: "41837",
            city: "London",
            country: "England"
        }
    }, {
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-11-07 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "West Ham United",
            ballPossession : 53,
            passes : 506,
            fouls : 10,
            events : [
                {
                    eventType : "GOAL",
                    player : "T.Soucek"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "A.Ogbonna"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "FC Fulham",
            ballPossession : 29,
            passes: 320,
            fouls : 14,
            events: [
                {
                    eventType : "YELLOW_CARD",
                    player : "A.Mitrovic"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Olymiastation London",
            capacity: "80000",
            city: "London",
            country: "England"
        }
    },{
        status: "FINISHED",
        competition : "Premier League",
        country : "England",
        continent: "EUROPE",
        matchStart: "2020-11-21 15:30:00",
        teams: [{
            teamType : "HOME_TEAM",
            name: "Tottenham Hotspur",
            ballPossession : 33,
            passes : 318,
            fouls : 13,
            events : [
                {
                    eventType : "GOAL",
                    player : "S.Heung-min"
                }, {
                    eventType : "GOAL",
                    player : "G.LoCelso"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "M.Sissoko"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "H.Kane"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            },
        }, {
            teamType : "AWAY_TEAM",
            name: "Manchester City",
            ballPossession : 67,
            passes:599,
            fouls : 19,
            events: [
                {
                    eventType : "YELLOW_CARD",
                    player : "F.Torres"
                }, {
                    eventType : "YELLOW_CARD",
                    player : "R.Dias"
                }
            ],
            country: {
                name: "England",
                countryCode: "en",
                league : "Premier League",
                continent: "EUROPE"
            }
        }],
        venue: {
            name: "Tottenham Hotspur Stadium",
            capacity: "62303",
            city: "London",
            country: "England"
        }
    }
]);
