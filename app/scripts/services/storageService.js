angular.module("ONApp").service("storageService", ['$rootScope', function($rootScope) {

    const Promise = require('bluebird');
    const storage = Promise.promisifyAll(require('electron-json-storage'));

    this.put = function(key, value) {
        storage.set(key, value, function(error) {
            if (error) throw error;
        });
    };

    this.get = function(key) {
        return storage.getAsync(key);
    };

}]);
