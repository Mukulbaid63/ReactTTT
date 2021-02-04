import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="turn">{this.props.turn}'s turn</div>
        )
    }
}
