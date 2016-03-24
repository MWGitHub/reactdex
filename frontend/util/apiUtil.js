var PokemonActions = require('../actions/pokemonActions');

var ApiUtil = {
  fetchAllPokemons: function () {
    $.ajax({
      type: "GET",
      url: "/api/pokemon",
      dataType: "json",
      success: function (data) {
        PokemonActions.receiveAllPokemons(data);
      }
    });
  },

  fetchSinglePokemon: function (id) {
    $.ajax({
      type: "GET",
      url: "/api/pokemon/" + id,
      dataType: "json",
      success: function (data) {
        PokemonActions.receiveSinglePokemon(data);
      }
    });
  }
};

module.exports = ApiUtil;
