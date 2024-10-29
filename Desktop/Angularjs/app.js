var app = angular.module('myApp', []);


app.run(function($rootScope) {
    $rootScope.taxRate = 0.1;  
});


app.controller('SalaryController', function($scope, $rootScope) {
    $scope.name = 'Hemanth'; 
    $scope.salary = 60000; 
    $scope.dept =  'IT'; 


   
    $scope.getTaxes = function() {
        return $scope.salary * $rootScope.taxRate;
    };

    
    $scope.calculateNetIncome = function() {
        return $scope.salary - $scope.getTaxes();
    };
});


app.controller('TaxController', function($scope) {
    $scope.getTax = function() {
        return $scope.getTaxes();
    };
});