db.employees.find({name:{$regex:"a"}})

db.employees.find({name:{$regex:"cathy"}})

db.employees.find({name:{$regex:"cathy",$options:"i"}})

db.employees.find({name:{$regex:"^c",$options:"i"}})

db.employees.find({name:{$regex:"y$",$options:"i"}})