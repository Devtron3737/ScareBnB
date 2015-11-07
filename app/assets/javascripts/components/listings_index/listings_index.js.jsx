var Listings = React.createClass({
  render: function () {
    return(
      <div>
        <NavBar />
        <div className='listing-contents clearfix' >
          <Dates />
          <ListingsList />
        </div>
        <Map />
      </div>
    );
  }
});
