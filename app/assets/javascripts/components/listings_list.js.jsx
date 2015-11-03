var ListingsList = React.createClass({
  render: function () {
    return(
      <div>
        {
          this.props.listings.map( function (listing) {
            return <ListingBlock listing={listing} />;
          })
        }
      </div>
    );

  }
});
