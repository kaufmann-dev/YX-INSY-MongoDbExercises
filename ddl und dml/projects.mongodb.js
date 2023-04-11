
// -- ---------------------------------------------------------------
//     1.Beispiel: BSON
// -- ---------------------------------------------------------------
// Schreiben Sie das c# Objekt als BSON Objekt und tragen Sie es in
// die Datenbank ein.

/*
public class Project {
   
    private string _title;
   
    private string _description;
   
    private int _reviews;
   
    private float _funding;
   
    private long _duration;
   
    priavte DateTime _projectStart;
   
    private DateTime _projectEnd;
   
    private boolean _isSmallProject;
   
    public string Title {
        get => _title;
        set => _title = value;  
    }
   
    public string Description {
        get => _description;
        set => _description = value;  
    }
   
    public int Reviews {
        get => _reviews;
        set => _reviews = value;
    }
   
    public float Funding {
        get => _funding;
        set => _funding = value;  
    }
   
    public long Duration {
        get => _duration;
        set => _durartion = value;  
    }
   
    public boolean IsSmallProject {
        get => _isSmallProject;
        set => _isSmallProject = value;
    }
   
    public DateTime ProjectBegin {
        get => _projectBegin;
        set => _projectBegin = value;  
    }
   
    public DateTime ProjectEnd {
       get => _projectEnd;
       set => _projectEnd = value;  
    }
   
}

Project project = new Project();

project.Titel = "Motorensimulation";
project.Description = "bla bla bla ...";
project.Reviews = 3;
project.Funding = 50000.50F;
project.Duration = 650032L;
project.IsSmallProject = true;
project.ProjectBegin = new DateTime(2020, 1, 2);
project.ProjectEnd = new DateTime(2020, 12, 1);

*/
db.getCollection("projects").drop();
db.createCollection("projects");

var project = {
    // Vervollständigen Sie das BSON Objekt
    title : "Motorensimulation",
    description : "bla bla bla ...",    
    reviews  : new NumberInt(3),
    funding  : new NumberDecimal(50000.52),
    // funding: 50000.50,
    duration : new NumberLong(650032),
    projectBegin : new Date('Jan 2, 2020'),
    projectEnd   : new Date('Dec 1, 2020'),
    isSmallProject : true
};

db.getCollection("projects").insertOne(project);

// Methode 2
db.createCollection("project", {
    titel: "Motorensimulation",
    description: "bla bla bla ...",
    reviews: new NumberInt(3),
    funding: 50000.50,
    duration: new NumberLong(650032),
    isSmallProject: true,
    projectBegin: new Date('Jan 2, 2020'),
    projectEnd: new Date('Dec 1, 2020')
});

// Find
db.getCollection("projects").find({});

// -- ---------------------------------------------------------------
//     2.Beispiel: BSON
// -- ---------------------------------------------------------------
// Schreiben Sie das c# Objekt als BSON Objekt und tragen Sie es in
// die Datenbank ein.

/*
public class Facility {
     
   private string _name;
   
   private string _code;
   
   public string Name {
       get => _name;
       set => _name = value;  
   }
   
   public string Code {
       get => _code;
       set => _code = value;
   }      
}


public class Subproject{

   private Facility _facility;
   
   private string _title;
   
   private int _appliedResearch;
   
   private int _theoreticalResearch;
   
   public Facility Facility {
       get => _facility;
       set => _facility = value;  
   }
   
   public string Title {
       get => _title;
       set => _title = value;
   }
   
   public int AppliedResearch {
       get => _appliedResearch;
       set => _appliedResearch = value;
   }
   
   public int TheoreticalResearch {
       get => _theoreticalResearch;
       set => _theoreticalResearch = value;
   }

}

Facility facility = new Facility();

facility.Name = "Institut für Computergrafik";
facility.Code = "143.221.42";


Subproject subproject = new Subproject();

subproject.Facility = facility;
subproject.Title = "Finite Elemente"
subproject.AppliedResearch = 20;
subproject.TheoreticalResearch = 80;

*/

db.getCollection("subprojects").drop();
db.createCollection("subprojects");

var subproject = {
    // Vervollständigen Sie das BSON Objekt
    title : "Finite Elemente",
    appliedResearch : new NumberInt(20),
    theoreticalResearch : new NumberInt(80),
    facility : {
        name : "Institut für Computergrafik",
        code : "143.221.43"
    }
};

