var NavBar = React.createClass({
  render: function () {
    return(
      <nav className='nav-container'>
        <div id='home-logo'>
          <a href="/">
           <img src={'/images/logo_red.png'} alt='logo' height='55' />
          </a>
        </div>
        <SearchBar />
        <span className=''>
          <GhostIcon />
          <MessagesIcon />
          <a href='#'>Account</a>
        </span>
      </nav>
    );
  }
});
