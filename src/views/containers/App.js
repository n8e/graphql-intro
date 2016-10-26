import React from 'react';
import Relay from 'react-relay';

// query and mutation
import RootQueryType from '../../schema/types/RootType';
import RootMutationType from '../../schema/mutations/MutationType';

// count
import Count from '../count/Count';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var count = this.props.count;

    return (
      <div>
        <p value={count}>Inside App div</p>
        <Count counter={count} />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
  count: React.PropTypes.object.isRequired,
  relay: React.PropTypes.object,
};

export default Relay.createContainer(App, {
  fragments: {
    count: () => Relay.QL`
      fragment on Count {
        data {
          ${RootQueryType.getFragment('count')}
        }
      }
    `,
  }
});
