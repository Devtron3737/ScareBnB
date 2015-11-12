var ListingsShow = React.createClass({
  componentWillMount: function () {
    console.log('trying to mount listings show!');
  },

  render: function () {
    var searchBarOptions = {
      indexPage: false,
      place: ""
    };
    
    return(
      <div>
        <NavBar search={searchBarOptions}/>
        <header id='listing-header'>
          <img id='listing-header-pic' src={'/images/deathstar.jpg'} height='600' />

          <section className='listing-header-detail clearfix'>
            <div id='listing-show-user'>
              <img src={'/images/darth-vader.jpg'} height='100' width='100' />
              <div>Anakin</div>
            </div>

            <div id='listing-header-info'>
              <div id='listing-show-title'>Spacious interior with nice view</div>
              <div id='listing-show-title-detail'>San Francisco, CA, United States</div>

              <div className='header-amenities clearfix'>
                <div>
                  <img src={'/images/tombstone.png'} height='40' />
                  nearby cemetary
                </div>

                <div>
                  <img src={'/images/butler.png'} height='40' />
                  creepy butler
                </div>

                <div>
                  <img src={'/images/children.png'} height='40' />
                  demented children
                </div>
              </div>

            </div>

          </section>
        </header>


        <main className='listing-show-content-container'>
          <div id='listing-show-content-title'>About this listing</div>
          <p className='listing-show-content'>
            woodyfsddfgfdgefsdfdsf
          </p>

          <p className='listing-show-content'>
            woodyfsddfgfdgsadsdf
          </p>

          <p className='listing-show-content'>
            woodyfsddfgfdgsdfdsf
          </p>

          <p className='listing-show-content'>
            woodyfsddfgfdgsdfdsfd
          </p>
        </main>

      </div>
    );
  }
});
