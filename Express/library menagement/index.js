const express = require('express'); 

//Importing the routers
const userRouter = require('./router/userRoutes');
const booksRouter = require('./router/booksRoutes');

const app = express();
const port = 8081;
app.use(express.json());

app.use('/user', userRouter);
app.use('/books', booksRouter);


app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`)
})