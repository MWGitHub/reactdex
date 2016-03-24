var React = require('react');
var History = require('react-router').History;

var PokemonIndexItem = React.createClass({
  mixins: [History],

  showDetail: function (e) {
    this.history.push('/pokemon/' + this.props.pokemon.id);
  },

  render: function () {
    return (
      <li className="poke-list-item" onClick={this.showDetail}>
        <p>{this.props.pokemon.name}</p>
        <p>{this.props.pokemon.poke_type}</p>
      </li>
    );
  }
});

module.exports = PokemonIndexItem;
