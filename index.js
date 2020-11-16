//import stuff
const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');


app.set('view engine', 'ejs');
app.use(ejsLayouts);

//create our routes
app.get('/', (req, res) => {
    res.render('index');
});

//app.listen
app.listen(8000, () => {
    console.log('server started');
});