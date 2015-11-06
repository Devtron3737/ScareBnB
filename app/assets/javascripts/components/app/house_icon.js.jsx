var HouseIcon = React.createClass({
  getInitialState: function () {
    //add num here
    return {notifications: 0};
  },

  render: function () {
    return(
      <div className='navbar-list-item clearfix'><a href="#">
        <h3 className='ghost-text'>Ghost</h3>
        <img src={'/images/home_icon_grey.png'} className='house-pic' alt='house-pic' height='40' />
      </a></div>
    );
  }
});
