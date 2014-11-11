process.env.PWD = process.cwd();

var express = require('express');
var jobModel = require('./models/Job');
var jobsData = require('./jobs-data.js');

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(process.env.PWD + '/public'));

app.get('/api/jobs', function(req, res) {
  jobsData.findJobs().then(function(collection) {
    res.send(collection);
  });
});

app.get('*', function (req, res) {
  res.render('index');
});

jobsData.connectDB('mongodb://demo:demo1234@ds051740.mongolab.com:51740/heroku_app31481344')
.then(function() {
  console.log('connected to mongodb sucessfully!');
  jobsData.seedJobs();
});


app.listen(process.env.PORT || 3000);
