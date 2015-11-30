var NewListing = React.createClass({
  getInitialState: function () {
    return {value: "", picCount: 0}
  },

  componentDidMount: function () {
    this.pics = [];
    this.autocomplete = SearchUtil.createGoogleAutocomplete('manage-new-address');
  },

  handleChange: function () {
    this.setState(
      {value: event.target.value},
      function () {
        console.log('in handleChange address')
        console.log(this.state.value)
      }
    );

  },

  handleSubmit: function () {
    var coords = this.getCoords(),
        listingAttrs = {
          title: this.getVal('manage-new-title'),
          toe_nails: Number(this.getVal('manage-new-toenails')),
          address: this.getVal('manage-new-address'),
          description: this.getVal('manage-new-description'),
          pictures: this.pics,
          lat: coords.lat,
          lng: coords.lng,
          amenities: JSON.stringify(["amenities"])
        }
    console.log("in handle submit")
    console.log(listingAttrs)
    this.validAttrs(listingAttrs)

    if (this.errors.length === 0) {
      console.log('after form validation')
      console.log(listingAttrs)
      ManageActions.createListing(listingAttrs);
      this.pics = [];
      this.setState({
        picCount: 0,
        value: listingAttrs.address
      })
    } else {
      sweetAlert({
        title: "Whoops",
        text: this.errors.join(", "),
        type: "error",
        allowOutsideClick: true,
        confirmButtonColor: "#ff4d4d",
        confirmButtonText: "Ok"
      })
    }
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
        coords.lat = place.geometry.location.lat()
        coords.lng = place.geometry.location.lng()
      },

      placeUndefined: function (predictions) {
        // handled in this.validAttrs
      }
    }

    console.log('in get coords')
    console.log(extractOptions)



    SearchUtil.extractPlace(extractOptions)

    return coords;
  },

  validAttrs: function (listingAttrs) {
    this.errors = [];
    if (!listingAttrs.lat || !listingAttrs.lng) {
      this.errors.push("Please choose a valid address.")
      return;
    }

    for (var attr in listingAttrs) {
      if (attr === "pictures") {
        continue;
      } else if (listingAttrs[attr] === "" || listingAttrs[attr] === 0) {
          this.errors.push(attr + " cannot be blank")
      }
    }
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
        console.log("in handlePicUpload")
        console.log(this.pics)
        this.setState({picCount: this.pics.length});
      }.bind(this)
    )
  },

  render: function () {

    return(
      <div>

        <div className='manage-block-title'>List Your Haunting</div>

          <div id='manage-new-content'>
            <input onChange={this.onTitleChange} type='text' className='manage-new-input' id='manage-new-title' placeholder='Title' />
            <input type='text'
                   className='manage-new-input'
                   id='manage-new-address'
                   placeholder='Address'
                   onChange={this.handleChange}
                   value={this.state.value}>
            </input>
            <input type='textfield' className='manage-new-input' id='manage-new-description' placeholder='Description' />
            <input type='text' className='manage-new-input' id='manage-new-toenails' placeholder='Toenails' />

            <button onClick={this.handlePicUpload}
                    className='button'
                    id='manage-new-picupload' >
                    Upload photo
            </button>

            <div id='new-listing-photocount'>Photo count: {this.state.picCount}</div>

            <button onClick={this.handleSubmit}
                    className='button'
                    id='manage-new-submit' >
                    List
            </button>
          </div>
      </div>
    )
  }
});
