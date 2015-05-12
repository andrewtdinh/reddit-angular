'use strict';

angular.module('reddit')
.controller('PostsShowCtrl', function($scope, Post, $state){
  $scope.postId = $state.params.postId;
  Post.showOnePost($scope.postId)
  .then(function(response){
    console.log('response: ', response);
    $scope.post = response.data;
  });
});
