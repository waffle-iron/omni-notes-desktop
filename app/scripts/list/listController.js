angular.module('ONApp').controller('listController', ['$rootScope', '$scope', '$q', '$log', 'notesService', function($rootScope, $scope, $q, $log, notesService) {
  $log.debug('list loaded');

  $rootScope.notes = {};

  $scope.$watch('notes', function(newVal, oldVal){
        console.log('changed');
    });
}]);
