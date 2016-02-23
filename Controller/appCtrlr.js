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
		res.send(storedData)
	})

	res.sendFile('html/success.html', {root : './public'});
}

module.exports = {
	newApplicant : newApplicant
}