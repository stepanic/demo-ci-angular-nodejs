app = angular.module('app', ['ngResource']);


app.controller('testCtrl', ['$scope', '$resource', 'jobs', function($scope, $resource, jobs){
  $scope.jobs = $resource('/api/jobs').query();
  jobs.save({title:'My testing job title', description:'My testing description'});
}])
