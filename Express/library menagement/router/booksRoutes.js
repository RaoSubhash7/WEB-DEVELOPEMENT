const express = require('express');
const books = require('../data/books.json')
const user = require('../data/user.json')

const router = express.Router();

/*
Router -> (/books)
GET: Get all the list of books in the system
Access: public
Parameter: none
*/

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: books
    })
})




/*
Router -> (/books)
POST: Create/Register a new book
Access: public
Parameter: none
*/
router.post('/',(req,res)=>{ 
    const {id,title,author,isbn,publishedDate,copiesTotal,copiesAvailable,genres,rating} =req.body;
    if(!id || !title || !author || !isbn || !publishedDate || !copiesTotal || !copiesAvailable || !genres || !rating){
     return res.status(400).json({
        success: false,
        message: "Plz Provide all the require fields"
    })
    }
    const book = books.find((each)=>each.id === id)
    if(book){
       return  res.status(409).json({
        success: false,
        message: "Book already exists"
    })
    }
    books.push({id, title, author, isbn, publishedDate, copiesTotal, copiesAvailable, genres, rating})
       return res.status(201).json({
        success: true,
        message: "Book Created Successfully" 
    })
})

/*
Router ->  /books/{id}
GET: Get a book by its ID
Access: public
Parameter: id 
*/
router.get('/:id',(req,res)=>{
   const id = req.params.id;
    const book = books.find((each)=>each.id === id)

    if(!book){
       return res.status(404).json({
            success:false,
            message: "Page not found"
        })
    }

    res.status(200).json({
        success:true,
        data:book
    })
})
/*
Router ->  /books/{id}
PUT: Update a book by its ID
Access: public
Parameter: id 
*/
router.put('/:id',(req,res)=>{
    const id = req.params.id;
    const data = req.body;
    // Check if the book exists 
    const book = books.find((each)=>each.id === id)
    if(!book){
        return res.status(404).json({
            success:false,
            message: `Book not Found for id ${id}`
        })
    }
    //with spread operator we can update the book data
    const updatedBook = books.map((each)=>{
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
        message: "Book updated successfully",
        data: updatedBook
    })

})
/*
Router ->  /books/{id}
DELETE: Delete a book by its ID
Access: public
Parameter: id 
*/
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const bookIndex = books.findIndex((each) => each.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({
            success: false,
            message: `Book not Found for id ${id}`
        });
    }

    books.splice(bookIndex, 1);
    res.status(200).json({
        success: true,
        message: "Book deleted successfully"
    });
});

module.exports = router;