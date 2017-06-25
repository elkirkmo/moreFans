describe 'MainController', () -> 
 beforeEach module 'moreFansApp'

 it 'should have a team name', inject(($controller) ->
   scope = {}
   ctrl = $controller 'MainController', {$scope: scope}

   expect scope.team.name.length.notToBe(0)
 )