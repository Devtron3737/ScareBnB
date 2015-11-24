var Dates = React.createClass({
  getInitialState: function () {
    return {
      checkIn: DateUtil.getDefault("checkIn"),
      checkOut: DateUtil.getDefault("checkOut")
    };
  },

  handleDateFieldChange: function (type, date) {
    switch (type) {
      case "checkIn":
        if (date >= this.state.checkOut) {
          this.setState(
            {
              checkOut: DateUtil.correspondingDay('add', date),
              checkIn: date
            },
            function () {
              this.props.onChangeCallback(this.state.checkIn, this.state.checkOut)
            }
          )
        } else {
          this.setState(
            {checkIn: date},
            function () {
              this.props.onChangeCallback(this.state.checkIn, this.state.checkOut)
            }.bind(this)
          )
        }
        break;
      case "checkOut":
        if (date <= this.state.checkIn) {
          this.setState(
            {
              checkIn: DateUtil.correspondingDay('subtract', date),
              checkOut: date
            },
            function () {
              this.props.onChangeCallback(this.state.checkIn, this.state.checkOut)
            }.bind(this)
          )
        } else {
          this.setState(
            {checkOut: date},
            function () {
              this.props.onChangeCallback(this.state.checkIn, this.state.checkOut)
            }.bind(this)
          )
          this.props.onChangeCallback(this.state.checkIn, this.state.checkOut)
        }
    }
  },

  render: function () {

    return(
        <div>
          <DateField date={this.state.checkIn} onChangeCallback={this.handleDateFieldChange} type='checkIn' />
          <DateField date={this.state.checkOut} onChangeCallback={this.handleDateFieldChange} type='checkOut' />
        </div>
    )
  }
})
