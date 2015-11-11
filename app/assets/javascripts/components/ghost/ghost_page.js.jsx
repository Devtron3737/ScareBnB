var GhostPage = React.createClass({
  getInitialState: function () {
    return({
      listings: [],
      reservations: []
    });
  },

  fetchListings: function () {

  },

  render: function () {
    console.log('in ghost page');
    console.log('user id: ' + this.props.params.userId);
    return(
      <div>
        <NavBar />
        <Manage listings={this.state.listings} reservations={this.state.reservations}  />
        <Footer />
      </div>
    );
  }
});
