var app;

(function () {
    'use strict';

    var _templateBase = 'app/scripts';

    app = angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'ngAnimate',
        'ngMdIcons'
    ])
    .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: _templateBase + '/list/list.html'
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }
    ]);

})();
