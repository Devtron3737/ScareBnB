( function (root) {
  var SearchActions = root.SearchActions = {
    listingsSearch: function (options) {
      // add guests and date defaults to options
      $.ajax({
        url: '/api/listings.json',
        method: 'GET',
        data: options,
        success: function (listings) {
          console.log('success!');
          console.log(listings);
          SearchActions.dispatchListings(listings);
        }
      });
    },

    dispatchListings: function (listings) {
      SearchDispatcher.dispatch({
        actionType: "listings_search",
        listings: listings
      });
    }
  };
})(this);
