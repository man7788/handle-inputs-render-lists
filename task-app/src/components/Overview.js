/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class MyList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>{this.props.tasksArray}</ul>
      </div>
    );
  }
}

export default MyList