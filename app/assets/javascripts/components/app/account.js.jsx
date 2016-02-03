var Account = React.createClass({
  getInitialState: function () {
    return {
      userPic: "",
      uploadingPic: false,
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

  uploadingPic: function () {
    this.setState({uploadingPic: true})
  },

  handlePicUpload: function (e) {
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

        this.setState({
          uploadingPic: false,
          dropDown: false
        })
      } else {
        ManageActions.addUserPic({url: result.Location})
          this.setState({
            uploadingPic: false,
            dropDown: false
          })
      }
    }.bind(this))
  },

  handleLeave: function () {
    if (this.state.uploadingPic === false) {
      this.setState({
        dropDown: false
      })
    }
  },

  render: function () {
    var dropDown,
        uploadElement;

    // let new user add user pic
    if (this.state.userPic.url === undefined) {
      uploadElement = (
        <li>
          <label htmlFor='userpic-upload' id='userpic-upload-label'>
            Upload User Pic
          </label>
          <input type='file'
                 id='userpic-upload'
                 className='picupload'
                 onClick={this.uploadingPic}
                 onChange={this.handlePicUpload} >
          </input>
        </li>
      )
    }

    // user is hovering over account icon
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
