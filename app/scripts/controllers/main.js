'use strict';

/**
 * @ngdoc function
 * @name kzStoreAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kzStoreAngularApp
 */
angular.module('kzStoreAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
