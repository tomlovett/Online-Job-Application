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
		res.sendFile('html/success.html', {root : './public'});
	})	
}

function loadApplicants(req, res) {
	Applicant.find({}, function(err, doc) {
		res.send(doc)
	})
}

function loadIndividual(req, res) {
	Applicant.findById(req.body.userID, function(err, doc) {
		res.send(doc)
	})
}

function delApplicant(req, res) {
	Applicant.findById(req.body._id, function(err, doc) {
		Applicant.remove(doc, function() {
			console.log('removed!')
		})
	})
}

function byUserID(req, res) {
	Applicant.findById(req.params.userID, function(err, doc) {
		if (err) {
			res.sendFile('oops.html', 		{root : './public/html'});
		} else {
			res.sendFile('individual.html', {root: './public/html'})
		}
	})
}

module.exports = {
	newApplicant   : newApplicant,
	loadApplicants : loadApplicants,
	loadIndividual : loadIndividual,
	delApplicant   : delApplicant,
	byUserID       : byUserID
}

