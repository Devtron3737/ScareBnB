var Manage = React.createClass({
  render: function () {
    var section = "";
    if (this.state.section === "listings") {
      section = <ManageListings listings={listings} />;
    } else {
      section = <ManageReservations userId={this.props.userId} />;
    }

    return(
      <div>
        <div>
          <section onClick={this.handleClick}>
            Your Listings
          </section>

          <section onClick={this.handleClick}>
            Your Reservations
          </section>
        </div>

        { section }
      </div>
    );
  }
});
