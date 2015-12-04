( function (root) {

  var _userPic = {},
      _listings = {},
      _place = {lat: 0, lng: 0},
      _listingShow = {},
      _dates = {
        checkIn: "",
        checkOut: ""
      },
      _listingHover = "",
      _listingLeave = "",
      LISTINGS_CHANGE = "listings_change",
      PLACE_CHANGE = "place_change",
      LISTING_SHOW_CHANGE = "listing_show_change",
      DATE_CHANGE = "date_change",
      LISTING_HOVER_CHANGE = "listing_hover",
      LISTING_LEAVE_CHANGE = "listing_leave",
      USER_PIC_CHANGE = "user_pic_change";

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
          case 'listing_show':
            SearchStore.updateListingShow(payLoad.listing);
            break;
          case 'date_change':
            SearchStore.updateDates(payLoad.dates);
            break;
          case 'listing_hover':
            SearchStore.updateListingHover(payLoad.listingId)
            break;
          case 'listing_leave':
            SearchStore.updateListingLeave(payLoad.listingId)
            break;
          case 'user_pic':
            SearchStore.updateUserPic(payLoad.userPic)
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

      getDates: function () {
        var datesDup = {};

        for (var date in _dates) {
          datesDup[date] = _dates[date];
        }

        return datesDup;
      },

      getListingShow: function () {
        var listing = {};
        for (var j in _listingShow) {
          listing[j] = _listingShow[j];
        }

        return listing;
      },

      getListingHover: function () {
        return _listingHover.toString().slice()
      },

      getListingLeave: function () {
        return _listingLeave.toString().slice()
      },

      getUserPic: function () {
        var userPic = {};
        for (var j in _userPic) {
          userPic[j] = _userPic[j];
        }

        return userPic;
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

      updateDates: function (dates) {
        _dates = dates;
        this.emit(DATE_CHANGE);
      },

      updateListingHover: function (listingId) {
        _listingHover = listingId;

        this.emit(LISTING_HOVER_CHANGE);
      },

      updateListingLeave: function (listingId) {
        _listingLeave = listingId;

        this.emit(LISTING_LEAVE_CHANGE);
      },

      updateUserPic: function (userPic) {
        _userPic = userPic;

        this.emit(USER_PIC_CHANGE)
      },

      addListingsChangeListener: function (callback) {
        this.on(LISTINGS_CHANGE, callback);
      },

      addPlaceChangeListener: function (callback) {
        this.on(PLACE_CHANGE, callback);
      },

      addDatesChangeListener: function (callback) {
        this.on(DATE_CHANGE, callback)
      },

      addListingShowChangeListener: function (callback) {
        this.on(LISTING_SHOW_CHANGE, callback);
      },

      addListingHoverChangeListener: function (callback) {
        this.on(LISTING_HOVER_CHANGE, callback);
      },

      addListingLeaveChangeListener: function (callback) {
        this.on(LISTING_LEAVE_CHANGE, callback);
      },

      addUserPicChangeListener: function (callback) {
        this.on(USER_PIC_CHANGE, callback)
      },

      removeListingsChangeListener: function (callback) {
        this.removeListener(LISTINGS_CHANGE, callback);
      },

      removePlaceChangeListener: function (callback) {
        this.removeListener(PLACE_CHANGE, callback);
      },

      removeDatesChangeListener: function (callback) {
        this.removeListener(DATE_CHANGE, callback);
      },

      removeListingShowChangeListener: function (callback) {
        this.removeListener(LISTING_SHOW_CHANGE, callback);
      },

      removeListingHoverChangeListener: function (callback) {
        this.removeListener(LISTING_HOVER_CHANGE, callback);
      },

      removeListingLeaveChangeListener: function (callback) {
        this.removeListener(LISTING_LEAVE_CHANGE, callback);
      },

      removeUserPicChangeListener: function (callback) {
        this.removeListener(USER_PIC_CHANGE, callback)
      }
  });
})(this);
