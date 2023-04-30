// Geben Sie die Teams mit den meisten gelben Karten aus
db.matches.aggregate([{
    $unwind : "$teams"
}, {
    $replaceRoot : {
        newRoot : "$teams"
    }
}, {
    $addFields : {
        yellowCards : {
            $size : {
                $filter : {
                input : "$events",
                as : "event",
                cond : { $eq : ["$$event.eventType", "YELLOW_CARD"]}
                }
            }
        }
    }
}, {
    $group : {
        _id : "$name",
        yellowCards : {
            $sum : "$yellowCards"
        }
    }
}, {
    $group : {
        _id : null,
        teams : {
            $push : "$$ROOT"
        },
        max_cards : {
            $max : "$yellowCards"
        }
    }
}, {
    $addFields : {
        teams : {
            $filter : {
                input : "$teams",
                as : "team",
                cond : {
                    $eq : ["$$team.yellowCards", "$max_cards"]
                }
            }
        }
    }
}, {
    $unwind : "$teams"
}, {
    $replaceRoot : {
        newRoot : "$teams"
    }
}, {
    $lookup : {
        from : "matches",
        pipeline : [{
            $addFields : {
                teams : {
                    $map : {
                        input : "$teams",
                        as : "team",
                        in : {
                            name : "$$team.name",
                            opponent : {
                                $cond : {
                                    if : { $eq : ["$$team.teamType", "HOME_TEAM"]},
                                    then : {
                                        $arrayElemAt: ["$teams.name", 1]
                                    },
                                    else : {
                                        $arrayElemAt: ["$teams.name", 0]
                                    }
                                }
                            },
                            yellowCards : {
                                $size : {
                                    $filter : {
                                    input : "$$team.events",
                                    as : "event",
                                    cond : { $eq : ["$$event.eventType", "YELLOW_CARD"]}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, {
            $unwind : "$teams"
        }, {
            $replaceRoot : {
                newRoot : "$teams"
            }
        }, {
            $group : {
                _id : "$name",
                teams : {
                    $push : "$$ROOT"
                },
                max_yellow : {
                    $max : "$yellowCards"
                }
            }
        }, {
            $addFields : {
                teams : {
                    $filter : {
                        input : "$teams",
                        as : "team",
                        cond : {
                            $eq : ["$$team.yellowCards", "$max_yellow"]
                        }
                    }
                }
            }
        }, {
            $unwind : "$teams"
        }, {
            $replaceRoot : {
                newRoot : "$teams"
            }
        }],
        as : "matches"
    }
}, {
    $project : {
        yellowCards : 1,
        opponents : {
            $filter : {
                input : "$matches",
                as : "match",
                cond : {
                    $eq : ["$$match.name", "$_id"]
                }
            }
        }
    }
}, {
    $addFields : {
        opponents : {
            $map : {
                input : "$opponents",
                as : "opponent",
                in : {
                    name : "$$opponent.opponent",
                    yellowCardAgainst : "$$opponent.yellowCards"
                }
            }
        }
    }
}]);

db.matches.aggregate([{
    $unwind : "$teams"
}, {
    $replaceRoot : {
        newRoot : "$teams"
    }
}, {
    $addFields : {
        yellowCards : {
            $size : {
                $filter : {
                    input  : "$events",
                    as  :"event",
                    cond : {
                        $eq : ["$$event.eventType", "YELLOW_CARD"]
                    }
                }
            }
        }
    }
}, {
    $group : {
        _id : "$name",
        yellowCards : {
            $sum : "$yellowCards"
        }
    }
}, {
    $group : {
        _id : null,
        teams : {
            $push : "$$ROOT"
        },
        max_cards : {
            $max : "$yellowCards"
        }
    }
}, {
    $addFields : {
        teams : {
            $filter : {
                input : "$teams",
                as : "team",
                cond : {
                    $eq : ["$$team.yellowCards", "$max_cards"]
                }
            }
        }
    }
}, {
    $unwind : "$teams"
}, {
    $replaceRoot : {
        newRoot : "$teams"
    }
}, {
    $lookup : {
        from : "matches",
        pipeline : [{
            $addFields : {
                teams : {
                    $map : {
                        input : "$teams",
                        as : "team",
                        in : {
                            name : "$$team.name",
                            opponent : {
                                $cond : {
                                    if : { $eq : ["$$team.teamType", "HOME_TEAM"]},
                                    then : {
                                        $arrayElemAt: ["$teams.name", 1]
                                    },
                                    else : {
                                        $arrayElemAt: ["$teams.name", 0]
                                    }
                                }
                            },
                            yellowCards : {
                                $size : {
                                    $filter : {
                                    input : "$$team.events",
                                    as : "event",
                                    cond : { $eq : ["$$event.eventType", "YELLOW_CARD"]}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, {
            $unwind : "$teams"
        }, {
            $replaceRoot : {
                newRoot : "$teams"
            }
        }, {
            $group : {
                _id : "$name",
                teams : {
                    $push : "$$ROOT"
                },
                max_yellow : {
                    $max : "$yellowCards"
                }
            }
        }, {
            $addFields : {
                teams : {
                    $filter : {
                        input : "$teams",
                        as : "team",
                        cond : {
                            $eq : ["$$team.yellowCards", "$max_yellow"]
                        }
                    }
                }
            }
        }, {
            $unwind : "$teams"
        }, {
            $replaceRoot : {
                newRoot : "$teams"
            }
        }],
        as : "matches"
    }
}, {
    $project : {
        yellowCards : 1,
        opponents : {
            $filter : {
                input : "$matches",
                as : "match",
                cond : {
                    $eq : ["$$match.name", "$_id"]
                }
            }
        }
    }
}, {
    $addFields : {
        opponents : {
            $map : {
                input : "$opponents",
                as : "opponent",
                in : {
                    name : "$$opponent.opponent",
                    yellowCardAgainst : "$$opponent.yellowCards"
                }
            }
        }
    }
}]);