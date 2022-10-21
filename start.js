var connect = require("connect")
var serveStatic = require("serve-static")

var host = "127.0.0.1"
var port = 8080

connect().use(serveStatic(__dirname)).listen(port, host)

console.log("Running on http://"+host+":"+port+"/")