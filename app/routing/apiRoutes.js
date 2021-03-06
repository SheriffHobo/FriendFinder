var path = require('path');
var friends = require('../data/friends');

// Export API routes
module.exports = function(app) {

	// List of friends data
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add a new friend
	app.post('/api/friends', function(req, res) {

	// Capturing user input
	var userInput = req.body;
	var userResponses = userInput.scores;

	// Calculate friend
	var matchName = '';
	var matchImage = '';
	var totalDifference = 10000;

	// Loop through all existig friends
	for (var i = 0; i < friends.length; i++) {

	// Compute differenes for each question
	var diff = 0;
	for (var j = 0; j < userResponses.length; j++) {
		diff += Math.abs(friends[i].scores[j] - userResponses[j]);
	};

	// If lowest difference, record match
	if (diff < totalDifference) {
		totalDifference = diff;
		matchName = friends[i].name;
		matchImage = friends[i].photo;
	};
	};

	// Add new user
	friends.push(userInput);

	// Send appropriate response
	res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};
