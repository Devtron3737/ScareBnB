var Footer = React.createClass({
  render: function () {
    return(
      <div className='footer-container'>
        <section className='clearfix'>
          <a  href='https://www.linkedin.com/in/devinmiranda' id='footer-about'>About Devin</a>
          <img src={'/images/tombstone-white.png'} id='tomb-left' alt="" height='20' />
          <img src={'/images/tombstone-white.png'} alt="" height='26' />
          <img src={'/images/tombstone-white.png'} id='tomb-right' alt="" height='20' />
          <a href='https://github.com/Devtron718/ScareBnB' id='footer-github'>Github</a>
        </section>


      </div>
    );
  }
});
