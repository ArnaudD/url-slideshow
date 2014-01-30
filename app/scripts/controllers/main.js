/*global Firebase */

'use strict';

angular.module('urlSlideshowApp')
  .controller('MainCtrl', function($scope, $firebase, $location) {
    $scope.slideshows = $firebase(new Firebase('https://url-slideshow.firebaseio.com/slideshows'));

    $scope.create = function() {
      console.log({name: $scope.slideshowName, urls: []});
      $scope.slideshows.$add({name: $scope.slideshowName, urls: []});
    };
  });