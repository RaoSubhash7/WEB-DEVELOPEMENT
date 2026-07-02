// const http = require('http');

// const server = http.createServer((req, res)=>{
// POST method   ======================================
//     if(req.method ==="POST" && req.url === '/user'){
//         res.end('User add Successfully')
//     }else{
//         res.end ('Home page')
//     }


// })
// const PORT = (4000);
// server.listen(PORT, ()=>{
//     console.log(`Server is running on port http://localhost:${PORT}`);
// })
// PUT Method ========================================================
// const http = require('http')
// const server = http.createServer((req,res)=>{
//    if(req.method === 'PUT'){
//     res.end('This is the PUT method ')
//    }
// })
// const PORT = (4000);
// server.listen(PORT, ()=>{
//     console.log(`Server is running on port http://localhost:${PORT}`)
// })
//Delete =====================================================================
// const http = require('http')
// const server = http.createServer((req,res)=>{
//    if(req.method === 'DELETE'){
//     res.end('This is the DELETE method ')
//    }
// })
// const PORT = (4000);
// server.listen(PORT, ()=>{
//     console.log(`Server is running on port http://localhost:${PORT}`)
// })

const http = require('http')
const server = http.createServer((req,res)=>{
   if(req.method === 'GET' && req.url === '/user' ){
    res.end('This is the GET method ')
   }else if (req.method === 'POST' && req.url === '/user'){
     res.end('This is the POST method ')
   }else if (req.method === 'PATCH' && req.url === '/user'){
     res.end('This is the PATCH method ')
   }else if (req.method === 'PUT' && req.url === '/user'){
     res.end('This is the PUT method ')
   }else if (req.method === 'DELETE' && req.url === '/user'){
     res.end('This is the DELETE method ')
   }else {
    res.end('404 This page is not found')
   }
})
const PORT = (4000);
server.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})

