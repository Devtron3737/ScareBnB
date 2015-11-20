var Dates = React.createClass({
  getInitialState: function () {

    return {
      check_in: DateUtil.getDefault("check_in"),
      check_out: DateUtil.getDefault("check_out")
    };
  },

  componentDidMount: function () {
    this.changedType = ""
  },

  handleDateFieldChange: function (type, date) {
    // this.changedType = type
    // these are returning before changecallback is done
    switch (type) {
      case "check_in":
        if (date > this.state.check_out) {
          this.setState(
            {
              check_out: DateUtil.correspondingDay('add', date),
              check_in: date
            },
            function () {
              this.props.onChangeCallback(this.state.check_in, this.state.check_out)
            }
          )
        } else {
          this.setState(
            {check_in: date},
            function () {
              this.props.onChangeCallback(this.state.check_in, this.state.check_out)
            }
          )
        }
        break;
      case "check_out":
        if (date < this.state.check_in) {
          this.setState(
            {
              check_in: DateUtil.correspondingDay('subtract', date),
              check_out: date
            },
            function () {
              this.props.onChangeCallback(this.state.check_in, this.state.check_out)
            }
          )
        } else {
          this.setState(
            {check_out: date},
            function () {
              this.props.onChangeCallback(this.state.check_in, this.state.check_out)
            }
          )
          this.props.onChangeCallback(this.state.check_in, this.state.check_out)
        }
    }


    // if (type === "check_in") {
    //   // this.onChangeCallback called in this.checkDate
    //   this.setState(
    //     {check_in: date},
    //     this.checkDate
    //   )
    //   return;
    // } else {
    //   // this.onChangeCallback called in this.checkDate
    //   this.setState(
    //     {check_out: date},
    //     this.checkDate
    //   )
    //   return;
    // }
    //
    // this.onChangeCallback(this.state.check_in, this.state.check_out)
  },

  checkDate: function (state) {
    var check_in = this.state.check_in,
        check_out = this.state.check_out

    if (this.changedType === 'check_in' && (check_in >= check_out)) {
      this.setState(
        {check_out: DateUtil.correspondingDay('add', check_in)},
        function () {
          this.props.onChangeCallback(this.state.check_in, this.state.check_out)
        }
      )
    } else if (this.changedType === 'check_out' && (check_out <= check_in)) {
      this.setState(
        {check_in: DateUtil.correspondingDay('subtract', check_out)},
        function () {
          this.props.onChangeCallback(this.state.check_in, this.state.check_out)
        }
      )
    }
  },

  render: function () {

    return(
      <div className='dates clearfix'>
        <div id='dates-title'>Dates</div>
        <div className='dates-list clearfix'>
          <DateField date={this.state.check_in} onChangeCallback={this.handleDateFieldChange} type='check_in' />
          <DateField date={this.state.check_out} onChangeCallback={this.handleDateFieldChange} type='check_out' />
        </div>
      </div>
    )
  }
})
