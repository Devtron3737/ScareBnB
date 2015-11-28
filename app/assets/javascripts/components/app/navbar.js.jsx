var NavBar = React.createClass({
  render: function () {
    // <span className='navbar-list clearfix'>
    //
    //   <div className='navbar-list-item'>Account</div>
    // </span>
    return(
      <nav className='nav-container clearfix'>
        <div id='home-logo'>
          <Link to='/'>
           <img id='logo-pic' src={'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811046/logo_red_yi6mz8.png'} alt='logo' height='50' />
          </Link>
        </div>
        <SearchBar search={this.props.search} id='search-field' />
        <Account />
      </nav>
    );
  }
});
