'use strict';

angular.module('reddit')
.controller('PostsNewCtrl', function($scope, Post, $state){
  $scope.submit = function(o){
    var post = new Post(o);
    post.submit(post)
    .then(function(){
      $state.go('posts.list');
    });
  };
});
