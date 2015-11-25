var ManageListingsBlock = React.createClass({
  handleListingDelete: function () {
    ManageActions.deleteListing({
      // userId: this.props.listing.ghost_id,
      listingId: this.props.listing.id
    });
  },

  render: function () {
    var listing = this.props.listing,
        listingLink = '/listing/' + listing.id,
        listingPictureUrl = (listing.pictures[0]) ?
                             listing.pictures[0].url :
                             "http://res.cloudinary.com/dn7rukqow/image/upload/v1448399595/no_image_available_qhdwk9.jpg"


    return (
      <div className='manage-category-block clearfix'>
        <div className='manage-category-block-info clearfix'>

          <div className='manage-category-block-pic'>
            <Link to={listingLink}>
              <img src={listingPictureUrl} height='75' />
            </Link>
          </div>

          <div>
            <div>{listing.title}</div>
            <div>{listing.address}</div>
          </div>

        </div>

        <div className='manage-category-block-btns'>
          <button onClick={this.handleListingDelete} className='button' id='manage-category-remove' >Remove</button>
        </div>
      </div>
    );
  }
});
