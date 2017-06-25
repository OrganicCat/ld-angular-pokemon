describe('Pokemon App', function() {

  // You need to load modules that you want to test,
  // it loads only the "ng" module by default.
  beforeEach(angular.mock.module('ld.pokemon'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('Finds the strongest pokemon', function() {
    it('should show the strongest pokemon', function() {
        var pokemon = "";
        var controller = $controller('PokemonController');
        console.log(controller);
        pokemon = controller.getStrongest()
        expect(pokemon).toBe("strongest");
    })
  });

});