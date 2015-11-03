var CheckIn = React.createClass({
  getInitialState: function () {
    return {value: ""};
  },

  handleChange: function () {
    this.setState({value: event.target.value});

    // create action to retrieve new listings
  },

  render: function () {
    return (
      <input
        onChange={this.handleChange}
        placeholder={Date()}
        type='date'
        className='check-in'
      />
    );
  },

});
