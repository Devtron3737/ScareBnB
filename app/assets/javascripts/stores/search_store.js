( function (root) {

  var _listings = [];
  var CHANGE_EVENT = "change";

  var SearchStore = root.SearchStore = $.extend(
    {},
    EventEmitter.prototype,
    {
      dispatcherId: SearchDispatcher.register(function (payLoad) {
        switch (payLoad.actionType) {
          case 'listings_search':
            SearchStore.updateListings(payLoad.listings);
            break;
        }
      }),

      all: function () {
        return _listings.slice();
      },

      updateListings: function (listings) {
        _listings = listings;
        this.emit(CHANGE_EVENT);
      },

      addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
      },

      removeChangeListener: function (callback) {
        this.off(CHANGE_EVENT, callback);
      }
    }
  );

})(this);
