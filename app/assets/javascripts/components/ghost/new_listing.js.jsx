var NewListing = React.createClass({
  render: function () {
    return(
      <div className='manage-category-block clearfix'>
        <div className='manage-category-block-info' id='reservation-address'>
          <div>List Your Haunting</div>
          <div>
            {
              reservation.listing.address + sep +
              reservation.listing.city + sep +
              reservation.listing.state
            }
          </div>
        </div>

        <div className='manage-category-dates'>
          {reservation.check_in + ' to ' + reservation.check_out}
        </div>

        <div className='manage-category-block-btns'>
          <button onClick={this.handleReservationDelete} className='button' id='manage-category-remove' >Remove</button>
        </div>
      </div>
    )
  }
});
