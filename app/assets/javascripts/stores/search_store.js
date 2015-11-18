( function (root) {

  var _listings = {};
  var _place = {lat: 0, lng: 0};
  var _searchValue = "";
  var LISTINGS_CHANGE = "listings_change";
  var PLACE_CHANGE = "place_change";

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
          case 'search_value':
            SearchStore.updateSearchValue(payLoad.searchValue);
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

      getSearchValue: function () {
        return _searchValue.slice();
      },

      updateListings: function (listings) {
        _listings = listings;
        this.emit(LISTINGS_CHANGE);
      },

      updatePlace: function (place) {
        _place = place;

        this.emit(PLACE_CHANGE);
      },

      updateSearchValue: function (value) {
        _searchValue = value;
      },

      addListingsChangeListener: function (callback) {
        this.on(LISTINGS_CHANGE, callback);
      },

      addPlaceChangeListener: function (callback) {
        this.on(PLACE_CHANGE, callback);
      },

      removeListingsChangeListener: function (callback) {
        this.removeListener(LISTINGS_CHANGE, callback);
      },

      removePlaceChangeListener: function (callback) {
        this.removeListener(PLACE_CHANGE, callback);
      }
    }
  );

})(this);
