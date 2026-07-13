const express = require('express');
const  user  = require('./data/user.json')
const app = express();
const port = 8081;
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'welcome to the home page'
    })
})

/*
Router -> (/users)
GET: Get all the list of users in the system
Access: poblic
Parameter: none
*/

app.get('/user', (req, res) => {
    res.status(200).json({
        success: true,
        data: user
    })
})

/*
Router -> (/users)
POST: Create/Register a new user
Access: poblic
Parameter: none
*/
app.post('/user',(req,res)=>{ 
    const {id,name,email,role,createdAt,isActive,borrowedBooks,fines} =req.body;
    if(!id || !name || !email || !role || !createdAt ||  typeof isActive === "undefined" || !borrowedBooks 
        ||  fines === undefined){
     return res.status(400).json({
        success: false,
        message: "Plz Provide all the require fields"
    })
    }
    const users = user.find((each)=>each.id === id)
    if(users){
       return  res.status(409).json({
        success: false,
        message: "User already exists"
    })
    }
    user.push({id, name , email ,role ,createdAt ,isActive, borrowedBooks ,fines})
       return res.status(201).json({
        success: true,
        message: "User Created Successfully" 
    })
})

/*
Router ->  /users/{id}
GET: Get a user by their ID
Access: poblic
Parameter: id 
*/
app.get('/user/:id',(req,res)=>{
   const id = req.params.id;
    const users = user.find((each)=>each.id === id)

    if(!users){
       return res.status(404).json({
            success:false,
            message: "Page not found"
        })
    }

    res.status(200).json({
        success:true,
        data:users
    })
})
app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`)
})