process.env.PWD = process.cwd();


var express = require('express');
var mongoose = require('mongoose');
var jobModel = require('./models/Job');

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(process.env.PWD + '/public'));

app.get('/api/jobs', function(req, res) {
  mongoose.model('Job').find({}).exec(function(error, collection) {
    res.send(collection);
  });
});

app.get('*', function (req, res) {
  res.render('index');
});

mongoose.connect('mongodb://demo:demo1234@ds051740.mongolab.com:51740/heroku_app31481344');

var con = mongoose.connection;
con.once('open', function() {
  console.log('connected to mongodb sucessfully!');
  jobModel.seedJobs();
});

app.listen(process.env.PORT || 3000);
