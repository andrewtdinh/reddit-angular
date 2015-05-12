'use strict';

angular.module('reddit')
.controller('PostsListCtrl', function($scope, Post){
  Post.show()
  .then(function(response){
    console.info('response: ', response);
    $scope.posts = response.data;
  });
});