// Methode 2
db.createCollection("subproject",{
    facility: {
        name: "Institut für Computergrafik",
        code: "143.221.42"
    },
    title: "Finite Elemente",
    appliedResearch: new NumberInt(20),
    theoreticalResearch: new NumberInt(80) 
});

db.getCollection("subprojects").insertOne(subproject);
db.getCollection("subprojects").find({});

// -- ---------------------------------------------------------------
//     3.Beispiel: BSON
// -- ---------------------------------------------------------------
// Schreiben Sie das c# Objekt als BSON Objekt und tragen Sie es in
// die Datenbank ein.

/*
public class Ingredient {
   
    private string _name;

    public Ingredient(string name){
        this._name = name;  
    }
   
    public string Name {
        get => _name;
        set => _name = value;  
    }
       
}

public class Dish {

    private string _name;
   
    public string[] Reviews = new string[10];
   
    public int[] Points = new int[10];

    public Ingredient[] Ingredients = new Ingredient[10];

    public string Name{
        get => _name;
        set => _name = value;  
    }

}


Dish d = new Dish();

d.Name = "Wiener Schnitzel";

d.Reviews[0] = "Toll";
d.Reviews[1] = "Wunderbar";

d.Points[0] = 3;
d.Points[1] = 5;
d.Points[2] = 4;

d.Ingredients[0] = new Ingredient("Putenbrust");
d.Ingredients[1] = new Ingredient("Ei");
d.Ingredients[2] = new Ingredient("Semmelbrösel");

*/

db.getCollection("dishes").drop();
db.createCollection("dishes");

var dish = {
    // Vervollständigen Sie das BSON Objekt
    name : "Wiener Schnitzel",
    reviews : [
       "Toll", "Wunderbar"
    ],
    points : [
       new NumberInt(3), new NumberInt(5), new NumberInt(4)
    ],
    ingredients : [
        { name : "Putenbrust" },
        { name : "Ei" },
        { name : "Semmelbrösel" }
    ]
};

// Methode 2
function Ingredient(name) {
    this.name = name;
}

db.createCollection("dishes", {
    name : "Wiener Schnitzel",
    reviews : [
        "Toll", "Wunderbar"
    ],
    points : [
        3, 5, 4
    ],
    Ingredients : [
        new Ingredient("Putenbrust"),
        new Ingredient("Ei"),
        new Ingredient("Semmelbrösel")
    ]
});

// Methode 3
d.Name = "Wiener Schnitzel";

d.Reviews[0] = "Toll";
d.Reviews[1] = "Wunderbar";

d.Points[0] = 3;
d.Points[1] = 5;
d.Points[2] = 4;

d.Ingredients[0] = new Ingredient("Putenbrust");
d.Ingredients[1] = new Ingredient("Ei");
d.Ingredients[2] = new Ingredient("Semmelbrösel");

db.getCollection("dishes").insertOne(dish);
db.getCollection("dishes").find({});

// newTestCollection
db.createCollection("newTestCollection", {
    validationLevel : "strict",
    validationAction : "error",
    validator : {
        $jsonSchema : {
            bsonType : "object",
            required : ["firstName", "lastName"],
            additionalProperties : true,
            properties : {
                firstName : {
                    bsonType : "string",
                    minLength: 3,
                    maxLength : 30
                },
                lastName : {
                    bsonType : "string",
                    minLength : 3,
                    maxLength : 30
                },
                nicknames : {
                    bsonType : "array",
                    items : {
                        bsonType : "string",
                        minLength : 3,
                        maxLength : 100
                    }
                },
                personalities : {
                    enum : ["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP"]
                },
                car : {
                    bsonType : "object",
                    required : ["manufactorer", "model", "year"],
                    additionalProperties : false,
                    properties : {
                        manufactorer : {
                            bsonType : "string",
                            minLength : 3,
                            maxLength : 100
                        },
                         model : {
                            bsonType : "string",
                            minLength : 3,
                            maxLength : 100
                        },
                         year : {
                            bsonType : "int",
                            minimum : 1900,
                            maximum : 2021
                        }
                    }
                }
            }
        }
    }
});

db.newTestCollection.count();

var bruh = {
    firstName : "David",
    lastName : "Kaufmann"
};

db.getCollection("newTestCollection").insertOne(bruh);

db.newTestCollection.find({});