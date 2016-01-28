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
    if (this.state.userPic.url) {
      sweetAlert({
        title: "Oops",
        text: "There's already  a user pic for this user!",
        type: "error",
        allowOutsideClick: true,
        confirmButtonColor: "#ff4d4d",
        confirmButtonText: "Ok"
      })
    } else {
      CloudinaryUtil.picUpload( function (error, result) {
        ManageActions.addUserPic({url: result[0].url})
      })
    }
  },

  handleLeave: function () {
    this.setState({
      dropDown: false
    })
  },

  render: function () {
    var dropDown;

    if (this.state.dropDown) {
      dropDown = (
        <ul className='account-dropdown-list'>
          <li><Link to='/user'>Manage listings and reservations</Link></li>
          <li onClick={this.handlePicUpload}>Upload user picture</li>
          <li onClick={SessionUtil.logOut}>Log out</li>
        </ul>
      )
    }

    return(
      <div id='nav-account' onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave}>
        <img src={this.state.userPic.url || "https://s3-us-west-1.amazonaws.com/scarebnbdev/no-profile-img_vqxn7j.gif"}
             id='nav-userPic' height='45' width='45' />
        {dropDown}
      </div>

    )
  }
})
