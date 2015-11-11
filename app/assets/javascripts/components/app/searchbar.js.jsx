var SearchBar = React.createClass({
  getInitialState: function () {
    return {value: this.props.search};
  },

  componentDidMount: function () {
    var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(37.54025472421631, -122.6264275146484),
      new google.maps.LatLng(37.97454774677482, -122.2487724853516)
    );
    var options = {bounds: defaultBounds},
        searchField =  document.getElementById('search-field');
    this.autocomplete = new google.maps.places.Autocomplete(searchField, options);
    this.placeService = new google.maps.places.PlacesService(searchField);

    this.handleSubmit();
  },

  handleSubmit: function () {
    event.preventDefault();

    var place = this.autocomplete.getPlace();

    if (place && place.geometry) {
      console.log('place wasnt undefined!');
      console.log(place);
      SearchActions.placeSearch(place.geometry);
    } else {
      var service = new google.maps.places.AutocompleteService();
      service.getPlacePredictions(
        {input: this.state.value},
        this.selectFirstPrediction
      );
    }
    // need to encompass searchfield, guests, and dates
    // in same <form>. then setup defaults if things are
    // empty
  },

  selectFirstPrediction: function (predictions) {
    var placeId = predictions[0].place_id;
    this.placeService.getDetails(
      {placeId: placeId},
      function (place) {
        console.log('in selectFirstPrediction');
        console.log(place);
        SearchActions.placeSearch(place.geometry);
      }
    );
  },

  handleChange: function () {
    this.setState({value: event.target.value});
  },

  render: function () {
    return(
      <div className='search-field-container clearfix'>
        <img src={'/images/mag_glass_grey.png'} className='mag-glass-pic' alt='' height='42' />
        <form onSubmit={this.handleSubmit}>
          <input id='search-field'
               type='text'
               onChange={this.handleChange}
               placeholder='Where are you going?'
               value={this.state.value}>
          </input>
        </form>
      </div>


    );
  }
});
