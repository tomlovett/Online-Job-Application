var appModels = require('../Models/appModels.js')

function newApplicant(req, res) {
	// var app = new appModels.Applicant({
	// 		name   : req.body.name,
	// 		bio    : req.body.bio,
	// 		skills : req.body.skills,
	// 		exp    : req.body.exp,
	// 		why    : req.body.why,
	// })

	res.sendFile('html/success.html', {root : './public'});
	console.log('Dear Tom, fuck you. Love, Node')

	// app.save(function(err, storedData) {  // database not running
	// 	res.send(storedData)
	// })
}

module.exports = {
	newApplicant : newApplicant
}