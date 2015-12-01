var Account = React.createClass({
  getInitialState: function () {
    return {
      userPic: "",
      dropDown: false
    }
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

  handleHover: function () {
    this.setState({
      dropDown: true
    })
  },

  handlePicUpload: function () {
    cloudinary.openUploadWidget(
      {
        cloud_name: window.CLOUDINARY_CLOUD_NAME,
        upload_preset: window.CLOUDINARY_UPLOAD_PRESET,
        theme: 'white'
      },
      function (error, result) {
        console.log(result[0].url)

        ManageActions.addUserPic({url: result[0].url})
      }
    )
  },

  handleLeave: function () {
    this.setState({
      dropDown: false
    })
  },

  handleLogOut: function () {
    SessionUtil.logOut()
  },

  render: function () {
    // changed h2 id from home-accout to nav-account
    // adjust stylesheet
    var dropDown,
        userPicUrl = this.state.userPic.url || "http://res.cloudinary.com/dn7rukqow/image/upload/v1448399277/no-profile-img_vqxn7j.gif"

    console.log(this.state.userPic)
    if (this.state.dropDown) {
      dropDown = (
        <ul className='account-dropdown-list'>
          <li><Link to='/user'>Manage listings and reservations</Link></li>
          <li onClick={this.handlePicUpload}>Upload user picture</li>
          <li onClick={this.handleLogOut}>Log out</li>
        </ul>
      )
    }

    return(
      <div id='nav-account' onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave}>
        <img src={userPicUrl} id='nav-userPic' height='45' width='45' />
        {dropDown}
      </div>

    )
  }
})
