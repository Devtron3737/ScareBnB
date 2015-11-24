var ListingsList = React.createClass({
  getInitialState: function () {
    return {listings: []};
  },

  componentDidMount: function () {
    SearchStore.addListingsChangeListener(this._onListingsChange);
  },

  componentWillUnmount: function () {
    SearchStore.removeListingsChangeListener(this._onListingsChange);
  },

  _onListingsChange: function () {
    var listings = SearchStore.getListings();
    this.setState({listings: listings});
  },

  render: function () {
    if (this.state.listings.length === 0) {
      return(
        <div>
          <div id='no-listings'>

            <div id='boo'>Boo!</div>
            <div id='no-listing-text'>
                 Doesn't look like theres any hauntings
                 in that area.  I hear there's been a lot of spiritual
                 activity closer to San Francisco...
            </div>
          </div>
          <IndexFooter />
        </div>

      );
    } else {
      return(
      <div>
        <div className='listings-list clearfix'>
          <div id='listings-count'>Showing {this.state.listings.length} listings</div>
          {
            this.state.listings.map( function (listing) {
              return <ListingBlock key={listing.id} listing={listing} />;
            })
          }
        </div>

        <IndexFooter />
      </div>
      );
    }
  }
});
