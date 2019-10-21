const express = require('express');
const app = express();

require('./db/db');

const methodOverride = require('method-override');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))
app.use(methodOverride('_method'));

const companyController = require('./controllers/company.js');
app.use('/company', companyController)

// home page

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(3000, () => {
    console.log('I am listening to ALL!');
})