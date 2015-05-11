'use strict';

angular.module('reddit')
.controller('DashboardCtrl', function($scope, $window, User){
  User.show()
  .then(function(response){
    $scope.user = response.data;
  });

  $scope.update = function(obj){
     var user = new User(obj);
     user.save()
     .then(function(){
       $window.swal({title: 'Dashboard Updated', text: 'Congratulations, your dashboard was updated.', type: 'success'});
     })
     .catch(function(){
       $window.swal({title: 'Dashboard Error', text: 'Warning, there was a problem saving your dashboard.', type: 'error'});
     });
   };
});
