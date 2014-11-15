app = angular.module('app', ['ngResource']);


app.controller('testCtrl', ['$scope', '$resource', 'jobs', function($scope, $resource, jobs){
  $scope.jobs = $resource('/api/jobs').query();

  $scope.submit = function() {
    var job = {title: $scope.title, description: $scope.description};
    console.log(job);
    jobs.save(job);
    $scope.jobs.push(job);
  };
}])
