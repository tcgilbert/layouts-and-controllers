//import stuff
const express = require('express');
const app = express();

//create at least one route
app.get('/', (req, res) => {
    res.send('hello from index.js');
});

//app.listen
app.listen(8000, () => {
    console.log('server started');
});