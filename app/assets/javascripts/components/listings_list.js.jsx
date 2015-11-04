var ListingsList = React.createClass({
  getInitialState: function () {
    return {listings: [
{
id: 1,
ghost_id: 1,
toe_nails: 21,
city: "San Francsico",
state: "CA",
address: "111 Madrid St.",
amenities: [
"stuff"
],
description: "Boogys place",
lat: 37.727635,
lng: -122.428021,
title: "Boogys place"
},
{
id: 2,
ghost_id: 1,
toe_nails: 221,
city: "San Francsico",
state: "CA",
address: "2762 40th Ave.",
amenities: [
"stuff"
],
description: "Boogys 2nd place",
lat: 37.735323,
lng: -122.497367,
title: "Boogys second place"
},
{
id: 3,
ghost_id: 2,
toe_nails: 134,
city: "Berkeley",
state: "CA",
address: "2445 Prospect St.",
amenities: [
"stuff"
],
description: "Caspers place",
lat: 37.86625,
lng: -122.249629,
title: "Caspers place"
},
{
id: 4,
ghost_id: 3,
toe_nails: 54,
city: "Oakland",
state: "CA",
address: "824 54th St.",
amenities: [
"stuff"
],
description: "Dorothys place",
lat: 37.839046,
lng: -122.270618,
title: "Dorothys place"
},
{
id: 5,
ghost_id: 3,
toe_nails: 4,
city: "San Francisco",
state: "CA",
address: "222 Willard North",
amenities: [
"stuff"
],
description: "Dorothys second place",
lat: 37.776441,
lng: -122.456654,
title: "Dorothys second place"
},
{
id: 6,
ghost_id: 2,
toe_nails: 1,
city: "San Francisco",
state: "CA",
address: "1700 Irving St.",
amenities: [
"stuff"
],
description: "Caspers second place",
lat: 37.763782,
lng: -122.476104,
title: "Caspers second place"
}
]};
  },

  componentDidMount: function () {
    SearchStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    var listings = SearchStore.all();
    this.setState({listings: listings});
  },

  render: function () {
    return(
      <div className='listings-list clearfix'>
        {
          this.state.listings.map( function (listing) {
            return <ListingBlock listing={listing} />;
          })
        }
      </div>
    );

  }
});
