"use strict";
console.log("FlavorFactory");

// $q- angular promise- helps run asynchronus functions
// $http- angular equivalent of ajax calls
// no fat arrows for factory functions
app.factory("FlavorFactory", function($q, $http) {

    let getFlavors = () => {
        let items = [];
        return $q((resolve, reject) => {
            $http.get('./data/flavors.json')
                // itemObject refers to data coming from call
                .then((itemObject) => {
                    //data is the "response" which angular returns, the property on the object
                    let itemCollection = itemObject.data;
                    resolve(itemCollection.flavors);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    let getOneFlavor = () => {
        console.log("getOneFlavor");
    };

    return { getFlavors, getOneFlavor };
});