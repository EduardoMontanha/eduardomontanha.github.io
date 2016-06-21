var app = angular.module('aamf', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    
    //Remove o # da url
    $locationProvider.html5Mode(true);
    
    $routeProvider
        //Homepage
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeCtrl'
        })
        //Contact
        .when('/contato', {
            templateUrl: 'app/views/contato.html',
            controller: 'ContatoCtrl'
        })
        .otherwise({redirectTo: '/'});
});