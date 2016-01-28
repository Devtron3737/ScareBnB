var ManageReservationsBlock = React.createClass({
  handleReservationDelete: function () {

    ManageActions.deleteReservation({
      guestId: this.props.reservation.guest_id,
      reservationId: this.props.reservation.id
    });
  },

  render: function () {
    var reservation = this.props.reservation,
        listingLink = '/listings/' + reservation.listing_details.id,
        listingPictureUrl = (reservation.listing_pictures) ?
                             reservation.listing_pictures[0].url :
                             "https://s3-us-west-1.amazonaws.com/scarebnbdev/no_image_available_qhdwk9.jpg"
    return (
      <div className='manage-category-block clearfix'>
        <div className='manage-category-block-info clearfix'>
          <div className='manage-category-block-pic'>
            <Link to={listingLink}>
              <img src={listingPictureUrl} height='75' />
            </Link>
          </div>

          <div>
            <div className='category-details'>{reservation.listing_details.title}</div>
            <div className='category-details'>{reservation.listing_details.address}</div>

            <div className='manage-category-dates category-details'>
              {DateUtil.toString(reservation.check_in) + ' to ' + DateUtil.toString(reservation.check_out)}
            </div>
          </div>

        </div>

        <div className='manage-category-block-btns'>
          <button onClick={this.handleReservationDelete} className='button' id='manage-category-remove' >Remove</button>
        </div>
      </div>
    );
  }
});
