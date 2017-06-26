'use strict';

angular.module('ld.pokemon', []).controller('PokemonController', PokemonController);

function PokemonController() {
    this.header = "Welcome to the Pokemon Search Utility";
    this.getStrongest = function () {
        return "strongest";
    };
}
'use strict';

angular.module('ld.pokemon').component('pokemonFormComponent', {
    templateUrl: './html/pokemon-form-component.html',
    controller: function controller() {
        var _this = this;

        this.textChange = function () {
            if (_this.searchfield.length > 2) {
                console.log("search changed: ", _this.searchfield);
            }
        };
    }
});
"use strict";