var ManageReservationsBlock = React.createClass({
  handleReservationDelete: function () {
    ManageActions.deleteReservation({
      userId: this.props.reservation.ghost_id,
      reservationId: this.props.reservation.id
    });
  },

  render: function () {
    var reservation = this.props.reservation;
    console.log(reservation);
    var sep = ", ";
    return (
      <div className='manage-category-block clearfix'>
        <div className='manage-category-block-info' id='reservation-address'>
          <div>{reservation.listing.title}</div>
          <div>
            {
              reservation.listing.address
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
    );
  }
});
