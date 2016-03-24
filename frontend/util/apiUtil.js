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
  },

  createPokemon: function (pokemon, callback) {
    $.ajax({
      type: "POST",
      url: "/api/pokemon",
      dataType: "json",
      data: {pokemon: pokemon},
      success: function (data) {
        PokemonActions.receiveSinglePokemon(data);
        callback(data.id);
      }
    });
  }
};

module.exports = ApiUtil;
