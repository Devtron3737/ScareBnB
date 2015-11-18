var Home = React.createClass({
  mixins: [ReactRouter.History],

  componentDidMount: function () {
    var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(37.54025472421631, -122.6264275146484),
      new google.maps.LatLng(37.97454774677482, -122.2487724853516)
      //make default sf
    );
    var options = {bounds: defaultBounds},
        searchField = document.getElementById('home-search-field');
    this.autocomplete = new google.maps.places.Autocomplete(searchField, options);
  },

  handleSubmit: function () {
    event.preventDefault();

    var value = document.getElementById('home-search-field').value;
    this.history.pushState(null, '/listings/' + value);
    // need to encompass searchfield, guests, and dates
    // in same <form>. then setup defaults if things are
    // empty
  },

  render: function () {
    return(
      <div>
        <header className='home-header'>
          <nav className='header-nav clearfix'>
            <h1 className='header-logo'>
              <a href="/">
               <img name='white logo' src={'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811046/logo_ghost_ceoqts.png'} height='55' />
              </a>
            </h1>


            <ul className='header-list'>
              <li className='house-icon'><Link to='user/2/manage'>
                <h3 className='ghost-text'>Ghost</h3>
                <img className='house-pic' src={'/images/home_icon.png'} height='45' /></Link></li>

              <li><a href="#">Account</a></li>
            </ul>

          </nav>

          <h2 className='welcome-head'>We've been expecting you...</h2>
          <h3 className='welcome-sub'>Rest at haunted abodes in the Bay Area.</h3>

          <div className='home-searchbar-box'>
            <form onSubmit={this.handleSubmit}>
              <div id='home-searchbar-container'>
                <span className='home-searchbar'>
                  <input className='searchbar-items' id='home-search-field' type='text' placeholder='Where do you want to go?'></input>
                  <DateField type='check_in' />
                  <DateField type='check_out' />
                  <div className='searchbar-items guests'>
                    <select name='guests'>
                      <option value="1" >1 Guest</option>
                      <option value="2" >2 Guests</option>
                      <option value="3" >3 Guests</option>
                      <option value="4" >4 Guests</option>
                      <option value="5" >5 Guests</option>
                      <option value="6" >6 Guests</option>
                    </select>
                  </div>
                </span>
                <button onClick={this.handleSubmit} className='searchbar-items button' id='home-search-button' type='button'>Search</button>
              </div>
            </form>
          </div>
        </header>

        <main className='home-content clearfix'>
          <h3>Just for a scare</h3>
          <h4>From demented children to creepy butlers, who knows what's waiting for you.</h4>
          <ul id='home-listings'>
            <li>
              <Link to='listings/San Francisco, CA'>
                <img name='goldengate' src={'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811041/goldengate_ywmoe1.jpg'} height='300' width='330' />
                <div className='home-listings-title'>San Francisco</div>
              </Link>
            </li>

            <li>
              <Link to='listings/Oakland, CA'>
                <img src={'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811043/haunted_house_n82nxu.jpg'} height='300' width='330' />
                <div className='home-listings-title'>Oakland</div>
              </Link>
            </li>

            <li>
              <Link to='listings/Berkeley, CA'>
                <img src={'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811041/hand_aiul9s.jpg'} height='300' width='330' />
                <div className='home-listings-title'>Berkeley</div>
              </Link>
            </li>

            <li>
              <Link to='listings/Marin County, CA'>
                <img src={'http://res.cloudinary.com/dn7rukqow/image/upload/v1447794108/imes6dcn5dj7iyteb9pq.jpg'} height='300' width='330' />
                <div className='home-listings-title'>Marin</div>
              </Link>
            </li>

            <li>
              <Link to='listings/Daly City, CA'>
                <img src={'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811054/cemetary3_ymuh4q.jpg'} height='300' width='330' />
                <div className='home-listings-title'>Daly City</div>
              </Link>
            </li>

            <li>
              <Link to='listings/South San Francisco, CA'>
                <img src={'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811049/southsanfran_g2wdpg.jpg'} height='300' width='330' />
                <div className='home-listings-title'>South San Francisco</div>
              </Link>
            </li>
          </ul>

        </main>
        <Footer />
      </div>
    );
  }
});
