//Import http module
const http = require('http');
const todos = ['Subhash', 'Kumar ', 'Software', 'Developer'];
//Create Server
const app = http.createServer((req, res) => {

  const {method,url} = req;
//   console.log(method , url);
  if(url.toLowerCase() === '/todos'){
           if(method === "GET"){
                res.writeHead(200,{"content-type":"text/html"});
                res.write(todos.toString());
                res.end();
           } else if(method === "POST"){
                let body = '';
                 req.on('error', (err)  =>{
                    console.error(err);
                 })
                .on('data',(chunk) =>{
                    body += chunk;
                    console.log("Chunk :", chunk)
                })
            .on('end',() =>{
                body = JSON.parse(body)
                console.log("Body :",body);
              let newTodo = todos
              newTodo.push(body.item);
             res.end()
            })}
           else {
                res.writeHead(501);
                res.write("<h1>Method Not Implemented</h1>");
                res.end();
           }


  }else if (url.toLowerCase() === '/'){
    res.writeHead(404);
    res.write("<h1>Page Not Found</h1>");
    res.end();

  }


})

//Create Port
const PORT = 8081;
//Start Server
app.listen(PORT, () => {
    console.log(`ToDo app is Server is running on http://localhost:${PORT}`);
});