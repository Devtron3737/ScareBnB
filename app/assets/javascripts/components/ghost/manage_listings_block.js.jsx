var ManageListingsBlock = React.createClass({
  handleListingDelete: function () {
    ManageActions.deleteListing({
      userId: this.props.listing.ghost_id,
      listingId: this.props.listing.id
    });
  },

  render: function () {
    var listing = this.props.listing;
    var sep = ", ";
    return (
      <div className='manage-category-block clearfix'>
        <div className='manage-category-block-info'>
          <div>{listing.title}</div>
          <div>
            {listing.address}
          </div>
        </div>

        <div className='manage-category-block-btns'>
          <button onClick={this.handleListingDelete} className='button' id='manage-category-remove' >Remove</button>
        </div>
      </div>
    );
  }
});
