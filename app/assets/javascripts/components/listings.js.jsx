var Listings = React.createClass({
  render: function () {
    return(
      <div>
        <NavBar />
        <Dates />
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
