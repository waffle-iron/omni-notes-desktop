angular.module('ONApp').controller('listController', ['$rootScope', '$scope', '$q', '$log', 'CONSTANTS', 'notesService', 'storageService', '$mdDialog', function($rootScope, $scope, $q, $log, CONSTANTS, notesService, storageService, $mdDialog) {

    $scope.notesBackupFolder;

    $rootScope.$on(CONSTANTS.NOTES_LOADED, function(event, notes) {
        $scope.notes = notes;
        $scope.$applyAsync();
    });

    $rootScope.$on(CONSTANTS.NOTES_FILTERED, function(event, notes) {
        $scope.notes = notes;
    });

    $rootScope.$on(CONSTANTS.NOTE_MODIFIED, function(event, notes) {
        $scope.notes = notes;
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

    $scope.editNote = function(note) {
        $mdDialog.show({
            templateUrl: 'app/scripts/detail/detail.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            controller: 'detailController',
            locals: {
                note: note
            }
        })
    }

    loadNotes();

}]);
