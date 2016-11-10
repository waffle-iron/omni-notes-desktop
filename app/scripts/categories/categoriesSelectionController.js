angular.module('ONApp').controller('categoriesSelectionController', ['$rootScope', '$scope', '$q', '$log', '$mdDialog', 'notesService', function($rootScope, $scope, $q, $log, $mdDialog, notesService) {

    $scope.categories = notesService.getCategories();

    $scope.categorySelected = function(category) {
        $mdDialog.hide(category);
    }

    $scope.addNewCategory = function() {
        $mdDialog.hide();
    }

}]);
