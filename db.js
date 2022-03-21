var unirest = require("unirest")

// All records in the data resource
var req = unirest("GET","http://localhost:3000/data");

//the first 10 records in the data resource
var req1 = unirest ("GET", "http://localhost:3000/data?_limit=10" )


// Question 3 : For disable the internal cache in the remote server or the origin server
req.headers({
"cache-control": "no-cache",
})

req1.headers({
    "cache-control": "no-cache",
    })

//Question 01: Display the first 10 records 
req1.end(function (res) {
    if (res.error) throw new Error(res,error)
    console.log("============= the first 10 records =================")
    console.log(res.body)
    
  })
 


//Display All records Start with  "M"
req.end(function(res){
    if(res.error) throw new Error(res.error)
    console.log("=============== All records Start with M ===============")
    console.log(res.body.filter((data) => data.last_name.startsWith("M")))
});
