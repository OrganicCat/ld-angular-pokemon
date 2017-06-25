angular.module('ld.pokemon', [])
  .controller('PokemonController', PokemonController);

function PokemonController() { 
    this.getStrongest = function() {
        return "strongest"
    }
}