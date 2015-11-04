var DateUtil = {
  getDefault: function (type) {
    var today = new Date();
    var day = today.getDate();

    if (type === 'Check out') {
      today.setDate(day + 1);
      day = today.getDate();
    }

    var month = today.getMonth() + 1; //January is 0
    var year = today.getFullYear();

    if (day < 10) {
      day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }

    return (year + '-' + month + '-' + day);
  }
};
