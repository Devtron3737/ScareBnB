var DateField = React.createClass({
  getInitialState: function () {
    return {value: DateUtil.getDefault(this.props.type)};
  },

  handleChange: function () {
    this.setState({value: event.target.value});

    // create action to retrieve new listings
  },

  render: function () {

    return (
      <input
        onChange={this.handleChange}
        value={this.state.value}
        required='required'
        type='date'
        className='date-item'
      />
    );
  },

});
