var GhostIcon = React.createClass({
  getInitialState: function () {
    //add num here
    return {notifications: 0};
  },

  render: function () {

    return(
      <div className='house-icon'><a href="#">
        <h3 className='ghost-text'>Ghost</h3>
        <img src={'/images/home_icon_grey.png'} className='ghost-pic' alt='house-pic' height='45' />
      </a></div>
    );
  }
});
