( function (root) {
  var ManageActions = root.ManageActions = {

    getUserInfo: function (id) {
      $.ajax({
        url: '/api/users/' + id + '.json',
        method: 'GET',
        data: id,
        success: function (userInfo) {
          console.log('successful user info ajax');
          console.log(userInfo);
          ManageActions.dispatchUser(userInfo);
        }
      });
    },

    deleteListing: function (options) {
      $.ajax({
        url: '/api/listings/' + options.listingId + '.json',
        method: 'DELETE',
        data: options.listingId,
        success: function () {
          console.log('successful listing delete ajax');
          ManageActions.getUserInfo(options.userId);
        }
      });
    },

    createListing: function (listingAttrs) {
      $.ajax({
        url: '/api/listings.json',
        method: 'POST',
        data: listingAttrs,
        success: function () {
          console.log('successful listing create ajax');
          ManageActions.getUserInfo(listingAttrs.ghost_id);
        }
      });
    },

    dispatchListingUpdate: function (listings) {
      Dispatcher.dispatch({
        actionType: 'delete_listing',
        listings: listings
      });
    },

    dispatchUser: function (userInfo) {
      Dispatcher.dispatch({
        actionType: 'get_user',
        userInfo: userInfo
      });
    }
  };
})(this);
