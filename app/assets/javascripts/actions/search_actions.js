( function (root) {
  var SearchActions = root.SearchActions = {
    mapMoved: function (options) {

      options.check_in = options.checkIn || DateUtil.getDefault("checkIn")
      options.check_out = options.checkOut || DateUtil.getDefault("checkOut")

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
    },

    fetchUserPic: function () {
      $.ajax({
        url: '/api/picture.json',
        method: 'GET',
        success: function (userPic) {
          console.log('successful userPic ajax');
          console.log(userPic);
          Dispatcher.dispatch({
            actionType: "user_pic",
            userPic: userPic
          })
        }
      });
    },

    listingHover: function (listingId) {
      Dispatcher.dispatch({
        actionType: "listing_hover",
        listingId: listingId
      })
    },

    listingLeave: function (listingId) {
      Dispatcher.dispatch({
        actionType: "listing_leave",
        listingId: listingId
      })
    }
  };
})(this);
