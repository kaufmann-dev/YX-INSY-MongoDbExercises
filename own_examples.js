// PRINT NEW LINE
print("\n--- -- - -- ---\n");

// USE SPECIFIC DATABASE
use(insy);
use insy;

// FIND SYNTAX
db.getCollection("events").find({});
db.getCollection("events").find({}).count();

//FIND EXAMPLE
db.getCollection("events").find({
    $where : function() {
        return this.location == "Iraq";
    }
});
db.getCollection("events").find({
    $where : function() {
        return this.location == "Iraq";
    }
}).count();


// $SET
db.getCollection("events").updateMany({
    $where : function(){
        return this.location == "Iraq";
    }
}, {
    $set : { "newTestP38" : "contentP83" }
});

// $UNSET
db.getCollection("events").updateMany({
    $where : function(){
        return this.location == "Iraq";
    }
}, {
    $unset : { "newTestP38" : "contentP83" }
});