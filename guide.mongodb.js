// USE SPECIFIC DATABASE
use('c_insy');

// FIND SYNTAX
db.getCollection("events").find({});

// FIND COUNT
db.getCollection("events").find({}).count();

// FIND WITH QUERY
db.getCollection("events").find({
    "location" : "Iraq"
});

// $SET
db.getCollection("events").updateMany({
    "location" : "Iraq"
}, {
    $set : {
        "newTestP38" : "contentP83"
    }
});

// $UNSET
db.getCollection("events").updateMany({
    "location" : "Iraq"
}, {
    $unset : {
        "newTestP38" : "contentP83"
    }
});