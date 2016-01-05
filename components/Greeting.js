import React, { Component, PropTypes } from 'react'
import Card from '../components/Card';

class Greeting extends Component {
  render() {
    const { name } = this.props;
    return (
        <div>
            <h1>Hi {name}.</h1>
            <Card color="green" shape="diamond" shading="solid" number="three" />
        </div>
    )
  }
}

Greeting.PropTypes = {
  name: PropTypes.string.isRequired
}

export { Greeting as default };
