var mongoose = require('mongoose')

var appSchema = mongoose.Schema({
	name   : String,
	bio    : String,
	skills : Array,
	exp    : Number,
	why    : String,
})

module.exports = {
	Applicant : mongoose.model('Applicant', appSchema)
}