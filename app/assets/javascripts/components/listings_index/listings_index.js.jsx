var ListingsIndex = React.createClass({

  handleDatesChange: function (checkIn, checkOut) {
    console.log('in index handleDateChange')
    var dates = {
      checkIn: checkIn,
      checkOut: checkOut
    }

    SearchActions.dateChange(dates)
    // adjust flux to handle who dates object
    // instead of just one dates
  },

  _onDateChange: function () {
    var dates = SearchStore.getDates()

  },

  render: function () {
    // <Dates checkIn={this.props.query.checkin}
    //        checkOut={this.props.query.checkOut}
    // />
    // console.log('in listing index')
    // console.log(this.props.params.checkIn)

    var options = {
      indexPage: true,
      place: this.props.params.search,
      // checkIn: this.props.params.checkIn,
      // checkOut: this.props.params.checkOut
    };

    return(
      <div>
        <NavBar search={options} />
        <div className='listing-contents' >

          <Dates onChangeCallback={this.handleDatesChange} />

          <ListingsList />
        </div>
        <Map  search={options} />
      </div>
    );
  }
});
