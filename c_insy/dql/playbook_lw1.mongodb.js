/*
* STORY_SECTION
*/
db.lw1.aggregate([
    {
        $match: {
            sectionType : "STORY_SECTION"
        }
    },
    {
        $limit : 1
    }
]);

/*
* RULE_SECTION
* TITLE_PAGE, THE_STORY_SO_FAR, ABILITIES, ITEMS, REGIONS
*/

// TITLE_PAGE
db.lw1.aggregate([
    {
        $match: {
            sectionType : "RULE_SECTION",
            ruleType : "TITLE_PAGE"
        }
    },
    {
        $limit : 1
    }
]);

// THE_STORY_SO_FAR
db.lw1.aggregate([
    {
        $match: {
            sectionType : "RULE_SECTION",
            ruleType : "THE_STORY_SO_FAR"
        }
    },
    {
        $limit : 1
    }
]);

// ABILITIES
db.lw1.aggregate([
    {
        $match: {
            sectionType : "RULE_SECTION",
            ruleType : "ABILITIES"
        }
    },
    {
        $limit : 1
    },
    {
        $addFields: {
            abilities : {
                $slice : ["$abilities", 2]
            }
        }
    }
]);

// ITEMS
db.lw1.aggregate([
    {
        $match: {
            sectionType : "RULE_SECTION",
            ruleType : "ITEMS"
        }
    },
    {
        $limit : 1
    },
    {
        $addFields: {
            items : {
                $slice : ["$items", 2]
            }
        }
    }
]);

// REGIONS
db.lw1.aggregate([
    {
        $match: {
            sectionType : "RULE_SECTION",
            ruleType : "REGIONS"
        }
    },
    {
        $limit : 1
    },
    {
      $unwind: "$regionTree.regions"
    },
    {
        $unwind: "$regionTree.regions.regions"
    },
    {
        $unwind: "$regionTree.regions.regions.regions"
    },
    {
        $unwind: "$regionTree.regions.regions.regions.regions"
    },
    {
        $addFields : {
            "regionTree.regions.regions" : "..."
        }
    },
    {
        $addFields : {
            "regionTree.regions" : [
                {

                    "name" : "$regionTree.regions.name",
                    "regionType" : "$regionTree.regions.regionType",
                    "description" : "$regionTree.regions.description",
                    "regions" : "$regionTree.regions"
                }
            ]
        }
    }
]);