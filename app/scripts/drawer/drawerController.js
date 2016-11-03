angular.module('ONApp').controller('drawerController', ["$scope", '$q', '$log', '$mdDialog', 'notesService', function($scope, $q, $log, $mdDialog, notesService) {
    $log.debug('drawer loaded');

    // Menu items
    $scope.menu = [{
        method: 'filterNotes',
        params: function(note) {
            return !note.archived && !note.trashed;
        },
        title: 'Notes',
        icon: 'insert_drive_file'
    }, {
        method: 'filterNotes',
        params: function(note) {
            return note.alarm;
        },
        title: 'Reminders',
        icon: 'alarm'
    }, {
        method: 'filterNotes',
        params: function(note) {
            return note.archived && !note.trashed;
        },
        title: 'Archive',
        icon: 'archive'
    }, {
        method: 'filterNotes',
        params: function(note) {
            return note.trashed;
        },
        title: 'Trash',
        icon: 'delete'
    }, {
        method: 'filterNotes',
        params: function(note) {
            return !note.category;
        },
        title: 'Uncategorized',
        icon: 'folder_open'
    }];
    $scope.menuFooter = [{
        method: 'showSettings',
        params: '',
        title: 'Settings',
        icon: 'settings'
    }];

    $scope.filterNotes = function(filterPredicate) {
        notesService.filterNotes(filterPredicate);
    };

    $scope.showSettings = function(ev) {
        $mdDialog.show({
            templateUrl: 'app/scripts/settings/settings.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
    };
}]);