var ListingBlock = React.createClass({

  mixins: [ReactRouter.History],

  handleMouseOver: function () {
    // change map marker color when
    // mouse over listing block
    console.log('in mouse over!')
  },

  handleClick: function () {
    // event.preventDefault()
    var listingPath = '/listings/' + this.props.listing.id
    this.history.pushState(null, listingPath)
    console.log("in handle click!")
  },

  render: function () {
    var listing = this.props.listing
    var listingPath = '/listings/' + listing.id
    //change image
    //   params={{listingId: listing.id}}
    return (
      <div className='listing-block' onMouseOver={this.handleMouseOver} onClick={this.handleClick}>
          <img className='listing-pic' src={'/images/deathstar.jpg'} height='240' width='350' />
          <detail className='listing-creepiness'>{listing.creepiness}</detail>
          <div id='listing-title'>{listing.title}</div>
          <div className='listing-toe-nail'>
            {listing.toe_nails}
            <img className='toenail-pic' src={'/images/toenail.png'} height='40' />
          </div>
          <img className='listing-user-pic' src={'/images/darth-vader.jpg'} height='60' width='60' />
      </div>
    )
  }
});
