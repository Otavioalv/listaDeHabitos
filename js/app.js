var app = angular.module('app', ['ngRoute']);

app.controller("apitestgetcontroller", ["$scope", "$http", function($scope, $http){
    $scope.result = "";
    $scope.id = "";
    
    $scope.listaDeHabitosApiGet = function(){
        if($scope.id == "") {
            $http.get("http://localhost:80/listadehabitos-rest-api/habito.php")
            .success(function(data) {
                var output = JSON.stringify(data);
                $scope.result = output;
            });
        } else {
            $http.get("http://localhost:80/listadehabitos-rest-api/habito.php", {
                params: {
                    id: $scope.id
                }
            }).success(function (data) {
                var output = JSON.stringify(data);
                $scope.result = output;
            });
        }
    };
}]);

app.controller("apitestpostcontroller", ["$scope", "$http", function($scope, $http){
    $scope.result = "";
    $scope.nome = "";

    $scope.listaDeHabitosApiPost = function(){
        $http.post("http://localhost:80/listadehabitos-rest-api/habito.php", {nome: $scope.nome})
        .success(function(data) {
            var output = JSON.stringify(data);
            $scope.result = output;
        });
    };
}]);

app.controller("apitestputcontroller", ["$scope", "$http", function($scope, $http){
    $scope.result = "";
    $scope.id = "";
    $scope.nome = "";
    $scope.status = "";

    $scope.listaDeHabitosApiPut = (function() {
        $http.put("http://localhost:80/listadehabitos-rest-api/habito.php", {
            id: $scope.id,
            nome: $scope.nome,
            status: $scope.status
        })
        .success(function(data){
            var output = JSON.stringify(data);
            $scope.result = output;
        });
    }) 
}]);

app.controller("apitestdeletecontroller", ["$scope", "$http", function($scope, $http){
    $scope.result = "";
    $scope.id = "";

    $scope.listaDeHabitoApiDel = (function(){
        $http.delete("http://localhost:80/listadehabitos-rest-api/habito.php", {
            params: {
                id: $scope.id
            }
        })
        .success(function(data){
            var output = JSON.stringify(data);
            $scope.result = output;
        });
    })
}]);

app.controller("welcomecontroller", ["$scope", function($scope){   
}]);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/api-test-get", {
        controller: "apitestgetcontroller",
        templateUrl: "partials/api-test-get.html"
    })
    .when("/api-test-post", {
        controller: "apitestgetcontroller",
        templateUrl: "partials/api-test-post.html"
    })
    .when("/api-test-put", {
        controller: "apitestgetcontroller",
        templateUrl: "partials/api-test-put.html"
    })
    .when("/api-test-delete", {
        controller: "apitestgetcontroller",
        templateUrl: "partials/api-test-delete.html"
    })
    .otherwise({
        controller: "welcomecontroller",
        templateUrl: "partials/welcome.html"
    });
});