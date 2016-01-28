var ManageListingsBlock = React.createClass({
  handleListingDelete: function () {
    ManageActions.deleteListing({
      listingId: this.props.listing.id
    });
  },

  render: function () {
    var listing = this.props.listing,
        listingLink = '/listing/' + listing.id,
        listingPictureUrl = (listing.pictures[0]) ?
                             listing.pictures[0].url :
                             "https://s3-us-west-1.amazonaws.com/scarebnbdev/no_image.jpg"


    return (
      <div className='manage-category-block clearfix'>
        <div className='manage-category-block-info clearfix'>

          <div className='manage-category-block-pic'>
            <Link to={listingLink}>
              <img src={listingPictureUrl} height='75' />
            </Link>
          </div>

          <div>
            <div className='category-details'>{listing.title}</div>
            <div className='category-details'>{listing.address}</div>
          </div>

        </div>

        <div className='manage-category-block-btns'>
          <button onClick={this.handleListingDelete} className='button' id='manage-category-remove' >Remove</button>
        </div>
      </div>
    );
  }
});
