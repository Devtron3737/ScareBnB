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

    if (!this.state.listing.title) {
      return <div>Loading...</div>
    } else {
        var listing = this.state.listing
        return(
          <div>
            <NavBar search={searchBarOptions}/>
            <header id='listing-header'>
              <img id='listing-header-pic' src={listing.pictures[0].url} height='700' />

              <section className='listing-header-detail clearfix'>

                <div id='listing-show-user'>
                  <img src={listing.user_picture.url} height='100' width='100' />
                  <div>{listing.ghost.name}</div>
                </div>

                <div id='listing-header-info'>
                  <div id='listing-show-title'>{listing.title}</div>
                  <div id='listing-show-title-detail'>{listing.address}</div>

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



                <div id='listing-show-rsvp-content'>
                  <div className='listing-show-rsvp-title clearfix'>
                    <div id='listing-show-rsvp-toenails'>
                      <div id='listing-show-rsvp-price'>{listing.toe_nails}</div>
                      <img className='toenail-pic' src={'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811047/toenail_on49wz.png'} height='25' />
                      <div id='rsvp-per-night'>per night</div>
                    </div>
                  </div>

                  <DateField type='check_in' />
                  <DateField type='check_out' />
                  <button onClick={this.handleReserve}
                          className='button'
                          id='listing-show-reserve-button'
                          type='button'>
                          Request to Book
                  </button>
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

            <Footer />

          </div>
        );
    }
  }
});
