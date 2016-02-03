var ListingsShow = React.createClass({

  getInitialState: function () {
    return {listing: {}}
  },

  componentDidMount: function () {
    var listingId = this.props.params.listingId
    SearchStore.addListingShowChangeListener(this._onChange)
    SearchActions.fetchListing(listingId)
  },

  componentWillUnmount: function () {
    SearchStore.removeListingShowChangeListener(this._onChange)
  },

  handleDatesChange: function (checkIn, checkOut) {
    this.checkIn = checkIn
    this.checkOut = checkOut
  },

  handleReserve: function () {
    var reservationDetails = {
      listingId: this.state.listing.id,
      checkIn: this.checkIn,
      checkOut: this.checkOut
    }

    ManageActions.createReservation(reservationDetails)
    SearchActions.fetchListing(this.props.params.listingId)
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
      var listing = this.state.listing,
          listingPictureUrl = (listing.pictures[0]) ?
                               listing.pictures[0].url :
                               "https://s3-us-west-1.amazonaws.com/scarebnbprod/no_image.jpg",
          userPictureUrl = (listing.user_picture) ?
                            listing.user_picture.url :
                            "https://s3-us-west-1.amazonaws.com/scarebnbprod/no-profile-img.gif";
        return(
          <div>
            <NavBar search={searchBarOptions}/>
            <header id='listing-header'>
              <img id='listing-header-pic' src={listingPictureUrl} height='700' />

              <section className='listing-header-detail clearfix'>

                <div id='listing-show-user'>
                  <img src={userPictureUrl} height='100' width='100' />
                  <div>{listing.ghost.username}</div>
                </div>

                <div id='listing-header-info'>
                  <div id='listing-show-title'>{listing.title}</div>
                  <div id='listing-show-title-detail'>{listing.address}</div>

                  <div className='header-amenities clearfix'>
                    <div>
                      <img src={'https://s3-us-west-1.amazonaws.com/scarebnbprod/tombstone.png'} height='40' />
                      nearby cemetary
                    </div>

                    <div>
                      <img src={'https://s3-us-west-1.amazonaws.com/scarebnbprod/butler.png'} height='40' />
                      creepy butler
                    </div>

                    <div>
                      <img src={'https://s3-us-west-1.amazonaws.com/scarebnbprod/children.png'} height='40' />
                      demented children
                    </div>
                  </div>
                </div>



                <div id='listing-show-rsvp-content'>
                  <div className='listing-show-rsvp-title clearfix'>
                    <div id='listing-show-rsvp-toenails'>
                      <div id='listing-show-rsvp-price'>{listing.toe_nails}</div>
                      <img className='toenail-pic' src={'https://s3-us-west-1.amazonaws.com/scarebnbprod/toenail.png'} height='25' />
                      <div id='rsvp-per-night'>per night</div>
                    </div>
                  </div>

                  <div className='show-dates-list clearfix'>
                    <Dates onChangeCallback={this.handleDatesChange} />
                  </div>

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
              <div className='listing-show-content'>
                {listing.description}
              </div>

              <div className='listing-show-content'>
                <div className='listing-show-section-title'>Amenities</div>
                  <ul id='amenities-list'>
                    <li>poor lighting</li>
                    <li>victorian-era self-portraits</li>
                    <li>healthy crow population</li>
                    <li>abundant cob webs</li>
                    <li>TV with static channel</li>
                    <li>secret basement</li>
                    <li>abandoned water well</li>
                    <li>resident psycho</li>
                    <li>creeky floorboards</li>
                    <li>demented children</li>
                  </ul>
              </div>

              <div className='listing-show-content'>
                <div className='listing-show-section-title'>Upcoming Reservations</div>
                <UpcomingReservations reservations={listing.reservations}/>
              </div>
            </main>

            <Footer />

          </div>
        );
    }
  }
});
