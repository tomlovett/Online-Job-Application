var appModels = require('../Models/appModels.js')

function newApplicant(req, res) {
	var app = new appModels.Applicant({
			name   : req.body.name,
			bio    : req.body.bio,
			skills : req.body.skills,
			exp    : req.body.exp,
			why    : req.body.why,
	})

	res.send(app)

	app.save(function(err, storedData) {
		res.send(storedData)
	})
}

module.exports = {
	newApplicant : newApplicant
}