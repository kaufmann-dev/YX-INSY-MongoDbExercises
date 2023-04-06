use('c_history');
db.personalities.find();
db.personalities.find({
  $where : function() {
    return(
      typeof this.titles !== 'undefined' &&
      this.titles.length >= 3 &&
      this.fullName.includes("philosoph") &&
      this.birth.location != "Europe" &&
      this.birth.location != "America"
    )
  }
});