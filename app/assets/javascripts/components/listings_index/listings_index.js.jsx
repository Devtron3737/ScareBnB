var ListingsIndex = React.createClass({
  componentDidMount: function () {
    // console.log(this.props.params.search);
  },

  render: function () {
    // <Dates checkIn={this.props.query.checkin}
    //        checkOut={this.props.query.checkOut}
    // />
    console.log('in listing index')
    console.log(this.props.params.check_in)

    var options = {
      indexPage: true,
      place: this.props.params.search,
      check_in: this.props.params.check_in,
      check_out: this.props.params.check_out
    };

    return(
      <div>
        <NavBar search={options} />
        <div className='listing-contents clearfix' >
          <Dates search={options} />
          <ListingsList />
        </div>
        <Map  search={options} />
      </div>
    );
  }
});
