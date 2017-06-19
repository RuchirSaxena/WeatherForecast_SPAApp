/// <reference path="F:\Javascript_WiredParts\WeatherForecast_SPAApp\WeatherForecast_SPAApp\ExternalResources/angular.js" />
/// <reference path="F:\Javascript_WiredParts\WeatherForecast_SPAApp\WeatherForecast_SPAApp\ExternalResources/angular-route.js" />


(function () {


    //Module
    var weatherApp = angular.module("weatherApp", ['ngRoute', 'ngResource']);

    //Routes
    weatherApp.config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'Home.html',
            controller: 'homeCtrl'
        })
        .when('/forecast', {
            templateUrl: 'Forecast.html',
            controller: 'forecastCtrl'
        })
    });

    //Services
    weatherApp.service("dataService", function () {
        this.cityName = "";
        this.setCityName = function (cityName) {
            this.cityName = cityName;
        }
        this.getCityName = function () {
            return this.cityName;
        }
    })

    //Controllers
    weatherApp.controller("homeCtrl", ['$scope', 'dataService', function ($scope, dataService) {
        $scope.cityName = "";
        $scope.setCityName = function (cityName) {
            dataService.setCityName(cityName);
        };
        

    }]);

    weatherApp.controller("forecastCtrl", ['$scope', 'dataService', function ($scope, dataService) {
        $scope.cityName = dataService.getCityName();
    }]);



}());

