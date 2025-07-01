use admin
db.createUser({
  user: "admin",
  pwd: "admin",
  roles: [ { role: "root", db: "admin" } ] 
})
add following settings in mongod.conf available in program files / mongodb
security:
  authorization: enabled
go to services and restart mongodb server
