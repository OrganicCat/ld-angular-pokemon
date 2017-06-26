angular.module('ld.pokemon').component('pokemonFormComponent', {
  templateUrl: './html/pokemon-form-component.html',
  controller: function() {
    this.textChange = () => {
        if (this.searchfield.length > 2) {
            console.log("search changed: ", this.searchfield)
        }
    }
      
  }
});