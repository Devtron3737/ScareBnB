var ManageListings = React.createClass({

  render: function () {
    var listings;

    if (this.props.listings.length === 0) {
      listings = <div id='nocategory'> You currently don't have any listings.</div>
    } else {
      listings = (
        this.props.listings.map(function (listing, index) {
          return <ManageListingsBlock key={index} listing={listing} />;
        })
      )
    }

    return (
      <div>
        <div className='manage-block-title'>Listings</div>
        {listings}
      </div>
    );
  }
});
