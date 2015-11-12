var ManageListingsBlock = React.createClass({

  render: function () {
    var listing = this.props.listing;
    return (
      <div className='listing-block clearfix'>
        <div className='listing-block-info'>
          <div>{listing.title}</div>
          <div>
            {
              listing.address +
              listing.city +
              listing.state
            }
          </div>
        </div>

        <div className='listing-block-btns'>
          <div>BUTTON!</div>
        </div>
    );
  }
});
