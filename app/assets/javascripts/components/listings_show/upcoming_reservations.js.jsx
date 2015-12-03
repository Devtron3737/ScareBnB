var UpcomingReservations = React.createClass({
  getInitialState: function () {
    return {reservations: this.props.reservations}
  },

  willReceiveProps: function(newReservations) {
    this.setState({reservations: newReservations})
  },

  render: function () {
    if (reservations) {
      return(
        <ul>
          {reservations.map( function (reservation) {
            return(
              <li>{reservation.check_in} to {reservation.check_out}</li>
            )
          })}
        </ul>
      )
    }

  }
})
