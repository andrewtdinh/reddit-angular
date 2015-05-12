'use strict';

angular.module('reddit')
.controller('PostsNewCtrl', function($scope, Post, $state){
  $scope.submit = function(o){
    var post = new Post(o);
    if($scope.photo){
      post.photo = $scope.photo;
    }
    post.submit(post)
    .then(function(){
      $state.go('posts.list');
    });
  };

  $scope.upload = function(){
    var preview = document.querySelector('#postPhoto');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      $scope.photo = preview.src = reader.result;
      console.info('$scope.photo: ', $scope.photo);
      // Album.addPhoto(reader.result, $scope.name);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      $scope.photo = '';
    }
  };
});
