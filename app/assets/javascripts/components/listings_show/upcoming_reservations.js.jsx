var UpcomingReservations = React.createClass({
  getInitialState: function () {
    return {reservations: this.props.reservations}
  },

  willReceiveProps: function(newReservations) {
    this.setState({reservations: newReservations})
  },

  render: function () {
    if (this.props.reservations) {
      return(
        <ul id='upcoming-reservations-list'>
          {this.props.reservations.map( function (reservation) {
            return(
              <li>{DateUtil.toString(reservation.check_in) + ' to ' + DateUtil.toString(reservation.check_out)}</li>
            )
          })}
        </ul>
      )
    } else {
      return <div id='upcoming-reservations-list'>There are no upcoming reservations for this listing.</div>
    }

  }
})
