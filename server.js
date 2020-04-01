const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const product = require('./routes/product.routes');
const mongoose = require('mongoose');
const home_controller = require('./controllers/home.controller.js')
const dbConfig = require('./config/database.config.js');
const passport = require('./config/google.config.js');
// databse config and requests
/*
let dev_db_url = 'mongodb+srv://admin:wordpass@cluster0-sygh9.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true  });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));*/

app.set('view engine', 'ejs')
app.use(express.static('public'));

//body-parser register
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes group
app.use('/products', product);
app.get('/', home_controller.index);
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });
app.get('/additem',function(req, res) {
    res.render('additem');
  })
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

//let idmongodb = 1dbae5e8-df77-4487-b114-9b26c69d2d40