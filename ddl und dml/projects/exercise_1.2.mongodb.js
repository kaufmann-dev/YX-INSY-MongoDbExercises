// use('_');
db.createCollection("subproject");

var subproject = {
        facility: {
        name: "Institut für Computergrafik",
        code: "143.221.42"
        },
        title: "Finite Elemente",
        appliedResearch: new NumberInt(20),
        theoreticalResearch: new NumberInt(80)
};
db.getCollection("subproject").insertOne(subproject);
db.getCollection("subproject").find({});