var CheckOut = React.createClass({
  getInitialState: function () {
    return {date: Date()};
  },

  handleChange: function () {
    this.setState({date: event.target.value});

    // create action to retrieve new listings
  },

  render: function () {
    return (
      <input
        onChange={this.handleChange}
        type='date'
        placeholder={this.state.date}
        className=''
      />
    );
  },

});
