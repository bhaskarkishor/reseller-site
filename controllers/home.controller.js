const Product = require('../models/product.model');

exports.index = function(req,res){
	Product.find({},function(err, docs){
		if (err) return next(err);
		res.render('index',{products:docs});
	})
}