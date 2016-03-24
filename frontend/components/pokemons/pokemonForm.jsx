var React = require('react');
var apiUtil = require('../../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;
var PokemonActions = require('../../actions/pokemonActions');

var PokemonForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function () {
    return {
      name: "",
      type: "",
      attack: "",
      defense: "",
      moves: "",
      url: ""
    };
  },

  _onSubmit: function (e) {
    e.stopPropagation();
    e.preventDefault();
    var pokemon = {
      name: this.state.name,
      poke_type: this.state.type,
      attack: this.state.attack,
      defense: this.state.defense,
      moves: this.state.moves.split(', '),
      image_url: this.state.url
    };
    this.setState(this.getInitialState());

    apiUtil.createPokemon(pokemon, function(id) {
      this.history.push('/pokemon/' + id);
    }.bind(this));

    
  },

  render: function () {
    var selections = window.pokemonTypes.map(function (type, i) {
      return (
        <option key={i} value={type}>{type}</option>
      );
    });
    return (
      <form onSubmit={this._onSubmit}>
        <label>Name
          <input type="text" valueLink={this.linkState("name")} />
        </label>
        <br />
        <label>Type
          <select valueLink={this.linkState("type")}>
            {selections}
          </select>
        </label>
        <br />
        <label>Attack
          <input type="text" valueLink={this.linkState("attack")} />
        </label>
        <br />
        <label>Defense
          <input type="text" valueLink={this.linkState("defense")} />
        </label>
        <br />
        <label>Moves (Separated by commas)
          <input type="text" valueLink={this.linkState("moves")} />
        </label>
        <br />
        <label>Image URL
          <input type="text" valueLink={this.linkState("url")} />
        </label>
        <br />
        <input type="submit" value="Create Pokemon!" />
      </form>
    );
  }
});

module.exports = PokemonForm;
