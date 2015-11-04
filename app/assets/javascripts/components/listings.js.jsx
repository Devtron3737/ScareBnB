var Listings = React.createClass({
  render: function () {
    return(
      <div>
        <NavBar />
        <section className='listings-content clearfix' >
          <Dates />
          <ListingsList />
        </section>
        <Map />
      </div>
    );
  }
});

$(function () {
  React.render(
    <Listings />,
    document.getElementById('listings-index')
  );
});
