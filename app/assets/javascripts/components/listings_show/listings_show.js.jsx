var ListingsShow = React.createClass({

  getInitialState: function () {
    return {listing: {}}
  },

  componentDidMount: function () {
    var listingId = this.props.params.listingId
    SearchStore.addListingShowChangeListener(this._onChange)
    SearchActions.fetchListing(listingId)
  },

  componenetWillUnmount: function () {
    SearchStore.removeListingShowChangeListener(this._onChange)
  },

  _onChange: function () {
    this.setState({
      listing: SearchStore.getListingShow()
    })
  },

  render: function () {
    var searchBarOptions = {
      indexPage: false,
      place: ""
    };

    var listing = this.state.listing
    return(
      <div>
        <NavBar search={searchBarOptions}/>
        <header id='listing-header'>
          <img id='listing-header-pic' src={listing.pictures[0].url} height='600' />

          <section className='listing-header-detail clearfix'>
            <div id='listing-show-user'>
              <img src={listing.user_picture.url} height='100' width='100' />
              <div>Anakin</div>
            </div>

            <div id='listing-header-info'>
              <div id='listing-show-title'>Spacious interior with nice view</div>
              <div id='listing-show-title-detail'>San Francisco, CA, United States</div>

              <div className='header-amenities clearfix'>
                <div>
                  <img src={'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811048/tombstone_qdota8.png'} height='40' />
                  nearby cemetary
                </div>

                <div>
                  <img src={'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811038/butler_plmuai.png'} height='40' />
                  creepy butler
                </div>

                <div>
                  <img src={'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811038/children_mc3uu8.png'} height='40' />
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
