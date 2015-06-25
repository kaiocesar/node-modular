var Model = require('./model')
	, Controller = {};

Controller.create = function(req, res) {
	var model = new Model(data);

	model.save(function(err,data){
		if(err) {
			console.log('Error: ', err);
		} else {
			console.log('Successsfully created', data);
		}
	})
};



Controller.retrieve = function(req, res) {
	var query = {};
	Model.find(query, function(err, data){
		if (err) {
			console.log('Error: ', err);
		} else {
			console.log(data);
		}
	});
};


module.exports = Controller;
