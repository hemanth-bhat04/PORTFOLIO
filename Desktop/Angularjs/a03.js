angular.module('reviewApp', [])
.controller('ReviewController', ['$scope', function($scope) {
    $scope.reviews = [];

    $scope.review = {
        name: 'hemanth',
        text: 'ravi is a great teacher!!!'
    };

   

    $scope.submitReview = function() {
        if ($scope.review.name && $scope.review.text) {
            $scope.reviews.push({
                name: $scope.review.name,
                text: $scope.review.text
            });

            
            $scope.review.name = '';
            $scope.review.text = '';
        }
    
    };
}]);