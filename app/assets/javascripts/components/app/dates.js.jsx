var Dates = React.createClass({
  getInitialState: function () {
    return {
      check_in: DateUtil.getDefault("check_in"),
      check_out: DateUtil.getDefault("check_out")
    };
  },

  handleDateFieldChange: function (type, date) {
    if (type === "check_in") {
      this.setState({check_in: date})
    } else {
      this.setState({check_out: date})
    }
    this.checkDate()
    this.props.onChangeCallback(this.state.check_in, this.state.check_out)
  },

  checkDate: function () {
    // 
  },

  render: function () {
    <div className='dates clearfix'>
      <div id='dates-title'>Dates</div>
      <div className='dates-list clearfix'>
        <DateField date={this.state.check_in} onChangeCallback={this.handleDateFieldChange} type='check_in' />
        <DateField date={this.state.check_out} onChangeCallback={this.handleDateFieldChange} type='check_out' />
      </div>
    </div>
  }
})
