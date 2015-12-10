var SearchUtil = {
  createGoogleAutocomplete: function (elementId) {
    var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(37.54025472421631, -122.6264275146484),
      new google.maps.LatLng(37.97454774677482, -122.2487724853516)
    );

    var options = {bounds: defaultBounds},
        searchField =  document.getElementById(elementId);

    return(
      new google.maps.places.Autocomplete(searchField, options)
    )
  },

  extractPlace: function (options) {

    if (options.place && options.place.geometry) {
      options.placeDefined(options.place);
    } else {
      var searchField =  document.getElementById(options.elementId),
          service = new google.maps.places.AutocompleteService();
      this.placeService = new google.maps.places.PlacesService(searchField);

      service.getPlacePredictions(
        {input: searchField.value || "San Francisco"},
        options.placeUndefined.bind(this)
      );
    }
  }
}
