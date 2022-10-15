const express = require('express');
const path = require('path');
const morgan = require('morgan');
const ejsMate = require('ejs-mate');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(morgan('dev'));

app.engine('ejs', ejsMate);

app.get('/home', (req, res) => {
    res.render('swims/index')
})

app.get('/', (req, res) => {
    res.send('home')
})

app.all('*', (req, res, next) => {
    
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})