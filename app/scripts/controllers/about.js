'use strict';

/**
 * @ngdoc function
 * @name angularWhyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularWhyApp
 */
angular.module('angularWhyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
