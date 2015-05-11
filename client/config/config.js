'use strict';

angular.module('reddit')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('posts', {url: '/posts', templateUrl: '/views/posts/posts.html', abstract: true})
  .state('posts.new', {url: '/new', templateUrl: '/views/posts/posts-new.html', controller: 'PostsNewCtrl'})
  .state('posts.show', {url: '/{postId}', templateUrl: '/views/posts/posts-show.html', controller: 'PostsShowCtrl'})
  .state('posts.list', {url: '/', templateUrl: '/views/posts/posts-list.html', controller: 'PostsListCtrl'})
  .state('dashboard', {url: '/dashboard', templateUrl: '/views/users/dashboard.html', controller: 'DashboardCtrl'});
});
