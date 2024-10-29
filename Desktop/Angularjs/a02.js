
angular.module('myApp', [])
.controller('myController', function($scope) {
   
    $scope.areDetailsVisible = false;
    $scope.items = [2000, 25000, 30000, 40000];
    $scope.fruits = ['apple','mango','banana','guava'];
    $scope.vegetables = ['okra','tomato','capsicum','beans']; 

   $scope.employees =[
    {
        fname:'Hemanth',
        lname : 'Bhat',
        salary : 49000
    },
    {
        fname:'Ravi',
        lname : 'Kumar',
        salary : 59000
    },
    {
        fname:'Satya',
        lname : 'Ranjan',
        salary : 69000
    },
    {
        fname:'Dolly',
        lname : 'A',
        salary : 79000
    }
   ];

   $scope.count=0;

  
});