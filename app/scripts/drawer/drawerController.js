angular.module('app').controller('drawerController', ["$scope", '$q', '$log', '$mdDialog', function($scope, $q, $log, $mdDialog) {
  $log.debug('drawer loaded');

  $scope.showSettings = function(ev) {
    $mdDialog.show({
      templateUrl: 'app/scripts/settings/settings.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    })
  };
}]);
