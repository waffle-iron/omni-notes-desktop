angular.module('ONApp').controller('listController', ['$rootScope', '$scope', '$q', '$log', 'CONSTANTS', 'notesService', 'storageService', '$mdDialog', '$mdBottomSheet', '$mdToast', 'hotkeys', function($rootScope, $scope, $q, $log, CONSTANTS, notesService, storageService, $mdDialog, $mdBottomSheet, $mdToast, hotkeys) {

    $scope.notesBackupFolder = storageService.get('notes_backup_folder');
    $scope.notes = [];
    $scope.selectedNotes = [];

    // Keyboard shortcuts
    hotkeys.add({
        combo: 'ctrl+n',
        description: 'New note',
        callback: function() {
            $scope.editNote();
        }
    });
    hotkeys.add({
        combo: 'ctrl+s',
        description: 'Save note or category',
        callback: function() {
            // Does nothing, just to fill shortcuts' spreadsheet
        }
    });

    $rootScope.$on(CONSTANTS.NOTES_FILTERED, function(event, notes) {
        $scope.notes = notes;
        $scope.$applyAsync();
    });

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

    notesService.loadNotes($scope.notesBackupFolder);

}]);
