var mapCenter = { lat: 37.7758, lng: -122.435 };

var Map = React.createClass({
  getInitialState: function () {
    return {center: mapCenter};
  },

  componentDidMount: function () {
    var map = React.findDOMNode(this.refs.map),
      options = {
        center: this.state.center,
        zoom: 13
      };
    this.map = new google.maps.Map(map, options);
    // this.listenForMove();
  },

  render: function () {
    return (
      <div id='map-container'>
        <div id='map' ref='map'></div>
      </div>
    );
  }
});
