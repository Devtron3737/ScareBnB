var Manage = React.createClass({
  getInitialState: function () {
    return {section: "listings"};
  },

  toListings: function () {
    if (this.state.section !== "listings") {
      this.setState({section: "listings"});
    }
  },

  toReservations: function () {
    if (this.state.section !== "reservations") {
      this.setState({section: "reservations"});
    }
  },

  render: function () {
    var section = "",
        listings = this.props.listings,
        reservations = this.props.reservations;
    if (this.state.section === "listings") {
      section = <ManageListings listings={listings} />;
    } else {
      section = <ManageReservations reservations={reservations} />;
    }

    return(
      <div className='manage-container clearfix'>
        <div className='manage-category'>
          <section onClick={this.toListings}>
            Your Listings
          </section>

          <section onClick={this.toReservations}>
            Your Reservations
          </section>

          <button onClick={this.handleAddListing} className='button' id='manage-listing-addlisting' type='button'>Add Listing</button>

        </div>

        <div className='manage-block'>
          { section }
        </div>
      </div>
    );
  }
});
