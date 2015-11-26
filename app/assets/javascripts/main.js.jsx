$( function () {
  var root = document.getElementById('app'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    mixins: [ReactRouter.History],

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
      <Route name='listings-index' component={ListingsIndex} path="listings/:search" />
      <Route component={ListingsShow} path="listing/:listingId"/>
      <Route component={GhostPage} path="/user" />
    </Route>
  );

  if (root) {
      React.render(<Router>{routes}</Router>, root);
  }
})
