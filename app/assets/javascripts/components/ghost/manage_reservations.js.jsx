var ManageReservations = React.createClass({
  render: function () {
    var reservations = this.props.reservations;
    console.log('in manage-rsvp');
    console.log(reservations);
    return (
      <div>
        <div className='manage-block-title'>Reservations</div>
        {
          reservations.map(function (reservation, index) {
            return <ManageReservationsBlock key={index} reservation={reservation} />;
          })
        }
      </div>
    );
  }
});
