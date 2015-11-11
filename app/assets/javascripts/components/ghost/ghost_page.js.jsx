var GhostPage = React.createClass({
  getInitialState: function () {
    return({
      listings: [],
      reservations: []
    });
  },

  componentDidMount: function () {
    // var userId = this.props.params.userId;
    // ManageStore.addUserChangeListener(this._onChange);
    // ManageActions.getUserInfo(userId);
  },

  _onChange: function () {
    var userInfo = ManageStore.getUser();

    this.setState({
      listings: userInfo.listings,
      reservations: userInfo.reservations
    });
  },

  render: function () {
    console.log('in ghost page');
    console.log(this.state.listings);
    console.log(this.state.reservations);
    var options = {
      indexPage: false,
      place: ""
    };

    return(
      <div>
        <NavBar search={options} />
        <Manage listings={this.state.listings} reservations={this.state.reservations}  />
      </div>
    );
  }
});
