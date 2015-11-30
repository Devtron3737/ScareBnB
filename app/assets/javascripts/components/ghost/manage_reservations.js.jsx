var ManageReservations = React.createClass({
  render: function () {
    var reservations;

    if (this.props.reservations.length === 0) {
      reservations = <div id='nocategory'> You currently don't have any reservations.</div>
    } else {
      reservations = (
        this.props.reservations.map(function (reservation, index) {
          return <ManageReservationsBlock key={index} reservation={reservation} />;
        })
      )
    }

    return (
      <div>
        <div className='manage-block-title'>Reservations</div>
        {reservations}
      </div>
    );
  }
});
