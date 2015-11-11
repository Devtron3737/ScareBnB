var NavBar = React.createClass({
  render: function () {
    return(
      <nav className='nav-container clearfix'>
        <div id='home-logo'>
          <Link path='/'>
           <img id='logo-pic' src={'/images/logo_red.png'} alt='logo' height='50' />
          </Link>
        </div>
        <SearchBar search={this.props.search} id='search-field' />
        <span className='navbar-list clearfix'>
          
          <div className='navbar-list-item'>Account</div>
        </span>
      </nav>
    );
  }
});
