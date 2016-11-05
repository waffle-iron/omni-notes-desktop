angular.module('ONApp').controller('listController', ['$rootScope', '$scope', '$q', '$log', 'CONSTANTS', 'notesService', 'storageService', '$mdDialog', '$mdBottomSheet', '$mdToast', function($rootScope, $scope, $q, $log, CONSTANTS, notesService, storageService, $mdDialog, $mdBottomSheet, $mdToast) {

    $scope.notesBackupFolder;
    $scope.selectedNotes = [];

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

    $scope.archiveNotes = function() {
        notesService.archiveNotes($scope.selectedNotes, true);
    }

    $scope.trashNotes = function() {
        notesService.trashNotes($scope.selectedNotes, true);
    }

    $scope.showGridBottomSheet = function() {
        $mdBottomSheet.show({
            templateUrl: 'app/scripts/list/list-bottom-sheet-template.html',
            controller: 'listBottomSheetController',
            clickOutsideToClose: false
        }).then(function(actionMethod, currentScope) {
            $scope[actionMethod]();
        });
    };

    $scope.doAction = function(note) {
        $scope.selectedNotes.push(note);
        $scope.showGridBottomSheet();
    };

    loadNotes();

}]);
