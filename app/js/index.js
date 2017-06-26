angular.module('ld.pokemon', [])
  .controller('PokemonController', PokemonController);

function PokemonController() { 
    this.header = "Welcome to the Pokemon Search Utility"
    this.getStrongest = function() {
        return "strongest"
    }
}