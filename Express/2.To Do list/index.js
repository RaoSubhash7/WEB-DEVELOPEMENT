const express = require('express')

const server = express();
const port = 8081;

server.use(express.json());

const todos = ['Subhash', 'Kumar ', 'Software', 'Developer'];

server.get('/',(req,res) =>{
res.status(200).send('Home page')
});

server.get('/todos', (req,res)=>{
res.status(200).send(todos)
});

server.post('/todos', (req,res)=>{
let newTodo = req.body.item;
todos.push(newTodo)
res.status(201).send({
    message:"Task add successfully"
})
});

server.delete('/todos', (req,res)=>{
const itemToDelete = req.body.item;
const index = todos.indexOf(itemToDelete);
if (index !== -1) {
    todos.splice(index, 1);
    res.status(200).send({
        message:"Task deleted successfully"
    });
} else {
    res.status(404).send({
        message:"Task not found"
    });
}
});


server.listen(port,()=>{
    console.log(`sever in start now on port http://localhost:${port}`)
})