var Link = ReactRouter.Link

var Home = React.createClass({
  mixins: [ReactRouter.History],

  componentDidMount: function () {
    var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(37.54025472421631, -122.6264275146484),
      new google.maps.LatLng(37.97454774677482, -122.2487724853516)
    );

    var options = {bounds: defaultBounds},
        searchField = document.getElementById('home-searchfield');
    this.autocomplete = new google.maps.places.Autocomplete(searchField, options);
  },

  handleSubmit: function () {
    event.preventDefault();

    var search = document.getElementById('home-searchfield').value,
        path = '/listings/' + search + '/';

    this.history.pushState(null, path);
  },

  handleLogOut: function () {
    SessionUtil.logOut()
  },

  render: function () {

    return(
      <div>
        <header className='home-header'>
          <nav className='header-nav clearfix'>
            <h2>
              <a href="/">
               <img name='white logo' src={'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811046/logo_ghost_ceoqts.png'} height='50' />
              </a>
            </h2>
            <Account />
          </nav>

          <h2 className='welcome-head'>We've been expecting you...</h2>
          <h3 className='welcome-sub'>Rest at haunted abodes in the Bay Area.</h3>

          <div className='home-searchbar-box'>
            <form onSubmit={this.handleSubmit}>
              <div id='home-searchbar-container'>
                <div className='home-searchbar'>
                  <input className='searchbar-items' id='home-searchfield' type='text' placeholder='The world is your graveyard. Where to?'></input>
                </div>
                <button onClick={this.handleSubmit} className='searchbar-items button' id='home-search-button' type='button'>Go</button>
              </div>
            </form>
          </div>
        </header>

        <main className='home-content'>
          <h3>Just for a scare</h3>
          <h4>From demented children to creepy butlers, who knows what's waiting for you.</h4>
          <ul className='home-listings clearfix'>
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
