var Dates = React.createClass({
  render: function () {
    // add <CheckOut /> <Guests />
    // <div className='date-list-labels clearfix' >
    //   <div>check in</div>
    //   <div>check out</div>
    //   <div>number of guests</div>
    // </div>

    return(
      <div className='dates clearfix'>
        <div id='dates-title'>Dates</div>
        <div className='dates-list clearfix'>
          <DateField type='check_in' />
          <DateField type='check_out' />
          <Guests />
        </div>
      </div>
    );
  }
});
