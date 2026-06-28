//Creating a first node server 
//import  http protocol
const http = require("http");

// function aSimpleServer(req , res ){
//     console.log(req);
// }
const app = http.createServer((req, res) => {
    console.log(req);
})
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is lineup and running or port http://localhost:${PORT}`)
});
