var ManageListings = React.createClass({

  render: function () {
    var listings = this.props.listings;
    return (
      <div>
        <div className='manage-listing-title'>Listings</div>
        {
          listings.map(function (listing) {
            return <ManageListingsBlock listing={listing} />;
          })
        }
      </div>
    );
  }
});
