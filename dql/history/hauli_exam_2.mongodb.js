// use('_');;


// -- ------------------------------------------------------------------------- -- 
// -- 1) Beispiel - Abfragen (1 Punkt)
// -- ------------------------------------------------------------------------- --
// Finden Sie alle Persönlichkeiten, die vor Christus in Europa bzw. Asien
// geboren wurden.
//
// Geben Sie folgende Felder aus: name, description. Sortieren Sie das Ergebnis 
// nach dem Namen aufsteigend.

// use('_');;
db.personalities.find({});
db.personalities.find({
  "birth.cat" : {$in:["BC"]},
  "birth.continent" : {$in:["EUROPE", "ASIA"]}
}).sort({name : 1});



// -- ------------------------------------------------------------------------- --
// -- 2) Beispiel - Abfragen (1 Punkte)
// -- ------------------------------------------------------------------------- --
// Finden Sie alle Persönlichkeiten, die zwischen 500 BC und 500 AC geboren wurden.
// Geben Sie folgende Felder aus: name, birth
//
// Hinweis: Sie können die Zeitgrenzen für die Auswertung einrechnen.

// use('_');;
db.personalities.find({
  $or:[
    {$and: [
      {"birth.cat":{$eq:"AC"}},
      {"birth.year" :{$lt: 500}}
    ]},
    {$and: [
      {"birth.cat":{$eq:"BC"}},
      {"birth.year" :{$gt: 500}}
    ]}
  ]
}).sort({name : 1, birth:1});

// Hinweis: Es ist möglich logische Operatoren zu schachteln:
//          $nor : [
//             { $and : [ {...}, {...} ] }
//             { $or  : { {...}, {...} ] } 
//          ]
//
// -- ------------------------------------------------------------------------- --
// -- 3) Beispiel - Abfragen (1 Punkt)
// -- ------------------------------------------------------------------------- --
// Finden Sie alle Persönlichkeiten die weder in Amerika (AMERICA) noch in Afrika
// (AFRICA) geboren wurden. Die Person (keywords) muss General (General) sein.

// use('_');;
db.personalities.find({
  "birth.continent" : {
    $in : ["AMERICA", "AFRICA"]
  },
  "keywords" : "General"
});


// -- ------------------------------------------------------------------------- --
// -- 4) Beispiel - Abfragen (2 Punkte)
// -- ------------------------------------------------------------------------- --
// Finden Sie alle Persönlichkeiten aus Europa (EUROPE), die nicht älter als 40 Jahre 
// wurden.
//
// Hinweis: Sie können in JavaScript die Math.Abs Funktion zur Berechnung des Betrags 
// verwenden.
//
// Hinweis: Prüfen Sie ob für eine  ein Sterbedatum überhaupt existiert. Sie können das 
//          mit dem $exists Operator machen.
//
//          z.B.: db.<collection>.find({ <field> : { $exists : true }}

// use('_');;
db.personalities.find({
  "birth.continent" : "EUROPE",
  "death" : {
      $exists : true
  },
  $where : function(){
      let age = 0;
      
      if(this.birth.cat == this.death.cat) {
          age = Math.abs(this.birth.year - this.death.year);
      } else {
          age = this.birth.year + this.death.year;
      }
      
      return age <= 40;
  }
});