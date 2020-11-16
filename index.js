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

app.get('/faves/animals', (req, res) => {
    const animals = ['peacock', 'unicorns', 'dogs'];
    res.render('faveAnimals', { animals });
});

app.get('/hates/animals', (req, res) => {
    const animals = ['cockroaches', 'chihuahuas', 'centipedes'];
    res.render('hatedAnimals', { animals });
});

app.get('/faves/food', (req, res) => {
    const foods = ['pizza', 'sushi', 'bbq', 'burritos'];
    res.render('faveFood', { foods });
});

app.get('/hates/food', (req, res) => {
    const foods = ['honeydew', 'oatmeal', 'cottage cheese'];
    res.render('hatedFood', { foods });
});

//app.listen
app.listen(8000, () => {
    console.log('server started');
});