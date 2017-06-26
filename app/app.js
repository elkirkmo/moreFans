var moreFansApp = angular.module('moreFansApp',[]);

moreFansApp.controller('MainController', function MainController($scope, $http){
    $http.get('./data/nfl.json')
        .then(function(res){
            $scope.teams = res.data; 
        });

   $scope.currentCount = 1;

   $scope.clickUp = function($event){
       $scope.currentCount > 31 ? $scope.currentCount = 1 : $scope.currentCount += 1;
   } 
   
   $scope.clickDown = function($event){
       $scope.currentCount <= 1 ? $scope.currentCount = 32 : $scope.currentCount -= 1;
   }

});

moreFansApp.controller('FooterController', function FooterController($scope){
    $scope.links = {
        twitter: 'https://twitter.com/elkirkmo',
        contribute: 'https://github.com/elkirkmo/moreFans',
        origin: 'https://np.reddit.com/r/nfl/comments/6jarda/ocwhich_teams_have_fewer_fans_than_their_namesake/',
        originUser: 'https://np.reddit.com/user/TwentyThreeEightyOne',
    }
});