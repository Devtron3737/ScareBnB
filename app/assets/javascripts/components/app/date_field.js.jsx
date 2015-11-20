var DateField = React.createClass({
  getInitialState: function () {
    return {value: this.props.date};
  },

  handleChange: function () {
    this.props.onChangeCallback(this.props.type, event.target.value)
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
