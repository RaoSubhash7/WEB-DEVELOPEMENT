const http = require('http')
const users = [
    {
     "id": 1,
      name : "Subhash kumar"
    },
    {
     "id": 2,
      name : "Mayank Gupta"
    }
]



const server = http.createServer((req,res)=>{
  res.setHeader("content-type" , "application/json")
//   ====================GET===========================//
  if (req.method === "GET" && req.url === '/users'){
    return res.end(JSON.stringify(users));
  }
   // ==================== GET USER BY ID ====================
  else if (req.method === "GET" && req.url.startsWith('/users/')){
   const id = req.url.split("/")[2];
   const user = users.find((user) => user.id == id);

   if(!user){
    res.writeHead(404);
    return res.end(JSON.stringify({
        message: "User Not Found"
    }));
   }

   return res.end(JSON.stringify(user));
  }

  //=================POST=====================//
  else if (req.method === "POST" && req.url === '/users'){
       let body = "";
       req.on("data",(chunk) =>{
        body +=chunk;
       });
       req.on("end",()=>{
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.writeHead(201);
        res.end(JSON.stringify({
            message : "User add successfully",
            users
        }))
       })
  }
  //=====================PUT======================
  //=====================PUT======================

else if (req.method === "PUT" && req.url.startsWith("/users/")) {

    const id = req.url.split("/")[2];

    // users.findIndex() 
    const index = users.findIndex((user) => user.id == id);

    // User find or not
    if (index === -1) {
        res.writeHead(404);

        return res.end(JSON.stringify({
            message: "User Not Found"
        }));
    }

    let body = "";

    req.on("data", (chunk) => {
        body += chunk;
    });

    req.on("end", () => {

        const updateUser = JSON.parse(body);

        // User update
        users[index] = updateUser;

        res.end(JSON.stringify({
            message: "User Updated Successfully",
            users
        }));

    });

}
// ======================PATCH=====================
else if (req.method === "PATCH" && req.url.startsWith("/users/")) {

    const id = req.url.split("/")[2];

    // users.findIndex() 
    const index = users.findIndex((user) => user.id == id);

    // User find or not
    if (index === -1) {
        res.writeHead(404);

        return res.end(JSON.stringify({
            message: "User Not Found"
        }));
    }

  let body = "";
  req.on("data",(chunk) => {
  body +=chunk;
  });
  req.on("end",()=>{
    const update = JSON.parse(body);
    users[index].name = update.name;
    res.end(JSON.stringify({
        message : "Uase Name Update successfilly",
        users

    }));
  })
  }
//   ======================DELETE=========================
else if (req.method === "DELETE" && req.url.startsWith("/users/")) {

    const id = req.url.split("/")[2];

    // users.findIndex() 
    const index = users.findIndex((user) => user.id == id);

    // User find or not
    if (index === -1) {
        res.writeHead(404);

        return res.end(JSON.stringify({
            message: "User Not Found"
        }));
    }
    users.splice(index, 1);
    res.end(JSON.stringify({
        message : "User Delete successfilly",
        users
    }));
}
// =============404=============
else{
    res.writeHead(404);
    res.end(JSON.stringify({
        message : "Page  Not Found"
    }));
}
})




const PORT = (4000)
server.listen(PORT, ()=>{
    console.log(`Server is runing To Dynamic port http://localhost:${PORT}`)
})