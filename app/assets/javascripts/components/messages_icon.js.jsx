var MessagesIcon = React.createClass({
  getInitialState: function () {
    //add num here
    return {notifications: 0};
  },

  render: function () {
    return(
      <div className='message-icon'><a href="#">
        <h3 className='message-text'>Messages</h3>
        <img src={'/images/message_icon_grey.png'} className='message-pic' alt='house-pic' height='42' />
      </a></div>
    );
  }
});
