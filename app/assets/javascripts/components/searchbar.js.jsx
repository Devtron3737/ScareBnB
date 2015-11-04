var SearchBar = React.createClass({
  getInitialState: function () {
    return {value: ""};
  },

  componentDidMount: function () {
    var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(35.260843, -120.679486),
      new google.maps.LatLng(35.295317, -120.643094)
    );
    var options = {bounds: defaultBounds},
        searchField = document.getElementById('search-field');
    this.autocomplete = new google.maps.places.Autocomplete(searchField, options);
  },


  //formats PlaceResult object. creates action_preparer
  handleSubmit: function () {
    event.preventDefault();
    var place = this.autocomplete.getPlace();
    var viewport = place.geometry.viewport;

    // array of coords, [S E N W]
    var bounds = viewport.toString()
      .replace(/[()]/g,'')
      .replace(/ /g,'')
      .split(',');

    var boundsObject = {
      north: bounds[2],
      east: bounds[1],
      south: bounds[0],
      west: bounds[3]
    };

    //need to encompass searchfield, guests, and dates
    // in same <form>. then setup defaults if things are
    // empty

    SearchActions.listingsSearch(boundsObject);
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
               placeholder='Where are you going?'>
               {this.state.value}
          </input>
        </form>
      </div>


    );
  }
});
