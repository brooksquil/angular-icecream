"use strict";
console.log("FlavorCtrl");

app.controller("FlavorCtrl", function($scope, FlavorFactory) {

    FlavorFactory.getFlavors()
        .then(function(itemCollection) {
            $scope.flavors = itemCollection;
            console.log("flavors", $scope.flavors);
        });

});