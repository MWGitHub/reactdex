var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var PokemonsIndex = require('./components/pokemons/pokemonsIndex');
var PokemonDetail = require('./components/pokemons/pokemonDetail');


var App = React.createClass({
  render: function () {
    return (
      <div id="pokedex">
        <PokemonsIndex />
        {this.props.children}
      </div>
    );
  }
});

var router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="pokemon/:pokemonId" component={PokemonDetail} />
    </Route>
  </Router>
);

$(function () {
  ReactDOM.render(router, $('#root')[0]);
});
