db.personalities.find({
  $where : function() {
    return(
      this.tittles.length >= 3 &&
      this.fullName.contains("philosoph") &&
      this.birth.location != "Europe" &&
      this.birth.location != "America"
    )
  }
});