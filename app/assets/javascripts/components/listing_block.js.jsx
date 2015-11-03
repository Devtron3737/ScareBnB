var ListingBlock = React.createClass({

  handleMouseOver: function () {
    //create action to change class of associated
    //icon on map, so that highlights when cursor hovering

  },

  render: function () {
    var listing = this.props.listing
    return (
      <div className='listing-block' onMouseOver={this.handleMouseOver}>
        <image className='listing-pic' src={listing.picture} />
        <detail className='listing-creepiness'>{listing.creepiness}</detail>
        <image className='listing-user-pic' src={listing.userPic} />
        <title>{listing.title}</title>
        <detail className='listing-toe-nail'>{listing.toeNails}</detail>
      </div>
    )
  }
});
