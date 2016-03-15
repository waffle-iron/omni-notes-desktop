angular.module('app').controller('drawerController', ["$scope", '$q', '$log', '$window', function($scope, $q, $log, $window) {
  $log.debug('toolbar loaded');

  $scope.exit = function() {
    $window.close();
  }
}]);
