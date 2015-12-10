var SessionUtil = {
  logOut: function () {
    $.ajax({
      url: '/session',
      method: 'DELETE',
      success: function () {
        window.location = "/"
      }
    });
  }
}
