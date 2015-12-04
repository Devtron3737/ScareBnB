var ListingBlock = React.createClass({

  mixins: [ReactRouter.History],

  handleClick: function () {
    var listingPath = '/listing/' + this.props.listing.id

    this.history.pushState(null, listingPath)
  },

  handleHover: function () {
    SearchActions.listingHover(this.props.listing.id)
  },

  handleLeave: function () {
    SearchActions.listingLeave(this.props.listing.id)
  },

  render: function () {
    var listing = this.props.listing,
        listingPath = '/listings/' + listing.id,
        listingPictureUrl = (listing.pictures[0]) ?
                             listing.pictures[0].url :
                             "http://res.cloudinary.com/dn7rukqow/image/upload/v1448399595/no_image_available_qhdwk9.jpg",
        userPictureUrl = (listing.user_picture) ?
                          listing.user_picture.url :
                          "http://res.cloudinary.com/dn7rukqow/image/upload/v1448399277/no-profile-img_vqxn7j.gif";

    return (
      <div className='listing-block'
           onClick={this.handleClick}
           onMouseOver={this.handleHover}
           onMouseLeave={this.handleLeave}
      >
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
