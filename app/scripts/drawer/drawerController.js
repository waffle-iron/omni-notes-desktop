angular.module('ONApp').controller('drawerController', ["$scope", '$q', '$log', '$mdDialog', function($scope, $q, $log, $mdDialog) {
  $log.debug('drawer loaded');

  // Menu items
 	$scope.menu = [
    {
      method : '',
      title: 'Notes',
      icon: 'insert_drive_file'
    },
    {
      method : '',
      title: 'Reminders',
      icon: 'alarm'
    },
    {
      method : '',
      title: 'Archive',
      icon: 'archive'
    },
    {
      method : '',
      title: 'Trash',
      icon: 'delete'
    },
    {
      method : '',
      title: 'Uncategorized',
      icon: 'folder_open'
    }
  ];
 	$scope.menuFooter = [
    {
      method : 'showSettings',
      title: 'Settings',
      icon: 'settings'
    }
  ];

  $scope.showSettings = function(ev) {
    $mdDialog.show({
      templateUrl: 'app/scripts/settings/settings.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    })
  };
}]);
