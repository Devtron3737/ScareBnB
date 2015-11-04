var Dates = React.createClass({
  render: function () {
    // add <CheckOut /> <Guests />

    return(
      <div className='dates clearfix'>
        <DateField type='check_in' />
        <DateField type='check_out' />
        <Guests />
      </div>
    );
  }
});
