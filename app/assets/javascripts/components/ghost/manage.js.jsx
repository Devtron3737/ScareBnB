var Manage = React.createClass({
  render: function () {
    var section = "";
    if (this.state.section === "listings") {
      section = <ManageListings userId={this.props.userId} />;
    } else {
      section = <ManageReservations userId={this.props.userId} />;
    }

    return(
      <div>
        <div>

          <section>
            Your Listings
          </section>

          <section>
            Your Reservations
          </section>
        </div>
        { section }
      </div>
    );
  }
});
