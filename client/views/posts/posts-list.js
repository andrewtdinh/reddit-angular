'use strict';

angular.module('reddit')
.controller('PostsListCtrl', function($scope, Post, $state, $window){
  Post.show()
  .then(function(response){
    $scope.posts = response.data;
  });
  $scope.show = function(post){
    if(post.url){
      $window.location.href = post.url;
    } else {
      $state.go('posts.show', {postId: post._id});
    }
  };
});
