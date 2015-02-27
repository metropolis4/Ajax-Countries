var request = require('request');
var fs = require('fs');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
    load: function(req, res) {
        fs.exists('./models/countries.json', function(exists){
            if (!exists) {
                request(req.query.dataLink, function(err, resp, body){
                    fs.writeFileSync('./models/countries.json', body);
                }); 
            }
        });
        var Countries = require('../models/countries.json');
        res.send(Countries);
    }
};

module.exports = indexController;