// action preparer has several functions:

// will take in dates and addresses and format into
// coords and dates

// will make ajax request to fetch listings based
// on coords and dates
//on success, will create action

//so user will input an address
//event listener will listen for the submition,
// and recieve coords from googles places object
// this will fire the action_preparer, which
// will make ajax request and, upon success
//create a new action which replaces the fetched
//listings

// a similar listener will also exist on the dates
// and map itself

( function (root) {
  var ActionPreparer = {
    formatRequest: function (type, options) {
      // types include listingsFetch
      // and then messages and such in the future
    },

    createAction: function (type, options) {
      var formattedOptions = ActionPreparer.formatRequest(type, options);
          ActionPreparer.makeRequest(type, formattedOptions);
    }
  };
})(this);
