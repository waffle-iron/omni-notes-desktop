angular.module('ONApp').controller('categoryController', ['$rootScope', '$scope', '$q', '$log', 'CONSTANTS', 'notesService', 'storageService', 'category', '$mdDialog', function($rootScope, $scope, $q, $log, CONSTANTS, notesService, storageService, category, $mdDialog) {

    $scope.category = _.clone(category);

    $scope.customSettings = {
        control: 'brightness',
        position: 'top left'
    };

    $scope.saveCategory = function() {
        notesService.saveCategory($scope.category);
        $mdDialog.hide();
    }

}]);
