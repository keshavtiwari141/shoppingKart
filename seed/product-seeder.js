var mongoose = require('mongoose');
var product = require('../models/product');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });
 
var products = [
            new product({
            	imagePath:'http://ichef.bbci.co.uk/news/976/cpsprodpb/FDAC/production/_89704946_mario976.jpg',
            	title:'Mario',
            	description:'My first game',
            	price:12,
            }),

            new product({
            	imagePath:'http://ichef.bbci.co.uk/news/976/cpsprodpb/FDAC/production/_89704946_mario976.jpg',
            	title:'Mario',
            	description:'My first game',
            	price:12,
            })

];

var done=0;
for (var i=0;i<products.length;i++)
{
	products[i].save(function (err , result) {
		done++;
		if(done === products.length)
			exit();
	});
}

function exit () {
	mongoose.disconnect();
}