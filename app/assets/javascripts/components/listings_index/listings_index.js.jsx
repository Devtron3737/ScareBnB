var ListingsIndex = React.createClass({

  handleDateChange: function (type, date) {
    console.log('in index handleDateChange')
    console.log(type)
    console.log(date)
    SearchActions.dateChange(type, date)
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

          <div className='dates clearfix'>
            <div id='dates-title'>Dates</div>
            <div className='dates-list clearfix'>
              <DateField onChangeCallback={this.handleDateChange} type='check_in' />
              <DateField onChangeCallback={this.handleDateChange} type='check_out' />
            </div>
          </div>

          <ListingsList />
        </div>
        <Map  search={options} />
      </div>
    );
  }
});
