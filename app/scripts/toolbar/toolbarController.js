angular.module('app').controller('toolbarController', ["$scope", '$q', '$log', '$window', function($scope, $q, $log, $window) {
  $log.debug('toolbar loaded');

  $scope.exit = function() {
    $window.close();
  }
}]);
