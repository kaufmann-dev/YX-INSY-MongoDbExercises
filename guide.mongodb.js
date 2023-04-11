// USE SPECIFIC DATABASE
use('test');

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

// copy collection into different database

// open mongo shell
// cd /home
// mongodump -d some_database -c some_collection
// mongorestore -d some_other_db -c some_or_other_collection dump some_collection.bson