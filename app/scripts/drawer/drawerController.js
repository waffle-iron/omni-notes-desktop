angular.module('ONApp').controller('drawerController', ['$rootScope', '$scope', '$q', '$log', '$mdDialog', 'notesService', 'CONSTANTS', function($rootScope, $scope, $q, $log, $mdDialog, notesService, CONSTANTS) {

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

    // FIXME: Directly filter notes on application start (WIP)
    // $scope.activeItem = $scope.menu[0];
    //
    // $rootScope.$on(CONSTANTS.NOTES_LOADED, function(event, notes) {
    //     setTimeout(function() {
    //         $scope.filterNotes($scope.menu[0].params);
    //     });
    // });

    $scope.filterNotes = function(filterPredicate) {
        notesService.filterNotes(filterPredicate);
        $scope.activeItem = _.findWhere($scope.menu, {
            params: filterPredicate
        });
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
