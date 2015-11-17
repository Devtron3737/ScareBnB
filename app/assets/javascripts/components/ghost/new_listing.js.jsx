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
    var coords = this.getCoords()
    console.log('in handle submit of new listing')
    console.log(coords)
    var listingAttrs = {
      title: this.getVal('manage-new-title'),
      toe_nails: this.getVal('manage-new-toenails'),
      address: this.getVal('manage-new-address'),
      description: this.getVal('manage-new-description'),
      ghost_id: this.props.userId,
      pictures: this.pictures
      lat: coords.lat
      lng: coords.lng

    }

    ManageActions.createListing(listingAttrs);

    this.pics.length = 0;
    this.setState({picCount: 0})
  },

  getVal: function (id) {
    return document.getElementById(id).value
  },

  getCoords: function () {
    var coords = {
      lat: "",
      lng: ""
    }

    var extractOptions = {
      place: this.autocomplete.getPlace(),

      elementId: 'manage-new-address',

      placeDefined: function (place) {
        console.log('in placeDefined')
        console.log(place)
        coords.lat = place.geometry.location.lat()
        coords.lng = place.geometry.location.lng()
      },

      placeUndefined: function (predictions) {
        console.log('in placeUndefined')
        console.log(predictions)
        var predictionId = predictions[0].place_id;
        this.placeService.getDetails(
          {placeId: predictionId},
          function (prediction) {
            coords.lat = prediction.geometry.location.lat()
            coords.lng = prediction.geometry.location.lng()
          }
        )
      }
    }

    SearchUtil.extractPlace(extractOptions)

    return coords;
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
