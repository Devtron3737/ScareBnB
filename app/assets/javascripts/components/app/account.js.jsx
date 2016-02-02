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
    console.log('_onUserPicChange', SearchStore.getUserPic())
    this.setState({userPic: SearchStore.getUserPic()})

  },

  handleHover: function () {
    this.setState({
      dropDown: true
    })
  },

  handlePicUpload: function () {
    console.log('handling pic upload', thisstate.userPic.url)
    if (this.state.userPic.url) {
      console.log('inside upload pic fail, bueno!')
      sweetAlert({
        title: "Oops",
        text: "There's already  a user pic for this user.",
        type: "error",
        allowOutsideClick: true,
        confirmButtonColor: "#ff4d4d",
        confirmButtonText: "Ok"
      })
    } else {
    console.log('in aws upload, no bueno')
    AWSUtil.picUpload(e.target.files[0], function (error, result) {
      if (error) {
        sweetAlert({
          title: "Whoops",
          text: "Something went wrong with your image upload.",
          type: "error",
          allowOutsideClick: true,
          confirmButtonColor: "#ff4d4d",
          confirmButtonText: "Ok"
        })
      } else {
      ManageActions.addUserPic({url: result.Location})
      }
    })
      // CloudinaryUtil.picUpload( function (error, result) {
      //   ManageActions.addUserPic({url: result[0].url})
      // })
    }
  },

  handleLeave: function () {
    this.setState({
      dropDown: false
    })
  },

  render: function () {
    var dropDown,
        uploadElement;

    // let new user add user pic
    if (this.state.userPic.url === undefined) {
      uploadElement = (
        <li>
          <label htmlFor='manage-new-picupload' id='listing-pic-upload-label'>Upload User Pic</label>
          <input type='file'
                 id='manage-new-picupload'
                 onChange={this.handlePicUpload}>
          </input>
        </li>
      )
    }

    if (this.state.dropDown) {
      dropDown = (
        <ul className='account-dropdown-list'>
          <li><Link to='/user'>Manage listings and reservations</Link></li>
          {uploadElement}
          <li onClick={SessionUtil.logOut}>Log out</li>
        </ul>
      )
    }

    return(
      <div id='nav-account' onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave}>
        <img src={this.state.userPic.url || "https://s3-us-west-1.amazonaws.com/scarebnbdev/no-profile-img.gif"}
             id='nav-userPic' height='45' width='45' />
        {dropDown}
      </div>

    )
  }
})
