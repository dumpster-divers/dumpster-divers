import React from 'react';

class TallyCounter extends React.Component {
  state = {
    count: 0
  }
  componentDidMount () {
    fetch('/api/trash/global-count')
      .then(res => res.json())
      .then(res => this.setState({count: res[0].globalRemaining}))
  }
  render () {
    return (<>
        {this.state.count}
      </>)

  }
}

export default TallyCounter;
