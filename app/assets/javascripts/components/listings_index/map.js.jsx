var mapCenter = { lat: 37.7758, lng: -122.435 };

var Map = React.createClass({
  getInitialState: function () {
    return {
      center: mapCenter,
    };
  },

  componentDidMount: function () {
    this.markers = {};

    var map = React.findDOMNode(this.refs.map),
        place = SearchStore.getPlace(),
        options = {
          center: this.state.center,
          zoom: 10
        };

    this.map = new google.maps.Map(map, options);
    this.retrieveBounds(place);

    // install listeners
    SearchStore.addSearchChangeListener(this._onSearchChange);
    SearchStore.addListingsChangeListener(this._onListingsChange);
    SearchStore.addListingHoverChangeListener(this._onListingHover);
    SearchStore.addListingLeaveChangeListener(this._onListingLeave);
    this.listenForIdle();
  },

  componentWillUnmount: function () {
    SearchStore.removeSearchChangeListener(this._onSearchChange);
    SearchStore.removeListingsChangeListener(this._onListingsChange);
    SearchStore.removeListingHoverChangeListener(this._onListingHover);
    SearchStore.removeListingLeaveChangeListener(this._onListingLeave);
  },

  listenForIdle: function () {
    //creates an action to fetch listings after
    //users done dragging through map
    var that = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = that.map.getBounds(),
          formattedBounds = that.formatBounds(bounds),
          dates = SearchStore.getDates(),
          options = {};

      $.extend(options, dates, formattedBounds);
      SearchActions.mapMoved(options);
    });
  },

  _onListingHover: function () {
    var listingId = SearchStore.getListingHover()

    this.markers[listingId].setIcon({
      url: "http://res.cloudinary.com/dn7rukqow/image/upload/v1448408326/marker_happy_o0l16m.png",
      scaledSize: new google.maps.Size(26, 37),
      anchor: new google.maps.Point(15, 37)
    })
    this.markers[listingId].setAnimation(google.maps.Animation.BOUNCE);
  },

  _onListingLeave: function () {
    var listingId = SearchStore.getListingLeave()

    this.markers[listingId].setIcon({
      url: "http://res.cloudinary.com/dn7rukqow/image/upload/v1448408321/marker_sad_izdnuc.png",
      scaledSize: new google.maps.Size(27, 37),
      anchor: new google.maps.Point(15, 37)
    })
    this.markers[listingId].setAnimation(null);
  },

  _onListingsChange: function () {
    this.removeCurrentMarkers();
    var listings = SearchStore.getListings();
    this.dropListingMarkers(listings);
  },

  _onSearchChange: function () {
    var place = SearchStore.getPlace(),
        dates = SearchStore.getDates(),
    //get bounds while also updating this.map
        bounds = this.retrieveBounds(place),
    //format bounds for ajax request
        formattedBounds = this.formatBounds(bounds),
        options = {};

    $.extend(options, dates, formattedBounds);

    this.setState({
      center: place
    });

    SearchActions.mapMoved(options);
  },

  retrieveBounds: function (place) {
    //google api doesnt always return a viewport
    // this is checking what google returned
    if (place.viewport) {
       this.map.fitBounds(place.viewport);
     } else {
       this.map.setCenter(place.location);
       this.map.setZoom(15);
     }
     return this.map.getBounds();
  },

  formatBounds: function(bounds) {
    var boundsArr = bounds.toString()
      .replace(/[()]/g,'')
      .replace(/ /g,'')
      .split(',');

    return (
      {
        north: parseFloat(boundsArr[2]),
        east: parseFloat(boundsArr[1]),
        south: parseFloat(boundsArr[0]),
        west: parseFloat(boundsArr[3])
      }
    );
  },

  removeCurrentMarkers: function () {
    // this.markers.forEach( function (marker) {
    //   // this is google api way of removing marker
    //   // from map
    //   marker.setMap(null);
    // });
    // // remove old markers from this.markers
    // this.markers.length = 0;

    for (var marker in this.markers) {
      if (this.markers.hasOwnProperty(marker)) {
        this.markers[marker].setMap(null)
      }
    }

    this.markers = {};
  },

  dropListingMarkers: function (listings) {
    //iterate through fetched listings, adding
    //a marker per listing
    for (var l = 0; l < listings.length; l++) {
      var marker = this.markMap(listings[l]),
          listingId = listings[l].id;
      this.markers[listingId] = marker;
    }
  },

  markMap: function (listing) {
    var ghostIcon = {
      url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1448408321/marker_sad_izdnuc.png',
      scaledSize: new google.maps.Size(27, 37),
      anchor: new google.maps.Point(15, 37)
    };

    var position = new google.maps.LatLng(listing.lat, listing.lng),
        marker = new google.maps.Marker({
          position: position,
          map: this.map,
          icon: ghostIcon
        });
    return marker;
  },

  render: function () {
    return (
      <div id='map-container'>
        <div id='map' ref='map'></div>
      </div>
    );
  }
});
