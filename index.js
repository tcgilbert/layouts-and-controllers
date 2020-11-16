//import stuff
const express = require('express');
const app = express();

app.set('view engine', 'ejs');


//create our routes
app.get('/', (req, res) => {
    res.render('index');
});

//app.listen
app.listen(8000, () => {
    console.log('server started');
});