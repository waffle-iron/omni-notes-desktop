angular.module('ONApp').controller('listController', ['$rootScope', '$scope', '$q', '$log', 'NOTES_EVENT', 'notesService', 'storageService', function($rootScope, $scope, $q, $log, NOTES_EVENT, notesService, storageService) {

    $scope.notesBackupFolder;

    $rootScope.$on(NOTES_EVENT.LOADED, function(notes) {
        $scope.notes = notesService.getNotes();
        $scope.$apply();
    });

    loadNotes = function() {
        storageService.get('notes_backup_folder').then(function(notesBackupFolder) {
            notesService.loadNotes(notesBackupFolder);
            $scope.notesBackupFolder = notesBackupFolder;
        });
        return [];
    }

    $scope.getNoteThumbnail = function(note) {
        return note.attachmentsList && note.attachmentsList.length ?
            $scope.notesBackupFolder + '/' + $scope.getNoteThumbnailShort(note) :
            '';
    }

    $scope.getNoteThumbnailShort = function(note) {
        return note.attachmentsList && note.attachmentsList.length ?
            note.attachmentsList[0].uriPath.substring(note.attachmentsList[0].uriPath.lastIndexOf('files'), note.attachmentsList[0].uriPath.length) :
            '';
    }

    $scope.notes = loadNotes();

}]);
