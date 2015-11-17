var NewListing = React.createClass({
  getInitialState: function () {
    return {value: ""}
  },

  componentDidMount: function () {
    this.autocomplete = SearchUtil.createGoogleAutocomplete('manage-new-address');
  },

  handleChange: function () {
    this.setState({value: event.target.value});
  },

  handleSubmit: function () {
    // action to add listing with associated info
  },

  handlePicUpload: function () {
    cloudinary.openUploadWidget(
      {
        cloud_name: window.CLOUDINARY_CLOUD_NAME,
        upload_preset: window.CLOUDINARY_UPLOAD_PRESET,
        theme: 'white'

      },
      function(error, result) { console.log(error, result) });
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
                Upload photos
        </button>

        <button onClick={this.handleSubmit}
                className='button'
                id='manage-new-submit' >
                List
        </button>

      </div>
    )
  }
});
