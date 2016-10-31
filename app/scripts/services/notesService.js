angular.module("ONApp").service("notesService", function() {

    var fs = require('fs');
    var notes = [];

    this.loadNotes = function(backupFilePath) {
        var notes = [];
        var folder = backupFilePath.substr(0, backupFilePath.lastIndexOf("/"));
        fs.readdir(folder, function(err, files) {
            files
                .filter(function(fileName) {
                    return new RegExp("[0-9]{13}").test(fileName);
                })
                .forEach(function(fileName) {
                    var filePath = folder + '/' + fileName;
                    console.log('Reading content of file: ' + filePath);
                    fs.readFile(filePath, function(err, data) {
                        notes.push(JSON.parse(data));
                        console.log(notes);
                    });
                });
        });
    };
});
