"use strict";

var app = angular.module("IceCreamApp", ['ngRoute']);
//config-keyword to configure app
//$routeprovider- determines URL route
app.config(function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'partials/greetings.html'
    }).
    when('/showall', {
        //templateUrl- what template to use:
        templateUrl: 'partials/flavor-list.html',
        //controller- what controller to use:
        controller: "FlavorCtrl"
    }).
    when('/cream', {
        //templateUrl- what template to use:
        templateUrl: 'partials/cream.html',
        //controller- what controller to use:
        controller: "FlavorCtrl"
    }).
    when('/sherbert', {
        //templateUrl- what template to use:
        templateUrl: 'partials/sherbert.html',
        //controller- what controller to use:
        controller: "FlavorCtrl"
    }).
    otherwise('/');
});