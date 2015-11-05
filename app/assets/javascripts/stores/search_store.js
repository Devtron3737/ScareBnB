( function (root) {

  var _listings = [];
  var _place = {lat: 0, lng: 0};
  var LISTINGS_CHANGE = "listings_change";
  var PLACE_CHANGE = "place_change";

  var SearchStore = root.SearchStore = $.extend(
    {},
    EventEmitter.prototype,
    {
      dispatcherId: SearchDispatcher.register(function (payLoad) {
        switch (payLoad.actionType) {
          case 'listings_search':
            SearchStore.updateListings(payLoad.listings);
            break;
          case 'place_search':
            SearchStore.updatePlace(payLoad.place);
            break;
        }
      }),

      getListings: function () {
        return _listings.slice();
      },

      getPlace: function () {
        var placeDup = {};

        for (var coord in _place) {
          placeDup[coord] = _place[coord];
        }

        return placeDup;
      },

      updateListings: function (listings) {
        _listings = listings;
        this.emit(LISTINGS_CHANGE);
      },

      updatePlace: function (place) {
        _place = place;

        this.emit(PLACE_CHANGE);
      },

      addListingsChangeListener: function (callback) {
        this.on(LISTINGS_CHANGE, callback);
      },

      addPlaceChangeListener: function (callback) {
        this.on(PLACE_CHANGE, callback);
      },

      removeListingsChangeListener: function (callback) {
        this.off(LISTINGS_CHANGE, callback);
      },

      removePlaceChangeListener: function (callback) {
        this.off(PLACE_CHANGE, callback);
      }
    }
  );

})(this);
