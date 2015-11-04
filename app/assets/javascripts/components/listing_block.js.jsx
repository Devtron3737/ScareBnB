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
        <img className='listing-pic' src={'/images/deathstar.jpg'} height='120' />
        <detail className='listing-creepiness'>{listing.creepiness}</detail>
        <img className='listing-user-pic' src={'/images/darth-vader.jpg'} height='100' />
        <title>{listing.title}</title>
        <detail className='listing-toe-nail'>{listing.toe_nails}</detail>
      </div>
    )
  }
});
