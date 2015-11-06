var SearchBar = React.createClass({
  getInitialState: function () {
    return {value: ""};
  },

  componentDidMount: function () {
    var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(37.54025472421631, -122.6264275146484),
      new google.maps.LatLng(37.97454774677482, -122.2487724853516)
      //make default sf
    );
    var options = {bounds: defaultBounds},
        searchField = document.getElementById('search-field');
    this.autocomplete = new google.maps.places.Autocomplete(searchField, options);
  },



  handleSubmit: function () {
    event.preventDefault();
    var place = this.autocomplete.getPlace();
    SearchActions.placeSearch(place.geometry);
    // need to encompass searchfield, guests, and dates
    // in same <form>. then setup defaults if things are
    // empty
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
