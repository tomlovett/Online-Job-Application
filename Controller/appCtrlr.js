var appModels = require('../Models/appModels.js')

function newApplicant(req, res) {
	var applicant = new appModels.Applicant({
			name   : req.body.name,
			bio    : req.body.bio,
			skills : req.body.skills,
			exp    : req.body.exp,
			why    : req.body.why,
	})

	applicant.save(function(err, storedData) {
		console.log('applicant data saved!')
	})

	res.sendFile('html/success.html', {root : './public'});
}

function loadApplicants(req, res) {
	var applicants = appModels.Applicant.find({}, function(err, data) {
		res.send(data)
	})
}

module.exports = {
	newApplicant : newApplicant,
	loadApplicants : loadApplicants
}