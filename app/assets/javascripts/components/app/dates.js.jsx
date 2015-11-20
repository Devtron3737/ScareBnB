var Dates = React.createClass({
  getInitialState: function () {

    return {
      checkIn: DateUtil.getDefault("checkIn"),
      checkOut: DateUtil.getDefault("checkOut")
    };
  },

  componentDidMount: function () {
    this.changedType = ""
  },

  handleDateFieldChange: function (type, date) {
    // this.changedType = type
    // these are returning before changecallback is done
    switch (type) {
      case "checkIn":
        if (date > this.state.checkOut) {
          this.setState(
            {
              checkOut: DateUtil.correspondingDay('add', date),
              checkIn: date
            },
            function () {
              console.log('in switch')
              console.log(this)
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
        if (date < this.state.checkIn) {
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


    // if (type === "checkIn") {
    //   // this.onChangeCallback called in this.checkDate
    //   this.setState(
    //     {checkIn: date},
    //     this.checkDate
    //   )
    //   return;
    // } else {
    //   // this.onChangeCallback called in this.checkDate
    //   this.setState(
    //     {checkOut: date},
    //     this.checkDate
    //   )
    //   return;
    // }
    //
    // this.onChangeCallback(this.state.checkIn, this.state.checkOut)
  },

  // checkDate: function (state) {
  //   var checkIn = this.state.checkIn,
  //       checkOut = this.state.checkOut
  //
  //   if (this.changedType === 'checkIn' && (checkIn >= checkOut)) {
  //     this.setState(
  //       {checkOut: DateUtil.correspondingDay('add', checkIn)},
  //       function () {
  //         this.props.onChangeCallback(this.state.checkIn, this.state.checkOut)
  //       }
  //     )
  //   } else if (this.changedType === 'checkOut' && (checkOut <= checkIn)) {
  //     this.setState(
  //       {checkIn: DateUtil.correspondingDay('subtract', checkOut)},
  //       function () {
  //         this.props.onChangeCallback(this.state.checkIn, this.state.checkOut)
  //       }
  //     )
  //   }
  // },

  render: function () {

    return(
      <div className='dates clearfix'>
        <div id='dates-title'>Dates</div>
        <div className='dates-list clearfix'>
          <DateField date={this.state.checkIn} onChangeCallback={this.handleDateFieldChange} type='checkIn' />
          <DateField date={this.state.checkOut} onChangeCallback={this.handleDateFieldChange} type='checkOut' />
        </div>
      </div>
    )
  }
})
