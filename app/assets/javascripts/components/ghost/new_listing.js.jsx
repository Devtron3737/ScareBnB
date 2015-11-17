var NewListing = React.createClass({
  handleSubmit: function () {

  },

  render: function () {

    return(
      <div className='manage-category-block clearfix'>
        <div className='manage-category-block-info' id='reservation-address'>
          <div>List Your Haunting</div>
          <ul>
            <li>Adress <input type='text' id='manage-new-address' placholder='ex:  525 S Winchester Blvd San Jose, CA' /></li>
            <li>City <input type='text' id='manage-new-city' placholder='ex: San Jose' /></li>
            <li>State <input type='text' id='manage-new-state' placholder='ex: CA' /></li>
            <li>Title <input type='text' id='manage-new-title' placholder='ex:  Winchester Mystery House' /></li>
            <li>Description <input type='text' id='manage-new-description' placholder='ex: CA' /></li>
            <li>Toenails <input type='text' id='manage-new-toenails' /></li>
          </ul>

          <button onClick={this.handleSubmit}
                  className='button'
                  id='manage-category-remove' >
                  List
          </button>
        </div>
      </div>
    )
  }
});
