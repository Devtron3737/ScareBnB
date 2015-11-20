var DateField = React.createClass({
  getInitialState: function () {
    return {value: this.props.date};
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({value: newProps.date})
  },

  handleChange: function () {
    this.props.onChangeCallback(this.props.type, event.target.value)
    this.setState({value: this.props.date})
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
