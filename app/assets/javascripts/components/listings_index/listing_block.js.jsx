var ListingBlock = React.createClass({

  mixins: [ReactRouter.History],

  handleClick: function () {
    // event.preventDefault()
    var listingPath = '/listing/' + this.props.listing.id

    this.history.pushState(null, listingPath)
  },

  render: function () {
    var listing = this.props.listing,
        listingPath = '/listings/' + listing.id,
        listingPictureUrl = (listing.pictures[0]) ?
                             listing.pictures[0].url :
                             "http://res.cloudinary.com/dn7rukqow/image/upload/v1448398749/noimage_m03tto.svg",
        userPictureUrl = (listing.user_picture) ?
                          listing.user_pictures.url :
                          "http://res.cloudinary.com/dn7rukqow/image/upload/v1448399277/no-profile-img_vqxn7j.gif";


    //change image
    //   params={{listingId: listing.id}}
    return (
      <div className='listing-block' onClick={this.handleClick}>
          <img className='listing-pic' src={listingPictureUrl} height='240' width='350' />

          <div id='listing-title'>{listing.title}</div>
          <div id='listing-address'>{listing.address}</div>
          <div className='listing-toe-nail'>
            {listing.toe_nails}
            <img className='toenail-pic' src={'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811047/toenail_on49wz.png'} height='40' />
          </div>
          <img className='listing-user-pic' src={userPictureUrl} height='60' width='60' />
      </div>
    )
  }
});
