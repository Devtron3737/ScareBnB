var ListingBlock = React.createClass({

  mixins: [ReactRouter.History],

  handleClick: function () {
    // event.preventDefault()
    var listingPath = '/listing/' + this.props.listing.id

    this.history.pushState(null, listingPath)
    console.log("in handle click!")
  },

  render: function () {
    var listing = this.props.listing
    var listingPath = '/listings/' + listing.id
    //change image
    //   params={{listingId: listing.id}}
    return (
      <div className='listing-block' onClick={this.handleClick}>
          <img className='listing-pic' src={listing.pictures[0].url} height='240' width='350' />

          <div id='listing-title'>{listing.title}</div>
          <div id='listing-address'>{listing.address}</div>
          <div className='listing-toe-nail'>
            {listing.toe_nails}
            <img className='toenail-pic' src={'/images/toenail.png'} height='40' />
          </div>
          <img className='listing-user-pic' src={'/images/darth-vader.jpg'} height='60' width='60' />
      </div>
    )
  }
});
