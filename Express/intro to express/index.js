//IMPORTING EXPRESS MODULE
const express = require('express');
//CREATING EXPRESS APP
const app = express();
//MIDDLEWARE
app.use (express.json());
//PORT
const port = 8081;
//ROUTES
app.get('/', (req, res)=>{
    res.status(200).send('Hello World');

})
//STARTING THE SERVER
app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})