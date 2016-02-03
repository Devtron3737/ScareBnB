var SearchBar = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {value: this.props.search.place};
  },

  componentDidMount: function () {
    this.autocomplete = SearchUtil.createGoogleAutocomplete('search-field');

    if (this.props.search.indexPage) {
      this.handleSubmit();
    }
  },

  handleSubmit: function () {
    event.preventDefault();

    if (!this.props.search.indexPage) {
      var searchQuery =  document.getElementById('search-field');
      this.history.pushState(null, '/listings/' + (searchQuery.value || "San Francisco"));
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
  },

  handleChange: function () {
    this.setState({value: event.target.value});
  },

  render: function () {
    return(
      <div className='search-field-container clearfix'>
        <img src={'https://s3-us-west-1.amazonaws.com/scarebnbprod/mag_glass_grey.png'}
             className='mag-glass-pic'
             alt=''
             height='38' />
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
