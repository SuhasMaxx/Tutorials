// Kickstart Angular 1.6 Project :

<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="customersCtrl"> 
</div>

<script>
var app = angular.module('myApp', []);
app.controller('FirstCtrl', function($scope, $http) {
    // Code here
});
</script>

<p>The HTML.</p>

</body>
</html>

// Making simple AJAX get request from a controller :

app.controller('myCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : "welcome.htm"
    }).then(function mySuccess(response) {
        $scope.content = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText; 
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});
