var connect = require("connect")
var serveStatic = require("serve-static")

var host = "0.0.0.0"
var port = 7003

connect().use(serveStatic(__dirname)).listen(port, host)

console.log("Running on http://"+host+":"+port+"/")
