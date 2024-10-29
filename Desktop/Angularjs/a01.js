
angular.module('myApp', [])
.controller('myController', function($scope) {
   
    $scope.areDetailsVisible = false;
    $scope.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    $scope.fruits = ['apple','mango','banana','guava'];
    $scope.vegetables = ['okra','tomato','capsicum','beans']; 

    
    $scope.toggleDetails = function() {
        $scope.areDetailsVisible = !$scope.areDetailsVisible;
    };
});