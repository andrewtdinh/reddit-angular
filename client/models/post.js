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
    console.info('this: ', this);
    return $http.post(nodeUrl + '/posts', this);
  };

  Post.show = function(){
    return $http.get(nodeUrl + '/posts');
  };

  return Post;
});
