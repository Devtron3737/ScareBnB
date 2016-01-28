var NavBar = React.createClass({
  render: function () {
    return(
      <nav className='nav-container clearfix'>
        <div id='home-logo'>
          <Link to='/'>
           <img id='logo-pic' src={'https://s3-us-west-1.amazonaws.com/scarebnbdev/logo_red.png'} alt='logo' height='50' />
          </Link>
        </div>
        <SearchBar search={this.props.search} id='search-field' />
        <Account />
      </nav>
    );
  }
});
