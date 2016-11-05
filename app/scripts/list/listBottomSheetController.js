angular.module('ONApp').controller('listBottomSheetController', ['$rootScope', '$scope', '$q', '$log', 'CONSTANTS', 'notesService', 'storageService', '$mdDialog', '$mdBottomSheet', '$mdToast', function($rootScope, $scope, $q, $log, CONSTANTS, notesService, storageService, $mdDialog, $mdBottomSheet, $mdToast) {

    $scope.bottomSheetItems = [{
        method: 'archiveNotes',
        params: '',
        title: 'Archive notes',
        icon: 'archive'
    }, {
        method: 'trashNotes',
        params: '',
        title: 'Trash notes',
        icon: 'delete'
    }];


    $scope.actionSelected = function(bottomSheetItem) {
        $mdBottomSheet.hide(bottomSheetItem.method);
    }

}]);
