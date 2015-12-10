var DateUtil = {

  getDefault: function (type) {
    var today = new Date();
    var day = today.getDate();

    if (type === 'checkOut') {
      today.setDate(day + 1);
      day = today.getDate();
    }

    var month = today.getMonth() + 1, //January is 0
        year = today.getFullYear();

    return DateUtil.formatDate(year, month, day)
  },

  correspondingDay: function (operation, refDate) {
    var date = new Date(refDate)
    var day = date.getDate();

    if (operation === "add") {
      date.setDate(day + 2) // new Date() gets set to day before today
    }                       // so dont have to adjust for substract

    day = date.getDate()

    var month = date.getMonth() + 1,
        year = date.getFullYear();

    return DateUtil.formatDate(year, month, day)
  },

  formatDate: function (year, month, day) {
    if (day < 10) {
      day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }

    return (year + '-' + month + '-' + day);
  },

  toString: function (date) {
    var date = new Date(date)

    return date.toDateString()
  }
};
