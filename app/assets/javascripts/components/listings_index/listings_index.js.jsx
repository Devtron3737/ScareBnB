var ListingsIndex = React.createClass({
  componentDidMount: function () {
    // console.log(this.props.params.search);
  },

  render: function () {
    // <Dates checkIn={this.props.query.checkin}
    //        checkOut={this.props.query.checkOut}
    //        guests={this.props.query.guests}
    // />

    var options = {
      indexPage: true,
      place: this.props.params.search
    };

    return(
      <div>
        <NavBar search={options} />
        <div className='listing-contents clearfix' >
          <Dates />
          <ListingsList />
        </div>
        <Map />
      </div>
    );
  }
});
