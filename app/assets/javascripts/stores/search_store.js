( function (root) {

  var _listings = {},
      _place = {lat: 0, lng: 0},
      _searchValue = "",
      _listingShow = {},
      _dates = {
        check_in: DateUtil.getDefault("check_in"),
        check_out: DateUtil.getDefault("check_out")
      },
      LISTINGS_CHANGE = "listings_change",
      PLACE_CHANGE = "place_change",
      LISTING_SHOW_CHANGE = "listing_show_change",
      DATE_CHANGE = "date_change";

  var SearchStore = root.SearchStore = $.extend(
    {},
    EventEmitter.prototype,
    {
      dispatcherId: Dispatcher.register(function (payLoad) {
        switch (payLoad.actionType) {
          case 'listings_search':
            SearchStore.updateListings(payLoad.listings);
            break;
          case 'place_search':
            SearchStore.updatePlace(payLoad.place);
            break;
          // case 'search_value':
          //   SearchStore.updateSearchValue(payLoad.searchValue);
          //   break;
          case 'listing_show':
            SearchStore.updateListingShow(payLoad.listing);
            break;
          case 'date_change':
            SearchStore.updateDates(payLoad.type, payLoad.date);
            break;
        }
      }),

      getListings: function () {
        var listings = {}
        for (var i in _listings) {
          listings[i] = _listings[i]
        }

        return listings.listings;
      },

      getPlace: function () {
        var placeDup = {};

        for (var coord in _place) {
          placeDup[coord] = _place[coord];
        }

        return placeDup;
      },

      // getSearchValue: function () {
      //   return _searchValue.slice();
      // },

      getListingShow: function () {
        var listing = {};
        for (var j in _listingShow) {
          listing[j] = _listingShow[j];
        }

        return listing;
      },

      updateListings: function (listings) {
        _listings = listings;
        this.emit(LISTINGS_CHANGE);
      },

      updatePlace: function (place) {
        _place = place;

        this.emit(PLACE_CHANGE);
      },

      // updateSearchValue: function (value) {
      //   _searchValue = value;
      // },

      updateListingShow: function (listing) {
        _listingShow = listing;

        this.emit(LISTING_SHOW_CHANGE);
      },

      updateDates: function (type, date) {
        if (type === "check_in") {
          _dates.check_in = date;
        } else {
          _dates.check_out = date;
        }

        this.emit(DATE_CHANGE);
      },

      addListingsChangeListener: function (callback) {
        this.on(LISTINGS_CHANGE, callback);
      },

      addPlaceChangeListener: function (callback) {
        this.on(PLACE_CHANGE, callback);
      },

      addListingShowChangeListener: function (callback) {
        this.on(LISTING_SHOW_CHANGE, callback);
      },

      addDateChangeListener: function (callback) {
        this.on(DATE_CHANGE, callback);
      },

      removeListingsChangeListener: function (callback) {
        this.removeListener(LISTINGS_CHANGE, callback);
      },

      removePlaceChangeListener: function (callback) {
        this.removeListener(PLACE_CHANGE, callback);
      },

      removeListingShowChangeListener: function (callback) {
        this.removeListener(LISTING_SHOW_CHANGE, callback);
      },

      removeDateChangeListener: function (callback) {
        this.removeListener(DATE_CHANGE, callback);
      }
    }
  );

})(this);
