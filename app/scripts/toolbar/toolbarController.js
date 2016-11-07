angular.module('ONApp').controller('toolbarController', ["$scope", '$q', '$log', '$window', 'notesService', 'hotkeys', function($scope, $q, $log, $window, notesService, hotkeys) {

    $scope.showSearch = false;
    $scope.searchQuery;

    // Keyboard shortcuts
    hotkeys.add({
        combo: 'ctrl+f',
        description: 'Toggle search',
        allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
        callback: function() {
            $scope.showSearch = !$scope.showSearch;
        }
    });

    $scope.exit = function() {
        $window.close();
    }

    $scope.queryChanged = function() {
        notesService.filterNotes(function(note) {
            return (note.title && new RegExp($scope.searchQuery, "i").test(note.title)) ||
                (note.content && new RegExp($scope.searchQuery, "i").test(note.content));
        });
    }

    $scope.$watch('showSearch', function(value) {
        if (!value) {
            $scope.searchQuery = '';
            $scope.queryChanged();
        }
    });

    $scope.toggleHelp = function() {
        $log.info(hotkeys);
        hotkeys.toggleCheatSheet();
    }

}]);
