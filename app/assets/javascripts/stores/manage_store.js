( function (root) {
  var _user = {};
  var USER_CHANGE = "user_change";

  var ManageStore = root.ManageStore = $.extend(
    {},
    EventEmitter.prototype,
    {
      dispatcherId: Dispatcher.register( function (payLoad) {
        switch (payLoad.actionType) {
          case 'get_user':
            ManageStore.updateUser(payLoad.userInfo);
            break;
        }
      }),

      updateUser: function (user) {
        _user = user;
      },

      getUser: function () {
        var user = {};
        for (var attr in _user) {
          user[attr] = _user[attr];
        }

        return user;
      },

      addUserChangeListener: function (callback) {
        this.on(USER_CHANGE, callback);
      },

      removeUserChangeListener: function (callback) {
        this.off(USER_CHANGE, callback);
      }

    }
  );
})(this);
