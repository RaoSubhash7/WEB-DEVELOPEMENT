const express = require('express');
const  user  = require('../data/user.json')
const router = express.Router();
router.get('/', (req, res) => {
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

router.get('/', (req, res) => {
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
router.post('/',(req,res)=>{ 
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
router.get('/:id',(req,res)=>{
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
/*
Router ->  /users/{id}
PUT: Update a user by their ID
Access: poblic
Parameter: id 
*/
router.put('/:id',(req,res)=>{
    const id = req.params.id;
    const data = req.body;
    // Check if the user exists 
    const users = user.find((each)=>each.id === id)
    if(!users){
        return res.status(404).json({
            success:false,
            message: `User not Found for id ${id}`
        })
    }
    //with spread operator we can update the user data
    const updatedUser = user.map((each)=>{
        if(each.id === id){
            return {
                ...each,
                ...data
            }
        }
        return each;
    })
    res.status(200).json({
        success:true,
        message: "User updated successfully",
        data: updatedUser
    })

})
/*
Router ->  /users/{id}
DELETE: Delating a user by their ID (Check if the user still has an issued book)
 && {is there any fine/penalty to be collected}
Access: poblic
Parameter: id 
*/
router.delete('/:id',(req,res)=>{
    const id = req.params.id;
    const users = user.find((each)=>each.id === id)
    if(!users){
        return res.status(404).json({
            success:false,
            message: `User not Found for id ${id}`
        })
    }
    // Check if the user has any issued books or outstanding fines
    if(users.borrowedBooks.length > 0 || users.fines > 0){
        return res.status(400).json({
            success:false,
            message: "Cannot delete user with issued books or outstanding fines"
        })
    }
    // Remove the user from the array
    const index = user.findIndex((each) => each.id === id);
    user.splice(index, 1);
    res.status(200).json({
        success:true,
        message: "User deleted successfully"
    })
}) 
//This is the end of the userRoutes.js file. It defines various routes for
//  managing users in a library management system, including getting all users, 
// creating a new user, retrieving a user by ID, updating a user, and deleting a user.
//  Each route includes appropriate error handling and response messages.
module.exports = router;
