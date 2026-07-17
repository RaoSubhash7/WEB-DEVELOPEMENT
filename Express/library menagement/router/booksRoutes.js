const express = require('express');
const books = require('../data/books.json')
const users = require('../data/user.json')

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
/*
Router ->  /books/issued
GET: Get all issued books
Access: public
Parameter: none
*/
router.get('/issued/for-users', (req, res) => {

    const usersWithIssuedBooks = users.filter((each) => each.issuedBook);

    const issuedBooks = [];

    usersWithIssuedBooks.forEach((each) => {

        const book = books.find((book) => book.id === each.issuedBook);

        // Agar book nahi mili to next user par chale jao
        if (!book) return;

        issuedBooks.push({
            ...book,
            issuedBy: each.name,
            issuedDate: each.issuedDate,
            returnDate: each.returnDate
        });

    });

    if (issuedBooks.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No Books issued yet"
        });
    }

    return res.status(200).json({
        success: true,
        data: issuedBooks
    });

});

module.exports = router;
module.exports = router;