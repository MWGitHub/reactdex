var React = require('react');
var PokemonStore = require('../../stores/pokemon');

var ToyDetail = React.createClass({

  getInitialState: function () {
    return this.getStateFromStore(this.props);
  },

  getStateFromStore: function (props) {
    return {
      toy: PokemonStore.findToy(
        props.params.pokemonId,
        parseInt(props.params.toyId)
      )
    };
  },

  componentDidMount: function () {
    this.token = PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.token.remove();
  },

  _onChange: function () {
    this.setState(this.getStateFromStore(this.props));
  },

  componentWillReceiveProps: function (newProps) {
    this.setState(this.getStateFromStore(newProps));
  },

  render: function () {
    if (!this.state.toy) {
      return <div></div>;
    }
    return (
      <div className="detail toy-detail-pane">
        <ul>
          <li><img src={this.state.toy.image_url} /></li>
          <li>Name: {this.state.toy.name}</li>
          <li>Happiness: {this.state.toy.happiness}</li>
          <li>Price: {this.state.toy.price}</li>
        </ul>
      </div>
    );
  }
});

module.exports = ToyDetail;
