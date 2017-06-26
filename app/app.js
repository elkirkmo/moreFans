var moreFansApp = angular.module('moreFansApp',[]);

moreFansApp.controller('MainController', function MainController($scope, $http){
    $http.get('./data/nfl.json')
        .then(function(res){
            $scope.teams = res.data; 
        });
   $scope.fansVsMascots = function(){
       return team.vs ? 'win' : 'lose';
   };
});

moreFansApp.controller('FooterController', function FooterController($scope){
    $scope.links = {
        twitter: 'https://twitter.com/elkirkmo',
        contribute: 'https://github.com/elkirkmo/moreFans',
        origin: 'https://np.reddit.com/r/nfl/comments/6jarda/ocwhich_teams_have_fewer_fans_than_their_namesake/',
        originUser: 'https://np.reddit.com/user/TwentyThreeEightyOne',
    }
});