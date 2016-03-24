var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var apiUtil = require('../../util/apiUtil');
var PokemonIndexItem = require('./pokemonIndexItem');

var PokemonsIndex = React.createClass({
  getInitialState: function () {
    return {
      pokemons: PokemonStore.all()
    };
  },

  _onChange: function () {
    this.setState({
      pokemons: PokemonStore.all()
    });
  },

  componentDidMount: function () {
    this.changeToken = PokemonStore.addListener(this._onChange);
    apiUtil.fetchAllPokemons();
  },

  componentWillUnmount: function () {
    this.changeToken.remove();
  },

  render: function () {
    var pokemons = this.state.pokemons.map(function (pokemon) {
      return (
        <PokemonIndexItem pokemon={pokemon} key={pokemon.id} />
      );
    });

    return (
      <div className="pokemon-index-pane">
        <ul>
          {pokemons}
        </ul>
      </div>
    );
  }


});

module.exports = PokemonsIndex;
