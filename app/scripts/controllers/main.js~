'use strict';

/**
 * @ngdoc function
 * @name angularWhyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWhyApp
 */
angular.module('angularWhyApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    var todosInStorage = localStorageService.get('todos');

    $scope.todos = todosInStorage && todosInStorage.split('\n') || [];

    $scope.watch('todos', function () {
        localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);

    $scope.addTodo = function () {
        $scope.todos.push($scope.item);
        $scope.item = '';
    };
    $scope.removeTodo = function(index) {
        $scope.todos.splice(index, 1);
    };
  });
