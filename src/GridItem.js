import React, { Component } from 'react'
import './GridItem.css'
export default class GridItem extends Component {
    constructor(){
        super()
    }
    render() {
        
        return (
        
            <div className="grid-item" onClick={()=>{this.props.clickHandler(this.props.rowIndex,this.props.colIndex)}}>
                {this.props.colText}
            </div>
        )
    }
}
