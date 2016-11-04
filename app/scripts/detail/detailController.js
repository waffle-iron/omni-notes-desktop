angular.module('ONApp').controller('detailController', ['$rootScope', '$scope', '$q', '$log', 'CONSTANTS', 'notesService', 'storageService', 'note', '$mdDialog', function($rootScope, $scope, $q, $log, CONSTANTS, notesService, storageService, note, $mdDialog) {

    $scope.note = _.clone(note);

    $scope.saveNote = function() {
        notesService.saveNote($scope.note);
        $mdDialog.hide();
    }

}]);
