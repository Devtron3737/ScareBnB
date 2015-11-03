var ListingsList = React.createClass({
  render: function () {
    return(
      <div className='listings-list'>
        {
          this.props.listings.map( function (listing) {
            return <ListingBlock listing={listing} />;
          })
        }
      </div>
    );

  }
});
