var ListingBlock = React.createClass({

  handleMouseOver: function () {
    //create action to change class of associated
    //icon on map, so that highlights when cursor hovering

  },

  render: function () {
    var listing = this.props.listing
    //change image
    return (
      <div className='listing-block' onMouseOver={this.handleMouseOver}>
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
