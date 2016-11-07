angular.module('ONApp').controller('detailController', ['$rootScope', '$scope', '$q', '$log', 'CONSTANTS', 'notesService', 'storageService', 'note', '$mdDialog', 'hotkeys', function($rootScope, $scope, $q, $log, CONSTANTS, notesService, storageService, note, $mdDialog, hotkeys) {

    $scope.note = _.clone(note);

    // Keyboard shortcuts
    hotkeys.add({
        combo: 'ctrl+s',
        allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
        callback: function() {
            $scope.saveNote();
        }
    });

    $scope.saveNote = function() {
        notesService.saveNote($scope.note, true);
        $mdDialog.hide();
    }

}]);
