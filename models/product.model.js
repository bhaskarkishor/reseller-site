const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    description: {type: String, requied: false, max: 500},
    image: {type: String, required:false, max:1000},
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);