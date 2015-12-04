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

  toAddListing: function () {
    if (this.state.section !== "newListing") {
      this.setState({section: "newListing"});
    }
  },

  render: function () {
    var section = "",
        listings = this.props.listings,
        reservations = this.props.reservations,
        userId = this.props.userId;

    switch (this.state.section) {
      case "listings":
        section = <ManageListings listings={listings} />;
        break;
      case "reservations":
        section = <ManageReservations reservations={reservations} />;
        break;
      case "newListing":
        section = <NewListing userId={userId} />
        break;
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

          <section onClick={this.toAddListing} id='manage-listing-addlisting'>
            Add Listing
          </section>

        </div>

        <div className='manage-block'>
          { section }
        </div>
      </div>
    );
  }
});
