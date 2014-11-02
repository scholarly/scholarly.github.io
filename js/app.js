(function(){
    var app=angular.module("myapp",[]);
    
    app.controller("MyController",function($scope){
        $scope.user={
            name:"John"
        };
        
    })
})()