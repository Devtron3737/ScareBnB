var ListingsIndex = React.createClass({

  handleDatesChange: function (checkIn, checkOut) {
    var dates = {
      checkIn: checkIn,
      checkOut: checkOut
    }

    SearchActions.dateChange(dates)
  },

  // _onDateChange: function () {
  //   var dates = SearchStore.getDates()
  //
  // },

  render: function () {
    // <Dates checkIn={this.props.query.checkin}
    //        checkOut={this.props.query.checkOut}
    // />
    // console.log('in listing index')
    // console.log(this.props.params.checkIn)

    var options = {
      indexPage: true,
      place: this.props.params.search,
    };

    // took search param of options out of Map

    return(
      <div>
        <NavBar search={options} />
        <div className='listing-contents' >

          <div className='index-dates-list clearfix'>
            <Dates onChangeCallback={this.handleDatesChange} />
          </div>


          <div id='listings-list-container'>
              <ListingsList />
          </div>

        </div>

        <Map />
      </div>
    );
  }
});
