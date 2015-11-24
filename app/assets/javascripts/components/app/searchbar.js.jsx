var SearchBar = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    var value = this.props.search.place;
    return {value: value};
  },

  componentDidMount: function () {
    this.autocomplete = SearchUtil.createGoogleAutocomplete('search-field');
    // this.searchField =  document.getElementById('search-field');
    // this.placeService = new google.maps.places.PlacesService(this.searchField);

    if (this.props.search.indexPage) {
      this.handleSubmit();
    }
  },

  handleSubmit: function () {
    event.preventDefault();

    if (!this.props.search.indexPage) {
      var searchQuery =  document.getElementById('search-field');
      this.history.pushState(null, '/listings/' + searchQuery.value);
      return;
    }

    var extractOptions = {
      place: this.autocomplete.getPlace(),

      elementId: 'search-field',

      placeDefined: function (place) {
        SearchActions.placeSearch(place.geometry)
      },

      placeUndefined: function (predictions) {
        var predictionId = predictions[0].place_id;
        this.placeService.getDetails(
          {placeId: predictionId},
          function (prediction) {
            SearchActions.placeSearch(prediction.geometry)
          }
        )
       }
     }

    SearchUtil.extractPlace(extractOptions)


    // window.location.hash = '/listings/' + searchValue;
    // if (place && place.geometry) {
    //   SearchActions.placeSearch(place.geometry);
    // } else {
    //   var service = new google.maps.places.AutocompleteService();
    //   service.getPlacePredictions(
    //     {input: this.state.value},
    //     this.selectFirstPrediction
    //   );
    // }
    // need to encompass searchfield, guests, and dates
    // in same <form>. then setup defaults if things are
    // empty
  },

  // selectFirstPrediction: function (predictions) {
  //   var placeId = predictions[0].place_id;
  //   this.placeService.getDetails(
  //     {placeId: placeId},
  //     function (place) {
  //       SearchActions.placeSearch(place.geometry);
  //     }
  //   );
  // },

  handleChange: function () {
    this.setState({value: event.target.value});
  },

  render: function () {
    return(
      <div className='search-field-container clearfix'>
        <img src={'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811045/mag_glass_grey_ugf9tm.png'} className='mag-glass-pic' alt='' height='38' />
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
