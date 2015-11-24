var ListingsIndex = React.createClass({

  handleDatesChange: function (checkIn, checkOut) {
    var dates = {
      checkIn: checkIn,
      checkOut: checkOut
    }

    SearchActions.dateChange(dates)
  },

  render: function () {

    var options = {
      indexPage: true,
      place: this.props.params.search,
    };

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
