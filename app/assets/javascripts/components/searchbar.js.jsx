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

  handleSubmit: function () {
    //this should create an action to submit
    // fetch new listings list
    event.preventDefault();
    var place = this.autocomplete.getPlace();
    var viewport = place.geometry.viewport;

    // S E N W
    var bounds = viewport.toString()
      .replace(/[()]/g, '')
      .replace(/ /g,'')
      .split(',');

    var boundsFormatted = {
      north: bounds[2],
      east: bounds[1],
      south: bounds[0],
      west: bounds[3]
    };

    $.ajax({
      url: '/api/listings.json',
      method: 'GET',
      data: boundsFormatted,
      success: function (listings) {
        console.log('success!');
        console.log(listings);
      }
    });
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
