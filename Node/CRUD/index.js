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
  else if (req.method === "PUT" && req.url === '/users'){
    let body = "";
    req.on("data", (chunk)=>{
       body +=chunk;
    });
    req.on("end", ()=>{
        const updateUser = JSON.parse(body);
        users [0] = updateUser;
    res.end(JSON.stringify({
        message : "User Update successfilly",
        users
    }));
    });
  }
// ======================PATCH=====================
  else if(req.method === "PATCH" && req.url === '/users'){
  let body = "";
  req.on("data",(chunk) => {
  body +=chunk;
  });
  req.on("end",()=>{
    const update = JSON.parse(body);
    users[0].name = update.name;
    res.end(JSON.stringify({
        message : "Uase Name Update successfilly",
        users

    }));
  })
  }
//   ======================DELETE=========================
else if (req.method === "DELETE" && req.url === '/users'){
    users.pop();
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
    console.log(`Server is runing To CRUD port http://localhost:${PORT}`)
})