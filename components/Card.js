import React, { Component, PropTypes } from 'react'

class Card extends Component {
    render() {
        const { color, shape, shading, number } = this.props;
        return (
            <div className="card">
                <h1>This card has the following props:</h1>
                <ul>
                    <li>Color: {color}</li>
                    <li>Shape: {shape}</li>
                    <li>Shading: {shading}</li>
                    <li>Number: {number}</li>
                </ul>
            </div>
        )
    }
}

Card.PropTypes = {
    color: PropTypes.oneOf(['red', 'green', 'purple']).isRequired,
    shape: PropTypes.oneOf(['diamond','squiggle', 'oval']).isRequired,
    shading: PropTypes.oneOf(['solid', 'empty', 'striped']).isRequired,
    number: PropTypes.oneOf(['one', 'two', 'three']).isRequired
}

export { Card as default };
