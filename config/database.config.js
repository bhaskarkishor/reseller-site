let dev_db_url = 'mongodb+srv://admin:wordpass@cluster0-sygh9.mongodb.net/test?retryWrites=true&w=majority';
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || dev_db_url, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {
   
    Product: require('../models/product.model'),
};