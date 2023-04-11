

db.events.find({});
db.events.find({}).count();

// -- -------------------------------------------------------------------------- --
// --  1.Beispiel) DML Befehle - (1.Punkt)
// -- -------------------------------------------------------------------------- --
// Fügen Sie folgende Felder zu allen (eventType) Schlacht (BATTLE)  Eintträgen
// hinzu.

// keywords : [ "BATTLE" ]
// marked : true
// revision: 1
//

db.events.updateMany({
    eventType : "BATTLE"
}, {
    $set : {
        keywords : ["BATTLE"],
        marked : true,
        revision : 1
    }
});

// -- -------------------------------------------------------------------------- --
// --  2.Beispiel) DML Befehle - (1.Punkt)
// -- -------------------------------------------------------------------------- --
// Erhöhen Sie für alle events die Revision um 1. Ist keine Revision vorhanden soll
// 1 eingetragen werden. Setzen Sie den Wert des Feldes "marked" auf false. Fügen
// Sie den Einträgen ebenfalls einen Wert reviews hinzu der als Array von Integern
// verwendet wird.

db.events.updateMany({
    
}, {
    $inc : {
        revision : 1
    },
    $set : {
        marked : false,
        reviews : []
    }
});

// -- --------------------------------------------------------------------------- --
// --  3.Beispiel) DML Befehle - (1.Punkte)
// -- --------------------------------------------------------------------------- --
// Fügen Sie zu allen Schlachten die von Alexander dem Großen gewonnen wurden das
// Keyword "Alexander the Great" hinzu.
// Erhöhen sie die Revision um 1. Fügen Sie ebenfalls ein Review mit dem Wert 4
// ein. Beachten Sie dass ein Review immer eingetragen werden muss unabhängig davon
// ob ein anderes Review denselben Wert hat.

db.getCollection("events").updateMany({
    victor : "Alexander the Great"
}, {
    $inc : {
        revision : 1
    },
    $push : {
        reviews : {
            $each : [4, 3]
        }
    },
    $addToSet : {
        keywords : "Alexander the Great"
    }
});

// -- --------------------------------------------------------------------------- --
// --  4.Beispiel) DML Befehle - (2.Punkte)
// -- --------------------------------------------------------------------------- --
// Fügen Sie zu allen Schlachten an denen mehr als 50000 Mann beteiligt waren das
// Schlüsselwort MASS_BATTLE hinzu, falls es noch nicht vorhanden ist.
// Für entsprechende Einträge sollen ebenfalls die folgenden 4 Review Werte hinzugefügt
// werden: 3, 5, 1, 1.
 
// Erhöhen Sie die revision um 1.

db.getCollection("events").updateMany({
    $where : function(){
        let amount = 0;
        
        for(let belligerent of this.belligerents){
            for(let troop of belligerent.composition){
                amount += troop.amount;
            }
        }
        
        return amount >= 50000;
    }
}, {
    $addToSet : {
        keywords : "MASS_BATTLE",
    },
    $push : {
        reviews : {
            $each : [3, 5, 1, 1]
        }
    },
    $inc : {
        revision : 1    
    }
});

// Fügen Sie die folgenden Felder zu allen Persönlichkeiten hinzu:
// revision: 0, published:false, review:[]

db.personalities.updateMany({

}, {
    $set : {
        revision : 0,
        published : false,
        review : []
    }
});

// Erhöhen Sie den Korruptionswert (corruption) der Generale (keyword) aus Asien um 1.
// Erhöhen Sie die Revision um 1 und setzen sie published auf true.

db.personalities.find({});

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

// Alle Persönlichkeiten sollen das Keyword "historical Person" erhalten.
// Das Keyword soll nur hinzugefügt werden wenn es noch nicht als Schlüsselwort enthalten ist.
// Erhöhen Sie die Revision für geänderte Dokumente um 1.

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

// Entfernen Sie für alle Philosophen 1 und 3 aus den Reviews.
// Senken Sie den Korruptionswert auf 1 und erhöhen Sie die Revision um 1.

db.personalities.find({});

db.personalities.updateMany({
    keywords : "Philosoph"
},{
    $inc : {
        corruption : -1,
        revision : 1
    },
    $unset : {
        reviews : {
            $each : [1, 3]
        }
    }
});