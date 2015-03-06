var app = angular.module('reddit');
app.controller('postsController', function($scope, FirebaseService){
    
    $scope.getPost = function(){
            FirebaseService.getRequest().then(function(data){
	           $scope.posts = data;
            })
            }
        $scope.addPost = function(){
          console.log('I am in the controller');  
            console.log($scope.newPost);
            FirebaseService.addPost($scope.newPost).then(function(res){
               $scope.getPost(); 
            })
        }
        
})
//$scope.newPost