//Entry file for our backend application; where we register our express app

//The express package should already be installed, and we also have our package.json file






//Require the express package
const express = require('express');

//Register our express app
const app = express();

//register some middleware - any code executed between getting a request for the server, and us sending a response
app.use((req, res, next) => { //request coming in, response going out, what gets ran at the end of this method
    console.log(req.path, req.method);
    next(); //the next piece of middleware (our routes)
});

//React to requests by establishing routes; this will all be replaced later
app.get('/', (req, res) => { //request coming in, response going out
    res.json({msg: 'Welcome to the app'}); //use the response object to send back a json string
});

//Listen for requests at a certain port number
app.listen(4000, () => {
    console.log('listening on port 4000');
});