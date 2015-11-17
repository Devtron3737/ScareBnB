var NewListing = React.createClass({
  getInitialState: function () {
    return {value: "", picCount: 0}
  },

  componentDidMount: function () {
    this.pics = [];
    this.autocomplete = SearchUtil.createGoogleAutocomplete('manage-new-address');
  },

  handleChange: function () {
    this.setState({value: event.target.value});
  },

  handleSubmit: function () {
    // action to add listing with associated info
    this.pics.length = 0;
    this.setState({picCount: 0})
  },

  handlePicUpload: function () {
    cloudinary.openUploadWidget(
      {
        cloud_name: window.CLOUDINARY_CLOUD_NAME,
        upload_preset: window.CLOUDINARY_UPLOAD_PRESET,
        theme: 'white'
      },
      function (error, result) {
        this.pics.push(result[0].url);
        this.setState({picCount: this.pics.length});
      }
    )
  },

  render: function () {

    return(
      <div id='manage-new-container'>

        <div className='manage-block-title'>List Your Haunting</div>

        <ul id='manage-new-list'>
          <li className='clearfix'>Title <input type='text' id='manage-new-title' placeholder='ex: Winchester Mystery House' /></li>
          <li className='clearfix'>
            Address
            <input type='text'
                   id='manage-new-address'
                   placeholder='ex: 525 S Winchester Blvd, San Jose, CA'
                   onChange={this.handleChange}
                   value={this.state.value}>
            </input>
          </li>
          <li className='clearfix'>Description <input type='textfield' id='manage-new-description' placeholder='ex: A horribly confusing abode' /></li>
          <li className='clearfix'>Toenails <input type='text' id='manage-new-toenails' /></li>
        </ul>

        <button onClick={this.handlePicUpload}
                className='button'
                id='manage-new-picupload' >
                Upload photo
        </button>
        <div>Photo count: {this.state.picCount}</div>

        <button onClick={this.handleSubmit}
                className='button'
                id='manage-new-submit' >
                List
        </button>

      </div>
    )
  }
});
