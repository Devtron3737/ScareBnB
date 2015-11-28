var Account = React.createClass({
  getInitialState: function () {
    return {userPic: ""}
  },

  componentDidMount: function () {
    SearchStore.addUserPicChangeListener(this._onUserPicChange)
    SearchActions.fetchUserPic();
  },

  componentWillUnmount: function () {
    SearchStore.removeUserPicChangeListener(this._onUserPicChange)
  },

  _onUserPicChange: function () {
    this.setState({userPic: SearchStore.getUserPic()})
  },

  render: function () {
    // changed h2 id from home-accout to nav-account
    // adjust stylesheet
    var userPicUrl = (this.state.userPic) ?
                      this.state.userPic.url :
                      "http://res.cloudinary.com/dn7rukqow/image/upload/v1448399277/no-profile-img_vqxn7j.gif"

    return(
      <h2 id='nav-account'>
          <Link to='/user'>
            <img src={userPicUrl} id='nav-userPic' height='50' width='50' />
          </Link>
      </h2>
    )
  }
})
