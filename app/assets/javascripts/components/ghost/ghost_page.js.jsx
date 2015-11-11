var GhostPage = React.createClass({
  getInitialState: function () {
    return({
      listings: [],
      reservations: []
    });
  },

  componentDidMount: function () {
    var userId = this.props.params.userId;
    ManageActions.getUserInfo(userId);
  },

  getListings: function () {
    //retrieve from store
  },

  getReservations: function () {
    //retrieve from store
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
