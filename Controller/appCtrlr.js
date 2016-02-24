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
	var applicants = Applicant.find({}, function(err, doc) {
		res.send(doc)
	})
}

function delApplicant(req, res) {
	Applicant.findById(req.body._id, function(err, doc) {
		console.log(doc)
		Applicant.remove(doc, function() {
			console.log('removed!')
		})
	})
}

"56ccede06be6d5ea03dde25f"
function byUserID(req, res) {
	console.log(req.params.userID)
	Applicant.findById(req.params.userID, function(err, doc) {
		if (err) {
			res.sendFile('html/oops.html', {root : './public'});
		} else {
			res.send(doc) // how to format appropriately 
		}
	})
}

// function loadIndividual(req, res) {
// 	Applicant.findById(req.body, function(err, doc) {
// 		res.send(doc) // how to access this data in the hmtl file?
// 	})
// 	console.log('can get to here')
// }

module.exports = {
	newApplicant   : newApplicant,
	loadApplicants : loadApplicants,
	delApplicant   : delApplicant,
	byUserID       : byUserID,
	// loadIndividual : loadIndividual
}

