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
    var place = this.autocomplete.getPlace();
    SearchActions.placeSearch(place.geometry);

    this.history.pushState(null, '/listings');

    // need to encompass searchfield, guests, and dates
    // in same <form>. then setup defaults if things are
    // empty
  },

  render: function () {
    return(
      <div>


        <header className='home header'>
          <nav className='header-nav clearfix'>
            <h1 className='header-logo'>
              <a href="/">
               <img src={'images/logo_ghost.png'} height='55' />
              </a>
            </h1>


            <ul className='header-list'>
              <li className='house-icon'><a href="#">
                <h3 className='ghost-text'>Ghost</h3>
                <img className='house-pic' src={'/images/home_icon.png'} height='45' /></a></li>
              <li className='message-icon'><a href="#">
                <h3 className='message-text'>Message</h3>
                <img className='message-pic' src={'/images/message_icon.png'} height='42' /></a></li>

              <li><a href="#">Account</a></li>
            </ul>

          </nav>

          <h2 className='welcome-head'>We've been expecting you...</h2>
          <h3 className='welcome-sub'>Rest with ghouls, goblins, and zombies in the Bay Area.</h3>

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
                <button className='searchbar-items search-button' type='button'>Search</button>
              </div>
            </form>
          </div>
        </header>

        <main id='home-content'>
          <h3>Just for a scare</h3>
          <h4>From demented children to creepy butlers, who knows what's waiting for you.</h4>
          <ul id='home-listings'>
            <li>
              <img src={'/images/goldengate.jpg'} height='300' width='330' />
              <div class='home-listings-title'>San Francisco</div>
            </li>
          </ul>

        </main>

      </div>
    );
  }
});
