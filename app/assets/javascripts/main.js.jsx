var Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Link = ReactRouter.Link,
    NotFoundRoute = ReactRouter.NotFoundRoute;

var App = React.createClass({
  render: function () {
      return(
        <div>
          {this.props.children}
        </div>
      );
  }
});

var routes = (
  <Route name='app' component={App}  path="/">
    <IndexRoute name='home' component={Home} />
    <Route name='listings-index' component={ListingsIndex} path="listings" />
    <Route component={ListingsShow} path="listings/:listingId"/>
    <NotFoundRoute component={NotFoundPage} />
  </Route>
);

$( function () {
  React.render(<Router>{routes}</Router>, document.getElementById('app'));
});
