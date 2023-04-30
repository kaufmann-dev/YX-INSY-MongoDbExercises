db.outerrim.drop();

db.outerrim.insertMany([
  {
    "_id": new ObjectId("63e2566b52f19c30ea4c6cd3"),
    "aircraft": {
      "brand": "G0 Auslegefrachter",
      "hyperDrive": 6,
      "shipCombatValue": 2,
      "hullPoints": 2
    },
    "crew": [
      {
        "name": "Han Solo",
        "roles": ["CAPTAIN", "PILOT", "MECHANICAN"],
        "groundCombatValue": 2,
        "health": 4
      },
      {
        "name": "Chewbacca",
        "roles": ["CO_PILOT", "MECHANICAN", "GUNNER"],
        "groundCombatValue": 3,
        "health": 5
      }
    ],
    "date": {"$date": "2020-05-18T14:10:30.000Z"},
    "factionReputation": [
      {
        "faction": "HUTTS",
        "change": 0
      },
      {
        "faction": "SYNDIKATE",
        "change": 0
      },
      {
        "faction": "IMPERIUM",
        "change": 0
      },
      {
        "faction": "REBELLS",
        "change": 0
      }
    ],
    "log": {
      "type": "NAVIGATION",
      "route": {
        "type": "INTERSTELLAR",
        "begin": {
          "type": "NAV_POINT",
          "name": "NAV_1",
          "sector": "HUTT_SECTOR"
        },
        "end": {
          "type": "NAV_POINT",
          "name": "NAV_2",
          "sector": "HUTT_SECTOR"
        }
      }
    }
  },
  {
    "_id": new ObjectId("63e2566b52f19c30ea4c6cd4"),
    "aircraft": {
      "brand": "G0 Auslegefrachter",
      "hyperDrive": 6,
      "shipCombatValue": 2,
      "hullPoints": 2
    },
    "crew": [
      {
        "name": "Han Solo",
        "roles": ["CAPTAIN", "PILOT", "MECHANICAN"],
        "groundCombatValue": 2,
        "health": 4
      },
      {
        "name": "Chewbacca",
        "roles": ["CO_PILOT", "MECHANICAN", "GUNNER"],
        "groundCombatValue": 3,
        "health": 5
      }
    ],
    "date": {"$date": "2020-05-18T14:10:30.000Z"},
    "factionReputation": [
      {
        "faction": "HUTTS",
        "change": 5
      },
      {
        "faction": "SYNDIKATE",
        "change": -10
      },
      {
        "faction": "IMPERIUM",
        "change": 0
      },
      {
        "faction": "REBELLS",
        "change": 0
      }
    ],
    "log": {
      "type": "NAVIGATION",
      "route": {
        "type": "INTERSTELLAR",
        "begin": {
          "type": "NAV_POINT",
          "name": "NAV_2",
          "sector": "HUTT_SECTOR"
        },
        "end": {
          "type": "NAV_POINT",
          "name": "NAV_3",
          "sector": "HUTT_SECTOR"
        }
      }
    }
  },
  {
    "_id": new ObjectId("63e2566b52f19c30ea4c6cd5"),
    "aircraft": {
      "brand": "G0 Auslegefrachter",
      "hyperDrive": 6,
      "shipCombatValue": 2,
      "hullPoints": 2
    },
    "crew": [
      {
        "name": "Han Solo",
        "roles": ["CAPTAIN", "PILOT", "MECHANICAN"],
        "groundCombatValue": 2,
        "health": 4
      },
      {
        "name": "Chewbacca",
        "roles": ["CO_PILOT", "MECHANICAN", "GUNNER"],
        "groundCombatValue": 3,
        "health": 5
      }
    ],
    "date": {"$date": "2020-05-18T14:10:30.000Z"},
    "factionReputation": [
      {
        "faction": "HUTTS",
        "change": 5
      },
      {
        "faction": "SYNDIKATE",
        "change": -10
      },
      {
        "faction": "IMPERIUM",
        "change": 0
      },
      {
        "faction": "REBELLS",
        "change": 0
      }
    ],
    "log": {
      "type": "NAVIGATION",
      "route": {
        "type": "INTERSTELLAR",
        "begin": {
          "type": "NAV_POINT",
          "name": "NAV_3",
          "sector": "HUTT_SECTOR"
        },
        "end": {
          "type": "PLANET",
          "name": "Tatooine",
          "sector": "HUTT_SECTOR",
          "faction": "HUTTS"
        }
      }
    }
  },
  {
    "_id": new ObjectId("63e2566b52f19c30ea4c6cd6"),
    "aircraft": {
      "brand": "G0 Auslegefrachter",
      "hyperDrive": 6,
      "shipCombatValue": 2,
      "hullPoints": 2
    },
    "crew": [
      {
        "name": "Han Solo",
        "roles": ["CAPTAIN", "PILOT", "MECHANICAN"],
        "groundCombatValue": 2,
        "health": 4
      },
      {
        "name": "Chewbacca",
        "roles": ["CO_PILOT", "MECHANICAN", "GUNNER"],
        "groundCombatValue": 3,
        "health": 5
      }
    ],
    "date": {"$date": "2020-05-18T14:10:30.000Z"},
    "factionReputation": [
      {
        "faction": "HUTTS",
        "change": 50
      },
      {
        "faction": "SYNDIKATE",
        "change": -10
      },
      {
        "faction": "IMPERIUM",
        "change": 0
      },
      {
        "faction": "REBELLS",
        "change": 0
      }
    ],
    "log": {
      "type": "ACQUIRE_FRIGHT",
      "fright": {
        "name": "Blasterteil",
        "cost": 400,
        "sellingPrice": 1500,
        "target": {
          "name": "Nal Hutta",
          "sector": "HUTT_SECTOR",
          "faction": "HUTTS"
        }
      }
    }
  },
  {
    "_id": new ObjectId("63e2573c52f19c30ea4c6cd8"),
    "aircraft": {
      "brand": "G0 Auslegefrachter",
      "hyperDrive": 6,
      "shipCombatValue": 2,
      "hullPoints": 2
    },
    "crew": [
      {
        "name": "Han Solo",
        "roles": ["CAPTAIN", "PILOT", "MECHANICAN"],
        "groundCombatValue": 2,
        "health": 4
      },
      {
        "name": "Chewbacca",
        "roles": ["CO_PILOT", "MECHANICAN", "GUNNER"],
        "groundCombatValue": 3,
        "health": 5
      }
    ],
    "date": {"$date": "2020-05-18T14:10:30.000Z"},
    "factionReputation": [
      {
        "faction": "HUTTS",
        "change": 0
      },
      {
        "faction": "SYNDIKATE",
        "change": 0
      },
      {
        "faction": "IMPERIUM",
        "change": 0
      },
      {
        "faction": "REBELLS",
        "change": 0
      }
    ],
    "log": {
      "type": "NAVIGATION",
      "route": {
        "type": "INTERSTELLAR",
        "begin": {
          "type": "NAV_POINT",
          "name": "NAV_1",
          "sector": "HUTT_SECTOR"
        },
        "end": {
          "type": "NAV_POINT",
          "name": "NAV_2",
          "sector": "HUTT_SECTOR"
        }
      }
    }
  },
  {
    "_id": new ObjectId("63e2573c52f19c30ea4c6cd9"),
    "aircraft": {
      "brand": "G0 Auslegefrachter",
      "hyperDrive": 6,
      "shipCombatValue": 2,
      "hullPoints": 2
    },
    "crew": [
      {
        "name": "Han Solo",
        "roles": ["CAPTAIN", "PILOT", "MECHANICAN"],
        "groundCombatValue": 2,
        "health": 4
      },
      {
        "name": "Chewbacca",
        "roles": ["CO_PILOT", "MECHANICAN", "GUNNER"],
        "groundCombatValue": 3,
        "health": 5
      }
    ],
    "date": {"$date": "2020-05-18T14:10:30.000Z"},
    "factionReputation": [
      {
        "faction": "HUTTS",
        "change": 5
      },
      {
        "faction": "SYNDIKATE",
        "change": -10
      },
      {
        "faction": "IMPERIUM",
        "change": 0
      },
      {
        "faction": "REBELLS",
        "change": 0
      }
    ],
    "log": {
      "type": "NAVIGATION",
      "route": {
        "type": "INTERSTELLAR",
        "begin": {
          "type": "NAV_POINT",
          "name": "NAV_2",
          "sector": "HUTT_SECTOR"
        },
        "end": {
          "type": "NAV_POINT",
          "name": "NAV_3",
          "sector": "HUTT_SECTOR"
        }
      }
    }
  },
  {
    "_id": new ObjectId("63e2573c52f19c30ea4c6cda"),
    "aircraft": {
      "brand": "G0 Auslegefrachter",
      "hyperDrive": 6,
      "shipCombatValue": 2,
      "hullPoints": 2
    },
    "crew": [
      {
        "name": "Han Solo",
        "roles": ["CAPTAIN", "PILOT", "MECHANICAN"],
        "groundCombatValue": 2,
        "health": 4
      },
      {
        "name": "Chewbacca",
        "roles": ["CO_PILOT", "MECHANICAN", "GUNNER"],
        "groundCombatValue": 3,
        "health": 5
      }
    ],
    "date": {"$date": "2020-05-18T14:10:30.000Z"},
    "factionReputation": [
      {
        "faction": "HUTTS",
        "change": 5
      },
      {
        "faction": "SYNDIKATE",
        "change": -10
      },
      {
        "faction": "IMPERIUM",
        "change": 0
      },
      {
        "faction": "REBELLS",
        "change": 0
      }
    ],
    "log": {
      "type": "NAVIGATION",
      "route": {
        "type": "INTERSTELLAR",
        "begin": {
          "type": "NAV_POINT",
          "name": "NAV_3",
          "sector": "HUTT_SECTOR"
        },
        "end": {
          "type": "PLANET",
          "name": "Tatooine",
          "sector": "HUTT_SECTOR",
          "faction": "HUTTS"
        }
      }
    }
  },
  {
    "_id": new ObjectId("63e2573c52f19c30ea4c6cdb"),
    "aircraft": {
      "brand": "G0 Auslegefrachter",
      "hyperDrive": 6,
      "shipCombatValue": 2,
      "hullPoints": 2
    },
    "crew": [
      {
        "name": "Han Solo",
        "roles": ["CAPTAIN", "PILOT", "MECHANICAN"],
        "groundCombatValue": 2,
        "health": 4
      },
      {
        "name": "Chewbacca",
        "roles": ["CO_PILOT", "MECHANICAN", "GUNNER"],
        "groundCombatValue": 3,
        "health": 5
      }
    ],
    "date": {"$date": "2020-05-18T14:10:30.000Z"},
    "factionReputation": [
      {
        "faction": "HUTTS",
        "change": 20
      },
      {
        "faction": "SYNDIKATE",
        "change": -10
      },
      {
        "faction": "IMPERIUM",
        "change": 0
      },
      {
        "faction": "REBELLS",
        "change": 0
      }
    ],
    "log": {
      "type": "ACQUIRE_FRIGHT",
      "fright": {
        "name": "Blasterteil",
        "cost": 400,
        "sellingPrice": 1500,
        "target": {
          "name": "Nal Hutta",
          "sector": "HUTT_SECTOR",
          "faction": "HUTTS"
        }
      }
    }
  },
  {
    "_id": new ObjectId("63e2573c52f19c30ea4c6cdc"),
    "aircraft": {
      "brand": "G0 Auslegefrachter",
      "hyperDrive": 6,
      "shipCombatValue": 2,
      "hullPoints": 2
    },
    "crew": [
      {
        "name": "Han Solo",
        "roles": ["CAPTAIN", "PILOT", "MECHANICAN"],
        "groundCombatValue": 2,
        "health": 4
      },
      {
        "name": "Chewbacca",
        "roles": ["CO_PILOT", "MECHANICAN", "GUNNER"],
        "groundCombatValue": 3,
        "health": 5
      }
    ],
    "date": {"$date": "2020-05-18T14:10:30.000Z"},
    "factionReputation": [
      {
        "faction": "HUTTS",
        "change": 5
      },
      {
        "faction": "SYNDIKATE",
        "change": -10
      },
      {
        "faction": "IMPERIUM",
        "change": 0
      },
      {
        "faction": "REBELLS",
        "change": 0
      }
    ],
    "log": {
      "type": "NAVIGATION",
      "route": {
        "type": "INTERSTELLAR",
        "end": {
          "type": "NAV_POINT",
          "name": "NAV_3",
          "sector": "HUTT_SECTOR"
        },
        "begin": {
          "type": "PLANET",
          "name": "Tatooine",
          "sector": "HUTT_SECTOR",
          "faction": "HUTTS"
        }
      }
    }
  },
  {
    "_id": new ObjectId("63e2573c52f19c30ea4c6cdd"),
    "aircraft": {
      "brand": "G0 Auslegefrachter",
      "hyperDrive": 6,
      "shipCombatValue": 2,
      "hullPoints": 2
    },
    "crew": [
      {
        "name": "Han Solo",
        "roles": ["CAPTAIN", "PILOT", "MECHANICAN"],
        "groundCombatValue": 2,
        "health": 4
      },
      {
        "name": "Chewbacca",
        "roles": ["CO_PILOT", "MECHANICAN", "GUNNER"],
        "groundCombatValue": 3,
        "health": 5
      }
    ],
    "date": {"$date": "2020-05-18T14:10:30.000Z"},
    "factionReputation": [
      {
        "faction": "HUTTS",
        "change": 5
      },
      {
        "faction": "SYNDIKATE",
        "change": -10
      },
      {
        "faction": "IMPERIUM",
        "change": 0
      },
      {
        "faction": "REBELLS",
        "change": 0
      }
    ],
    "log": {
      "type": "NAVIGATION",
      "route": {
        "type": "INTERSTELLAR",
        "begin": {
          "type": "NAV_POINT",
          "name": "NAV_3",
          "sector": "HUTT_SECTOR"
        },
        "end": {
          "type": "PLANET",
          "name": "Nal Hutta",
          "sector": "HUTT_SECTOR",
          "faction": "HUTTS"
        }
      }
    }
  },
  {
    "_id": new ObjectId("63e2573c52f19c30ea4c6cde"),
    "aircraft": {
      "brand": "G0 Auslegefrachter",
      "hyperDrive": 6,
      "shipCombatValue": 2,
      "hullPoints": 2
    },
    "crew": [
      {
        "name": "Han Solo",
        "roles": ["CAPTAIN", "PILOT", "MECHANICAN"],
        "groundCombatValue": 2,
        "health": 4
      },
      {
        "name": "Chewbacca",
        "roles": ["CO_PILOT", "MECHANICAN", "GUNNER"],
        "groundCombatValue": 3,
        "health": 5
      }
    ],
    "date": {"$date": "2020-05-18T14:10:30.000Z"},
    "factionReputation": [
      {
        "faction": "HUTTS",
        "change": 100
      },
      {
        "faction": "SYNDIKATE",
        "change": -50
      },
      {
        "faction": "IMPERIUM",
        "change": 0
      },
      {
        "faction": "REBELLS",
        "change": 0
      }
    ],
    "log": {
      "type": "DELIVER_FRIGHT",
      "fright": {
        "name": "Blasterteil",
        "cost": 400,
        "sellingPrice": 1500,
        "target": {
          "name": "Nal Hutta",
          "sector": "HUTT_SECTOR",
          "faction": "HUTTS"
        }
      }
    }
  }
]);

db.outerrim.find();

