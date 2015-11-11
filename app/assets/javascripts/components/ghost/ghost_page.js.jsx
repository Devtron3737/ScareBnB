var GhostPage = React.createClass({
  render: function () {
    console.log('in ghost page');
    console.log('user id: ' + this.props.params.userId);
    return(
      <div>
        <NavBar />
        <Manage userId={this.props.params.userId}  />
        <Footer />
      </div>
    );
  }
});
