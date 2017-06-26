describe 'MainController', () -> 
 beforeEach module 'moreFansApp'
 scope = null
 ctrl = null
 beforeEach inject(($controller) ->
    scope = {}
    ctrl = $controller 'MainController', {$scope: scope}
    return
  )
 describe 'Current Count', () ->
  it 'should start at 1', () ->
    expect(scope.currentCount).toEqual(1)

 describe 'clickUp', () ->
  it 'should increase current count by 1', () ->
   scope.clickUp()
   expect(scope.currentCount).toEqual(2)

 describe 'clickDown', () ->
  it 'should decrease current count by 1', () ->
   scope.clickDown()
   expect(scope.currentCount).toEqual(32)