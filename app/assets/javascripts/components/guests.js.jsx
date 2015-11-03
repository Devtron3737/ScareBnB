var Guests = React.createClass({
  getInitialState: function () {
    return {value: '1'};
  },

  handleChange: function () {
    this.setState({value: event.target.value});
    // add action to fetch listings
  },

  render: function () {
    return(
      <div className='guests'>
        <select value={this.state.value} onChange={this.handleChange}>
        {
          function () {
            var options = [
              <option value='1' >1 Guest</option>
            ];
            for (var i = 2; i <= MAX_GUEST_NUM; i++) {
              options.push(
                <option value={i} >
                  {i} Guests
                </option>
              );
            }
            return options;
          }()
        }
        </select>
      </div>
    );
  }
});
