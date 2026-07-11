const express = require('express');
const app = express();
const port = 8081;
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({
        message: 'welcome to library management system'
    })
})
app.listen(port,()=>{
console.log(`server is running on port http://localhost:${port}`)
})