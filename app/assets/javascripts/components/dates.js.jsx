var Dates = React.createClass({
  render: function () {
    // add <CheckOut /> <Guests />

    return(
      <div className='dates clearfix'>
        <CheckIn  />
        <CheckOut className='check-out' />
        <Guests />
      </div>
    );
  }
});
