var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node-modular');

var db = mongoose.connection;
db.on('error', function(err){ 
	console.log('Connection error!', err);
});

db.on('open', function(){
	console.log('Success open connection.');
});

db.on('connected', function(){
	console.log('Success connection.');
});

db.on('disconnected', function(err){
	console.log('Goodbye');
});


var Schema = mongoose.Schema;

var BeerSchema = new Schema({
	name: {type: String, default: ''},
	description: {type: String, default: ''},
	alcohol: {type: Number, min:0, default: 0},
	price: {type: Number, min:0, default:0},
	category: {type: String, default: ''},
	created_at: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Beer', BeerSchema);