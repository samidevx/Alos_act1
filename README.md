# TP1 Alos 

Q1 - Show the first 10 records of db.json
      
       GET  http://localhost:3000/data?_limit=10
     
Q2 - Function to see only data that starts with M

       req.end(function(res){
    if(res.error) throw new Error(res.error)
    console.log("=============== All records Start with M ===============")
    console.log(res.body.filter((data) => data.last_name.startsWith("M")))
    });
    
 Q3 - For disable the internal cache in the remote server or the origin server
