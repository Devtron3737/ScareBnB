var ManageListings = React.createClass({

  render: function () {
    var listings = this.props.listings;
    return (
      <div>
        <div className='manage-block-title'>Listings</div>
        {
          listings.map(function (listing, index) {
            return <ManageListingsBlock key={index} listing={listing} />;
          })
        }
      </div>
    );
  }
});
