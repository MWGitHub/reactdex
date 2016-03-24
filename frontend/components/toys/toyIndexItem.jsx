var React = require('react');
var History = require('react-router').History;

var ToyIndexItem = React.createClass({
  mixins: [History],

  handleClick: function (e) {
    this.history.push('/pokemon/' + this.props.toy.pokemon_id +
      '/toys/' + this.props.toy.id);
  },

  render: function () {
    return (
      <li className="toy-list-item" onClick={this.handleClick}>
        <p>Name: {this.props.toy.name}</p>
        <p>Happiness: {this.props.toy.happiness}</p>
        <p>Price: {this.props.toy.price}</p>
      </li>
    );
  }
});

module.exports = ToyIndexItem;
