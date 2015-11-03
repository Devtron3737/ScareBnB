var SearchBar = React.createClass({
  getInitialState: function () {
    return {value: ""};
  },

  handleSubmit: function () {
    //this should create an action to submit
    // fetch new listings list
  },

  handleChange: function () {
    this.setState({value: event.target.value});
  },

  render: function () {
    return(
      <div className='search-field-container clearfix'>
        <img src={'/images/mag_glass_grey.png'} className='mag-glass-pic' alt='' height='42' />
        <input id='search-field'
             type='text'
             onSubmit={this.handleSubmit}
             onChange={this.handleChange}
             placeholder='Where are you going?'>
             {this.state.value}
        </input>
      </div>


    );
  }
});
