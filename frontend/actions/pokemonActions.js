var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');

var pokemonActions = {

  receiveAllPokemons: function (data) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: data
    });
  },

  receiveSinglePokemon: function (data) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: data
    });
  }

};

module.exports = pokemonActions;
