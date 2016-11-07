angular.module("ONApp").service('navigationService', ['storageService', function(storageService) {

    var currentNavigationItem;

    this.setNavigation = function(navigationItem) {
        currentNavigationItem = navigationItem;
        storageService.put('currentNavigation', navigationItem);
    };

    this.getNavigation = function() {
        return currentNavigationItem || storageService.get('currentNavigation');
    };

    this.isCurrentNavigation = function(navigationItem) {
        return currentNavigationItem && (navigationItem == currentNavigationItem);
    };

}]);
