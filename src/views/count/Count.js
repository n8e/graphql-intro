import React from 'react';
import Relay from 'react-relay';

class Count extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return(
      <div>
        Count: {this.props.counter}
      </div>
    );
  }
}

export default Count;
