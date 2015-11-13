var GhostPage = React.createClass({
  getInitialState: function () {
    return({
      listings: [],
      reservations: []
    });
  },

  componentDidMount: function () {
    var userId = this.props.params.userId;
    console.log('in ghost page mounting, id: ' + userId);
    ManageStore.addUserChangeListener(this._onChange);
    ManageActions.getUserInfo(userId);
  },

  componentWillUnmount: function () {
    ManageStore.removeUserChangeListener(this._onChange);
  },

  _onChange: function () {
    var userInfo = ManageStore.getUser();

    this.setState({
      listings: userInfo.listings,
      reservations: userInfo.reservations
    });
  },

  render: function () {
    var options = {
      indexPage: false,
      place: ""
    };

    return(
      <div>
        <NavBar search={options} />
        <Manage listings={this.state.listings} reservations={this.state.reservations}  />
        <Footer />
      </div>
    );
  }
});
