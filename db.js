var unrest = require("unirest")
var req = unrest ("GET", "http://localhost:3000/data")
req.headers({
"cache-control": "no-cache",
})
req. end(function (res){ 
if (res.error) throw new Error(res.error)
console.log(res.body)})