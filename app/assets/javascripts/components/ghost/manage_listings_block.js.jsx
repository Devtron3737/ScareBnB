var ManageListingsBlock = React.createClass({

  render: function () {
    var listing = this.props.listing;
    var sep = ", ";
    return (
      <div className='manage-listing-block clearfix'>
        <div className='manage-listing-block-info'>
          <div>{listing.title}</div>
          <div>
            {
              listing.address + sep +
              listing.city + sep +
              listing.state
            }
          </div>
        </div>

        <div className='manage-listing-block-btns'>
          <button onClick={this.handleSubmit} className='button' id='manage-listing-delete' type='button'>Remove</button>
        </div>
      </div>
    );
  }
});
