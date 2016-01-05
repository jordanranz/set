import React, { Component, PropTypes } from 'react';
import Card from '../components/Card';

class App extends Component {
  render() {

    return (
        <div>
            <Card color="green" shape="diamond" shading="solid" number="three" />
        </div>
    );
  }
}

export { App as default };
