var React = require('react');
var ToyIndexItem = require('./toyIndexItem');

var ToysIndex = React.createClass({
  render: function () {
    if (!this.props.toys) {
      return <ul></ul>;
    }
    var toys = this.props.toys.map(function (toy) {
      return (
        <ToyIndexItem toy={toy} key={toy.id} />
      );
    });

    return (
      <ul>
        {toys}
      </ul>
    );
  }
});

module.exports = ToysIndex;
