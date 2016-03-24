var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var apiUtil = require('../../util/apiUtil');


var PokemonDetail = React.createClass({

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentDidMount: function () {
    this.changeToken = PokemonStore.addListener(this._onChange);
    apiUtil.fetchSinglePokemon(this.props.params.pokemonId);
  },

  componentWillUnmount: function () {
    this.changeToken.remove();
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getStateFromStore: function () {
    return {
      pokemon: PokemonStore.find(parseInt(this.props.params.pokemonId))
    };
  },

  componentWillReceiveProps: function (newProps) {
    apiUtil.fetchSinglePokemon(newProps.params.pokemonId);
  },

  render: function () {
    if (!this.state.pokemon) return <div></div>;
    return (
      <div>
        <div className="pokemon-detail-pane">
          <div className="detail">
            <img src={this.state.pokemon.image_url} />
            <ul>
              <li>Name: {this.state.pokemon.name}</li>
              <li>Type: {this.state.pokemon.poke_type}</li>
              <li>Number: {this.state.pokemon.id}</li>
              <li>Attack: {this.state.pokemon.attack}</li>
              <li>Defense: {this.state.pokemon.defense}</li>
              <li>Moves: {this.state.pokemon.moves}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = PokemonDetail;
