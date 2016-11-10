angular.module('ONApp').controller('categoryController', ['$rootScope', '$scope', '$q', '$log', 'CONSTANTS', 'notesService', 'category', '$mdDialog', 'hotkeys', function($rootScope, $scope, $q, $log, CONSTANTS, notesService, category, $mdDialog, hotkeys) {

    $scope.category = _.clone(category);

    // Keyboard shortcuts
    hotkeys.add({
        combo: 'ctrl+s',
        allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
        callback: function() {
            $scope.saveCategory();
        }
    });

    $scope.customSettings = {
        control: 'brightness',
        position: 'top left'
    };

    $scope.saveCategory = function() {
        notesService.saveCategory($scope.category);
        $mdDialog.hide($scope.category);
    }

}]);
