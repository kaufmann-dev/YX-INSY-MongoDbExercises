// use('_');
db.createCollection("project");
var project = {
    titel: "Motorensimulation",
    description: "bla bla bla ...",
    reviews: new NumberInt(3),
    funding: 50000.50,
    duration: new NumberLong(650032),
    isSmallProject: true,
    projectBegin: new Date('Jan 2, 2020'),
    projectEnd: new Date('Dec 1, 2020')
};
db.getCollection("project").insertOne(project);
db.getCollection("project").find({});