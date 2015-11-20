( function (root) {
  var SearchActions = root.SearchActions = {
    mapMoved: function (options) {

      options.check_in = options.check_in || DateUtil.getDefault("check_in")
      options.check_out = options.check_out || DateUtil.getDefault("check_out")

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

    // searchValue: function (value) {
    //   Dispatcher.dispatch({
    //     actionType: 'search_value',
    //     searchValue: value
    //   });
    // },

    dateChange: function (dates) {
      Dispatcher.dispatch({
        actionType: "date_change",
        dates: dates
      })
    },

    dispatchListings: function (listings) {
      Dispatcher.dispatch({
        actionType: "listings_search",
        listings: listings
      });
    },

    fetchListing: function (listingId) {
      $.ajax({
        url: '/api/listings/' + listingId + '.json',
        method: 'GET',
        success: function (listing) {
          console.log('successful listing show ajax');
          console.log(listing);
          Dispatcher.dispatch({
            actionType: "listing_show",
            listing: listing
          })
        }
      });


    }
  };
})(this);
