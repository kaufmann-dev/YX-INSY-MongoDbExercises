use('c_history');
db.events.find({});

db.events.updateMany(
    {
        eventType: "BATTLE",
        "belligerents.composition": {
        $elemMatch: {
            type: {
            $in: [
                "SHIP",
                "WARSHIP",
                "AIRCRAFT_CARRIER",
                "HEAVY_CRUISER",
                "DESTROYER",
                "SUBMARINE",
            ],
            },
        },
        },
    },
    {
        $set: {
        keywords: {
            $addToSet: "NAVAL_BATTLE",
        },
        revision: {
            $inc: 1,
        },
        },
    }
);  

db.events.find({
    $where : function() {
        let types = ["SHIP", "WARSHIP", "AIRCRAFT_CARRIER", "HEAVY_CRUISER", "DESTROYER", "SUBMARINE"];
        
        for(let belligerent of this.belligerents){
            for(let troop of belligerent.composition){
                if(types.includes(troop.type)){
                    return true;
                }
            }
        }
        
        return false;
    }
});

db.events.find({
    events : {
        $exists : true
    },
    events : {
        $elemMatch : {
            title : {
                $in : ["Kind of Macedon", "King od Persia"]
            }
        }
    }
});

db.personalities.find({
    $where : function() {
        if(this.events === null) {
            return false;
        }
        let eventList = ["Kind of Macedon", "King od Persia"];
        
        for(let event of this.events){
            if(eventList.includes(event.title)) {
                return true;
            }
        }
        
        return false;
    }
});

db.personalities.updateMany(
{},
{
    $push : {
        reviews : {
            $each : [5, 4, 4, 5]
        }
    }
});

db.personalities.find({});

db.personalities.find({
    reviews : {
        $exists : true
    },
    $where : function() {
        let amount = this.reviews.reduce(function(agg, item){
            return agg + item;
        }, 0);
        
        return amount/this.reviews.length >= 4;
    }
});

db.personalities.updateMany({
    reviews : {
        $exists : true
    },
    $where : function() {
        let amount = this.reviews.reduce(function(agg, item){
            return agg + item;
        }, 0);
        
        return amount/this.review.length >= 4;
    }
}, {
    $addToSet : {
        keywords : {
            $each : ["famous","popular"]
        }
    },
    $inc : {
        revision : 1
    }
});