var ListingsIndex = React.createClass({

  handleDatesChange: function (check_in, check_out) {
    console.log('in index handleDateChange')
    var dates = {
      check_in: check_in,
      check_out: check_out
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
    // console.log(this.props.params.check_in)

    var options = {
      indexPage: true,
      place: this.props.params.search,
      // check_in: this.props.params.check_in,
      // check_out: this.props.params.check_out
    };

    return(
      <div>
        <NavBar search={options} />
        <div className='listing-contents clearfix' >

          <Dates onChangeCallback={this.handleDatesChange} />

          <ListingsList />
        </div>
        <Map  search={options} />
      </div>
    );
  }
});
