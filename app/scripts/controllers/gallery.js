'use strict';

var app = angular.module('angularWhyApp');

app.controller('GalleryCtrl', function ($scope) {
    $scope.allImgs = [{
        title: 'maddie1',
        caption: 'Maddie'
    }, {
        title: 'tsucchi',
        caption: 'Tsucchi'
    }, {
        title: 'stephwall',
        caption: 'Stephanie\'s Wall'
    }, {
        title: 'thewall',
        caption: 'Looking Up'
    }];
    $scope.img = {url: 'http://', caption: '', title: ''};

    $scope.findImg = function() {
        $scope.allImgs.push($scope.img);
        $scope.img = {url: 'http://', caption: '', title: ''};
    };

    $scope.currentIndex = 0;
    $scope.next = function() {
        if ($scope.currentIndex < $scope.allImgs.length-1) {
            $scope.currentIndex+=1;
        } else {
            $scope.currentIndex = 0;
        }
    };
    $scope.prev = function() {
        if ($scope.currentIndex > 0) {
            $scope.currentIndex--;
        } else {
            $scope.currentIndex = $scope.allImgs.length - 1;
        }
    };

    $scope.$watch('currentIndex', function() {
        $scope.allImgs.forEach(function(image) {
            image.visible = false;
        });

        $scope.allImgs[$scope.currentIndex].visible = true;
    });
});


