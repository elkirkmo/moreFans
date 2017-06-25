var moreFansApp = angular.module('moreFansApp',[]);

moreFansApp.controller('MainController', function MainController($scope){
  $scope.team =       {
          name: 'New York Jets',
          mascot: 'Jet',
      }
});