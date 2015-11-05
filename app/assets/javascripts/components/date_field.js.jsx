var DateField = React.createClass({
  getInitialState: function () {
    return {value: ""};
  },

  handleChange: function () {
    this.setState({value: event.target.value});

    // create action to retrieve new listings
  },

  render: function () {
    var type = (this.props.type === 'check_in') ?
                      'Check in' :
                      'Check out';
    return (
      <input
        onChange={this.handleChange}
        value={DateUtil.getDefault(type)}
        required='required'
        type='date'
        className='date-item'
      />
    );
  },

});
