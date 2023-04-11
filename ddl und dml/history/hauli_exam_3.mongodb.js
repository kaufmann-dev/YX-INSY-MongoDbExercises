// use('_');;

 // -- ------------------------------------------------------------------------- --
// -- 1.3) Beispiel - DML (1 Punkt)
// -- ------------------------------------------------------------------------- --
// Fügen Sie die folgenden Felder zu allen Persönlichkeiten hinzu:
// 
// revision : 0, published : false, review : []

db.personalities.updateMany({
}, {
    $set : {
        revision : 0,
        published : false,
        review : []
    }
});

// -- ------------------------------------------------------------------------- --
// -- 2) Beispiel - DML (1 Punkt)
// -- ------------------------------------------------------------------------- --
// Erhöhen Sie den Korruptionswert (corruption) der Generale (keyword) aus Asien 
// um 1. Erhöhen Sie die Revision um 1 und setzen sie published auf true.

db.personalities.updateMany({
    "birth.continent" : "ASIA",
    keywords : "General"
}, {
    $inc : {
        corruption : 1,
        revision : 1
    },
    $set : {
        published : true
    }
});

// -- ------------------------------------------------------------------------- --
// -- 3) Beispiel - DML (1 Punkt)
// -- ------------------------------------------------------------------------- --
// Alle Persönlichkeiten sollen das Keyword "Historical Person" erhalten. Das 
// Keyword soll nur hinzugefügt werden wenn es noch nicht als Schlüsselwort ent-
// halten ist. Erhöhen Sie die Revision für geänderte Dokumente um 1.

// Fügen Sie den Reviews die folgenden Werte hinzu: 5, 3, 4, 2, 1, 5

db.personalities.updateMany({
    
}, {
    $addToSet : {
        keywords : "Historical Person"
    },
    $push : {
        reviews : {
            $each : [5, 3, 4, 2, 1, 5]
        }
    },
    $inc : {
        revision : 1
    }
});

// -- ------------------------------------------------------------------------- --
// -- 4) Beispiel - DML (2 Punkt)
// -- ------------------------------------------------------------------------- --
// Entfernen Sie für alle Philosophen 1 und 3 aus den Reviews. Senken Sie den 
// Korruptionwert um 1 und erhöhen Sie die Revision um 1.

db.personalities.updateMany({
    keywords : "Philosoph"
},{
    $inc : {
        corruption : -1,
        revision : 1
    },
    $pull : {
        "reviews":{$in:[1,3]}
    }
});