angular.module("ONApp").service("storageService", ['$rootScope', function($rootScope) {

    var storage = require('electron-json-storage');

    this.put = function(key, value) {
        storage.set(key, value, function(error) {
            if (error) throw error;
        });
    };

    this.get = function(key, callback) {
        storage.get(key, function(error, data) {
            if (error) throw error;
            callback(data);
        });
    };

}]);
