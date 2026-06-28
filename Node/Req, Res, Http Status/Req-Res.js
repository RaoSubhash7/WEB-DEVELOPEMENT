

// // import http protocol
// const http = require('http');


// //Creating a server
// const server = http.createServer((req, res)=>{
//     console.log(req.url ,req.method ,req.headers);

//     //Exit the loop
// //    process.exit()
// })

// //Create a PORT
// const PORT = 5000;


// //Server Listing
// server.listen(PORT, ()=>{
//    console.log(`Server is lineup and running or port http://localhost:${PORT}`)
// });



//import http
const http = require('http');


//Create a server
const server = http.createServer((req , res)=>{
    console.log(req , res);
 res.setHeader('content-type', 'text/html')
 res.write('<html>\n')
 res.write('<head>Subhash Bhai</head>\n')
 res.write('<body>subhash bahi kya kreg arha hai </body>\n')
 res.write('</html>\n')
 })
    // Create a PORT
    const PORT= (5000);

    //Server Listening 
    server.listen(PORT, () => {
        console.log(`Create Respons on port http://localhost:${PORT}`)
   

})
