angular.module('myApp', [])
.controller('MyController', ['$scope', function($scope) {
    $scope.showMessage = false;

    $scope.toggleMessage = function() {
        $scope.showMessage = !$scope.showMessage;
    };
}]);