'use strict';

angular.module('reddit')
.factory('Post', function($http, nodeUrl){

  function Post(obj){
    this.title = obj.title;
    this.url = obj.url;
    this.body = obj.body;
    this.photo = obj.photo;
  }

  Post.prototype.submit = function(){
    return $http.post(nodeUrl + '/posts', this);
  };

  Post.show = function(){
    return $http.get(nodeUrl + '/posts');
  };

  Post.showOnePost = function(postId){
    console.log('postId: ', postId);
    return $http.get(nodeUrl + '/posts/' + postId);
  };

  return Post;
});
