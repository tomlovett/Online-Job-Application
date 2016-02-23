// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
mongoose.connect('mongodb://localhost/BigPharma')
var appCtrlr = require('./Controller/appCtrlr.js')

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.sendFile('html/applicants', {root : './public'});
});

// creates and applicant
app.post('/api/submit', appCtrlr.newApplicant);

app.get('/success', function(req, res) {
	res.sendFile('html/success.html', {root : './public'});
})


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})