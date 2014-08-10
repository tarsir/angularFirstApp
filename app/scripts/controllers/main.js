'use strict';

/**
 * @ngdoc function
 * @name angularWhyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWhyApp
 */
angular.module('angularWhyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function () {
        $scope.todos.push($scope.item);
        $scope.todo = '';
    };
    $scope.removeTodo = function(index) {
        $scope.todos.splice(index, 1);
    };
  });
