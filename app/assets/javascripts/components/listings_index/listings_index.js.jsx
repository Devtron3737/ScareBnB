var ListingsIndex = React.createClass({
  componentDidMount: function () {
    // console.log(this.props.params.search);
  },

  render: function () {
    // <Dates checkIn={this.props.query.checkin}
    //        checkOut={this.props.query.checkOut}
    //        guests={this.props.query.guests}
    // />

    return(
      <div>
        <NavBar search={this.props.params.search}/>
        <div className='listing-contents clearfix' >
          <Dates />
          <ListingsList />
        </div>
        <Map />
      </div>
    );
  }
});
