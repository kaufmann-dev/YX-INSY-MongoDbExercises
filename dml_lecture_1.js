// -- ----------------------------------------------------------------------- --
// -- 1.Beispiel) DML - updateMany
// -- ----------------------------------------------------------------------- --
// Syntax: db.getCollection("<collection>")
//           .updateMany(
//                <query  object> ,
//                <update object>
//            );

// Syntax: <update object> -> { <$updateOperator> : { <field> : <value> } }
//
//         $updateOperator ->  $set  || $unset    || $rename || $inc  || $mul     || $max ||
//                             $push || $addToSet || $pop    || $pull || $pullAll                                      

db.getCollection("projects")
.updateMany(
    {projectType : "REQUEST_FUNDING_PROJECT"},
    { $set : { "marked" : true }}
);

// -- ----------------------------------------------------------------------- --
// -- 2.Beispiel) DML - updateMany { $set, $unset, $rename }
// -- ----------------------------------------------------------------------- --
// a) Fügen Sie zu allen Subprojekten ein Feld subprojectbegin mit dem gegen-
//    wärtigen Datum ein.

db.getCollection("subprojects").find({});

db.getCollection("subprojects").updateMany(
   {}, { $unset : {"subprojectBegin" : 1} }
);

db.getCollection("subprojects").updateMany(
    {},{ $set : { "subprojectbegin" : new Date() }}
);


// b) Für alle Subprojekte die am "Institut für Softwareentwicklung" umgesetzt
//    werden soll der Wert für appliedResearch auf 30 gesetzt werden.
//    

db.getCollection("subprojects").updateMany(
   { "facility.name" : "Institut für Softwareentwicklung"},
   { $set : { "appliedResearch" : 30 }}
);


// c) Finden Sie alle Subprojekte für die die Summe aus appliedResearch, focusResearch und
//    theoreticalResearch nicht 100 ergibt. Setzen Sie für diese Projekte appliedResearch
//    auf 100. Ändern Sie focusResearch und theoreticalResearch auf 0.
//    Fügen Sie zusätzlich ein Feld "marked" mit dem Wert true hinzu.

db.getCollection("subprojects").updateMany(
   {
      $where : function(){
         return this.appliedResearch + this.focusResearch + this.theoreticalResearch != 100;
      }  
   }, {
      $set : {
          appliedResearch : new NumberInt(100),
          focusResearch : new NumberInt(0),
          theoreticalResearch : new NumberInt(0),
          marked : true
      }    
   }
);


// d) Ändern Sie den Namen des Feldes "subprojectbegin" auf "subprojectBegin" für alle Subprojekte.

db.getCollection("subprojects").updateMany(
    {}, {$rename : {subprojectbegin : "subprojectBegin"}}
);


// e) Fügen Sie zu allen REQUEST_FUNDING_PROJECT und RESEARCH_FUNDING_PROJEKT Projekten ein Feld review hinzu.
//    Setzen Sie den Wert auf 2.

db.getCollection("projects").updateMany(
    { projectType : { $in : ["REQUEST_FUNDING_PROJECT", "RESEARCH_FUNDING_PROJECT"]} },
    { $set : { review : 2 } }
);


// -- ----------------------------------------------------------------------- --
// -- 3.Beispiel) DML - updateMany { $min, $max, $inc, $mul }
// -- ----------------------------------------------------------------------- --
// a) Erhöhen Sie den Wert von review für REQUEST_FUNDING_PROJECT Projekte um 2.

db.projects.updateMany(
   { projectType : "REQUEST_FUNDING_PROJECT" },
   { $inc : { review : 2 }}
);


// b) Setzen Sie den Wert für das "review" Feld für alle Projekte auf 3 falls er keinen
//    höheren Wert hat.

db.getCollection("projects").find({});

db.getCollection("projects").updateMany(
   {},
   { $max : { review : 3 }}
);


// c) Erhöhen Sie den Wert für des "theoreticalResearch" Attributes um 5. Berücksichtigen
//    Sie nur Subprojekte deren Wert für theoreticalResearch nicht höher ist als 90 bzw
//    der Wert für AppliedResearch nicht kleiner ist als 5.
//    Die Summe aus theoreticalResearch, focusResearch und appliedResearch muss nach der
//    Änderung wierde 100 ergeben. Adaptieren Sie den focusResearch bzw. appliedResearch
//    entsprechend.

db.getCollection("subprojects").updateMany(
   {
       theoreticalResearch : {$lte : 90 },
       appliedResearch : {$gte : 5}
   }, {
      $inc : {
          theoreticalResearch : 5,
          appliedResearch : -5  
      }  
   }
);


// d) Erhöhen Sie die Förderung für Subprojekte des "Institut für Angewandte Mathematik" um
//    30%.

db.getCollection("subprojects").updateMany(
   { "facility.name" : "Institut für Angewandte Mathematik"},
   {
       $mul : { "funding.amount" : new NumberDecimal(1.3) }  
   }
);


// -- ----------------------------------------------------------------------- --
// -- 4.Beispiel) DML - updateMany { $addToSet, $push, $pull, $pullAll, $pop }
// -- ----------------------------------------------------------------------- --
// a) Löschen Sie das Feld review aus allen Projekten und fügen Sie ein Feld
//    reviews ein. Bei reviews handelt es sich um ein Array.

db.getCollection("projects").updateMany(
   {},
   {
      $unset : { review : 1 },
      $set : {reviews : []}
   }
);


// b) Fügen Sie den Wert 3 zu den Reviews der RESEARCH_FUNDING_PROJECT Projekte
//    hinzu.

db.getCollection("projects").find({});

db.getCollection("projects").updateMany(
   {projectType : "RESEARCH_FUNDING_PROJECT"},
   {
      $addToSet : { reviews : 3}
   }
);


db.getCollection("projects").updateMany(
   {projectType : "RESEARCH_FUNDING_PROJECT"},
   {
      $push : { reviews : 3}
   }
);


// c) Fügen Sie für alle Projekte die Werte 5 und 1 in das reviews Array ein.

db.getCollection("projects").updateMany(
   {},
   {
      $addToSet : {
          reviews : { $each : [ 5, 1 ]}  
      }
   }
);


// d) Entfernen Sie den Wert 3 aus den "reviews" Arrays der Projekte.

db.getCollection("projects").updateMany(
   {},
   {
      $pull : { reviews : 3 }  
   }
);


// e) Entfernen Sie den Wert 5 und 1 aus den "reviews" Arrays der Projekte.

db.getCollection("projects").updateMany(
   {},
   {
       $pull : { reviews : { $in : [5, 1]}}  
   }
);