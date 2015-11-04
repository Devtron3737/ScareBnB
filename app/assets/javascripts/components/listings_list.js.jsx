var ListingsList = React.createClass({
  getInitialState: function () {
    return {listings: []};
  },

  componentDidMount: function () {
    SearchStore.addChangeListener(_onChange);
  },

  _onChange: function () {
    var listings = SearchStore.all();
    this.setState({listings: listings});
  },

  render: function () {
    return(
      <div className='listing-block'>
        {
          this.state.listings.map( function (listing) {
            return <ListingBlock listing={listing} />;
          })
        }
      </div>
    );

  }
});
