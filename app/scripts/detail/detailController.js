angular.module('ONApp').controller('detailController', ['$rootScope', '$scope', '$q', '$log', 'CONSTANTS', 'notesService', 'storageService', 'note', '$mdDialog', 'hotkeys', 'Upload', function($rootScope, $scope, $q, $log, CONSTANTS, notesService, storageService, note, $mdDialog, hotkeys, Upload) {

    $scope.note = _.clone(note);
    $scope.attachmentsRoot = storageService.get('notes_backup_folder') + '/files/';

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

    $scope.getNoteThumbnail = function(attachment) {
        return $scope.attachmentsRoot + _.last(attachment.uriPath.split('/'));
    }

    $scope.upload = function(files) {
        if (files && files.length) {
            if (!$scope.note.attachmentsList) {
                $scope.note.attachmentsList = [];
            }
            _.each(files, function(file) {
                var attachment = notesService.createNewAttachment(file, $scope.attachmentsRoot);
                $scope.note.attachmentsList.push(attachment);
            });
        }
    }

}]);
