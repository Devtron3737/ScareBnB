var GhostPage = React.createClass({
  getInitialState: function () {
    return({
      listings: [],
      reservations: []
    });
  },

  componentDidMount: function () {
    ManageStore.addUserChangeListener(this._onChange);
    ManageActions.getUserInfo();
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

        <Manage userId={this.props.params.userId}
                listings={this.state.listings}
                reservations={this.state.reservations}
        />

        <Footer />
      </div>
    );
  }
});
