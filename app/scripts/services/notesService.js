angular.module("ONApp").service("notesService", ['$rootScope', 'NOTES_EVENT', 'storageService', function($rootScope, NOTES_EVENT, storageService) {

    var fs = require('fs');
    var notes = [];

    this.loadNotes = function(backupFolderPath) {
        notes = [];
        fs.readdir(backupFolderPath, function(err, files) {
            var filtered = files.filter(function(fileName) {
                return new RegExp("[0-9]{13}\\.json").test(fileName);
            });
            filtered.forEach(function(fileName) {
                var filePath = backupFolderPath + '/' + fileName;
                console.log('Reading content of file: ' + filePath);
                fs.readFile(filePath, function(err, data) {
                    notes.push(JSON.parse(data));
                    if (notes.length == filtered.length) {
                        storageService.put('notes_backup_folder', backupFolderPath);
                        $rootScope.$emit(NOTES_EVENT.LOADED, notes);
                    }
                });
            });
        });
    };

    this.getNotes = function() {
        return notes;
    };
}]);
