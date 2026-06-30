const http = require('http')
const fs = require('fs')

const app = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html')
    // if(req.url === '/'){
    //     res.write('<h2>Home page/default </h2>')
    //     res.end();
    // }else if(req.url === '/about'){
    //     res.write('<h2>About</h2>')
    //     res.end();
    // }else if(req.url === '/help'){
    //     res.write('<h2>Help</h2>')
    //     res.end();
    // }else if(req.url === '/contact'){
    //     res.write('<h2>Contact</h2>')
    //     res.end();
    // }else if(req.url === '/faq'){
    //     res.write('<h2>FAQ</h2>')
    //     res.end();
    // }


    if (req.url === '/form') {
        res.write('User Login Page')
        res.write(`
        <form action='/submited-data' method='POST'    >
        <label for='username'>Username</label>
        <input type='text' id='username' name='name' placeholder='Enter Your Name' >
        <br />
        <label>Gender</label>
        <input type='radio' id='male' name='gender' value='male'>
        <label for='male'>Male</label>
        <input type='radio' id='female' name='gender' value='female'>
        <label for='female'>Female</label>
        <br />
        <button type="submit">Submit</button>
        </form>
        `)
        return res.end()
    } else if (req.url === '/redirected') {
        res.write('<h2>Page was Redirected</h2>')
        return res.end()
    } else if (req.method === 'POST' && req.url.toLowerCase() === '/submited-data') {
        res.statusCode = 302;
        fs.writeFileSync('user-data-txt','Subhash')
        res.setHeader('Location', '/redirected')
        return res.end()
    }
})
const PORT = (4000)

app.listen(PORT, () => {
    console.log(`Handle Routing  and Requesting http://localhost:${PORT}`)
})