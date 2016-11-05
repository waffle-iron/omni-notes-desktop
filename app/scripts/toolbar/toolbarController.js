angular.module('ONApp').controller('toolbarController', ["$scope", '$q', '$log', '$window', 'notesService', function($scope, $q, $log, $window, notesService) {

    $scope.showSearch = false;
    $scope.searchQuery;

    $scope.exit = function() {
        $window.close();
    }

    $scope.queryChanged = function() {
        notesService.filterNotes(function(note) {
            return (note.title && note.title.indexOf($scope.searchQuery) !== -1) ||
                (note.content && note.content.indexOf($scope.searchQuery) !== -1);
        });
    }

    $scope.$watch('showSearch', function(value) {
        if (!value) {
            $scope.searchQuery = '';
            $scope.queryChanged();
        }
    });

}]);
