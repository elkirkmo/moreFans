var moreFansApp = angular.module('moreFansApp',[]);

moreFansApp.controller('MainController', function MainController($scope){
  $scope.team =       {
          name: 'New York',
          mascot: 'Jets',
          mascotFacts: {
            number: 20000,
          },
          vs: true,

      }
   $scope.fansVsMascots = function(){
       return team.vs ? 'win' : 'lose';
   };
});