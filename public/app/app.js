var app = angular.module('app', ['ngResource']);


app.controller('testCtrl', ['$scope', '$resource', function($scope, $resource){
  $scope.jobs = $resource('/api/jobs').query();
}])
