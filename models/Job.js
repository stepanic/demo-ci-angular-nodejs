var mongoose = require('mongoose');
var Promise = require('bluebird');

var jobSchema = mongoose.Schema({
  title:{type:String},
  description:{type:String}
});

var Job = mongoose.model('Job',jobSchema);

var jobs = [
  {title:'Cook', description:"You will be making bagels"},
  {title:'Waiter', description:"You will be putting food on peoples tab"},
  {title:'Programmer', description:"You will be mindlessly typing"},
  {title:'Axe Maker', description:"We need many axes made.. so many.."}
];

function findJobs(query) {
  return Promise.cast(mongoose.model('Job').find(query).exec());
}

var createJob = Promise.promisify(Job.create, Job);

exports.seedJobs = function() {
    return findJobs().then(function(collection) {
      if (collection.length === 0) {
        return Promise.map(jobs, function(job) {
          return createJob(job);
        })
      }
    });
}
