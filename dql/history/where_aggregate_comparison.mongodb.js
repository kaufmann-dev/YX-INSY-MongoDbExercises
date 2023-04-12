/* Get all the documents from the collection with the following conditions:
  - The document has the "titles" attribute.
  - The document has at least 3 titles.
  - The document's full name includes "philosoph".
  - The document's birth location is not "Europe" or "America". */

db.personalities.find({
  $where : function() {
    return(
      typeof this.titles !== 'undefined' &&
      this.titles.length >= 3 &&
      this.fullName.includes("") &&
      this.birth.continent != "EUROPE" &&
      this.birth.continent != "AMERICA"
    )
  }
});

db.personalities.aggregate([
  {
    $match: {
      titles : {
        $exists : true
      },
      fullName : {
        $regex: "."
      },
      $expr: {
        $and : [
          {
            $gte: [{ $size: "$titles" }, 3]
          },
          {
            $not : {
              $in : ["$birth.continent", ["EUROPE", "AMERICA"]]
            }
          }
        ]
        
      }
    }
  }
]);