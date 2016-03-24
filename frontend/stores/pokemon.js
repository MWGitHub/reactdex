var Store = require('flux/utils').Store;
var PokemonConstants = require('../constants/pokemonConstants');
var Dispatcher = require('../dispatcher/dispatcher');

var _pokemons = {};

var PokemonStore = new Store(Dispatcher);

function resetPokemons(pokemons) {
  var pokemonsObject = {};
  for (var i in pokemons) {
    pokemonsObject[pokemons[i].id] = pokemons[i];
  }
  for (var key in _pokemons) {
    var exists = pokemonsObject[key];
    if (!exists) {
      delete _pokemons[key];
    }
  }

  Object.assign(_pokemons, pokemonsObject);
}

function setPokemon(pokemon) {
  _pokemons[pokemon.id] = pokemon;
}

PokemonStore.find = function (id) {
  return _pokemons[id];
};

PokemonStore.findToy = function (pokemonId, toyId) {
  if (_pokemons[pokemonId]) {
    var toys = _pokemons[pokemonId].toys;
    if (!toys) return null;
    for (var i = 0; i < toys.length; i++) {
      if (toys[i].id === toyId) {
        return toys[i];
      }
    }
  }
  return null;
};

PokemonStore.all = function () {
  var result = [];
  for (var id in _pokemons) {
    if (!_pokemons.hasOwnProperty(id)) continue;

    result.push(_pokemons[id]);
  }
  return result;
};

PokemonStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      resetPokemons(payload.pokemons);
      PokemonStore.__emitChange();
      break;
    case PokemonConstants.POKEMON_RECEIVED:
      setPokemon(payload.pokemon);
      PokemonStore.__emitChange();
      break;
  }

};


module.exports = PokemonStore;
