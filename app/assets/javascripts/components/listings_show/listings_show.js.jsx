var ListingsShow = React.createClass({
  render: function () {
    return(
      <div>
        Hello!
        <div>this.props.params: {this.props.params}</div>
        <div>this.props.params.query: {this.props.params.query}</div>
        <div>this.props.path: {this.props.path}</div>
      </div>
    );
  }
});
