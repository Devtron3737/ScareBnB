( function (root) {
  var SearchActions = root.SearchActions = {
    mapMoved: function (options) {
      // add guests and date defaults to options
      $.ajax({
        url: '/api/listings.json',
        method: 'GET',
        data: options,
        success: function (listings) {
          console.log('successful listings ajax');
          console.log(listings);
          SearchActions.dispatchListings(listings);
        }
      });
    },

    placeSearch: function (place) {
      Dispatcher.dispatch({
        actionType: "place_search",
        place: place
      });
    },

    searchValue: function (value) {
      Dispatcher.dispatch({
        actionType: 'search_value',
        searchValue: value
      });
    },

    dispatchListings: function (listings) {
      Dispatcher.dispatch({
        actionType: "listings_search",
        listings: listings
      });
    },

    fetchListing: function (listingId) {
      $.ajax({
        url: '/api/listing/' + listingId + '.json',
        method: 'GET',
        success: function (listing) {
          console.log('successful listing show ajax');
          console.log(listing);
          // Dispatcher.dispatch({
          //   actionType: "show_listing",
          //   listing: listing
          // })
        }
      });


    }
  };
})(this);
