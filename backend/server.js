//Entry file for our backend application; where we register our express app

//The express package should already be installed, and we also have our package.json file






//Require the express package
const express = require('express');

//Register our express app
const app = express();

//Listen for requests at a certain port number
app.listen(4000, () => {
    console.log('listening on port 4000');
});