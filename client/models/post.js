'use strict';

angular.module('reddit')
.factory('Post', function($http, nodeUrl){

  function Post(obj){
    this.title = obj.title;
    this.url = obj.url;
    this.body = obj.body
  }

  Post.prototype.submit = function(){
    return $http.post(nodeUrl + '/posts', this);
  };

  Post.show = function(){
    return $http.get(nodeUrl + '/posts');
  };

  return Post;
});
