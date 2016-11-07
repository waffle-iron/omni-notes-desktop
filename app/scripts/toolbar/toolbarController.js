angular.module('ONApp').controller('toolbarController', ["$scope", '$q', '$log', '$window', 'notesService', function($scope, $q, $log, $window, notesService) {

    $scope.showSearch = false;
    $scope.searchQuery;

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

}]);
