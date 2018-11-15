import React, { Component } from 'react';

const withData = View => class extends Component {
  render() {
    return <View {...this.props} />;
  }
};

export default withData;
