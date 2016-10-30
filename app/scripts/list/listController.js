angular.module('app').controller('listController', ['$rootScope', '$scope', '$q', '$log', function($rootScope, $scope, $q, $log) {
  $log.debug('list loaded');

  $rootScope.notes = {};

  $scope.$watch('notes', function(newVal, oldVal){
        console.log('changed');
    });
}]);
