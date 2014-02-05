angular.module('myApp')

.controller('MyController', ['$scope','$http',function($scope,$http){
    $scope.hello = "bob";
    $http.get('/somejson',{responseType:"json"}).success(function(data, status){
        $scope.serverData = data;
    });
    $scope.send = function()
    {
        $http.post('/datatopost',{name:"new person",surname:"surname"}).success(function(data){
            alert('Data has been posted to the server');
            $scope.dataSubmitted = data;
        });
    }
}]);
