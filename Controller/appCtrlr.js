var Applicant = require('../Models/appModels.js')

function newApplicant(req, res) {
	var applicant = new Applicant({
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
	var applicants = Applicant.find({}, function(err, data) {
		res.send(data)
	})
}

function delApplicant(req, res) {
	var app = Applicant.findById(req.body._id, function(err, doc) {
		Applicant.remove(doc)
	})
}

module.exports = {
	newApplicant   : newApplicant,
	loadApplicants : loadApplicants,
	delApplicant   : delApplicant
}