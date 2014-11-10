var app = angular.module('app', []);


app.controller('testCtrl', ['$scope', function($scope){
  $scope.jobs = [
    {title: "Sales Person", description: "you will fight dragons"},
    {title: "Accoutant", description: "you will use the keyboard"}
  ];


}])
