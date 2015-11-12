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

    dispatchUser: function (userInfo) {
      Dispatcher.dispatch({
        actionType: 'get_user',
        userInfo: userInfo
      });
    }
  };
})(this);
