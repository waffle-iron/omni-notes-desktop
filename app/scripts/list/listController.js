angular.module('ONApp').controller('listController', ['$rootScope', '$scope', '$q', '$log', 'NOTES_EVENT', 'notesService', 'storageService', function($rootScope, $scope, $q, $log, NOTES_EVENT, notesService, storageService) {

    $log.debug('list loaded');

    $rootScope.$on(NOTES_EVENT.LOADED, function(notes) {
        $scope.notes = notesService.getNotes();
        $scope.$apply();
    });

    loadNotes = function() {
        storageService.get('notes_backup_folder').then(function(data) {
            notesService.loadNotes(data);
        });
        return [];
    }

    $scope.notes = loadNotes();

}]);
