db.lw1.aggregate([
    {
        $unwind : "$regionTree.regions"
    },{
        $count : "regionTree"
    }
])