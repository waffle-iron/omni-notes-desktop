angular.module("ONApp").service("storageService", ['$rootScope', 'localStorageService', function($rootScope, localStorageService) {

    this.put = function(key, value) {
        localStorageService.set(key, value);
    };

    this.get = function(key) {
        return localStorageService.get(key);
    };

    this.defaultNotesFolder = function() {
        return __dirname + '/data';
    };

}]);
