use("insy");
db.events.find({});

db.createCollection("gogo");

db.source_collection.find().forEach(
    function(x){
        db.collection_copy.insert(x)
    }
);

mongodump -d some_database -c some_collection
mongorestore -d some_other_db -c some_or_other_collection dump/some_collection.bson

use("insy");
db.projects.find({});
db.projects.find({}).count();