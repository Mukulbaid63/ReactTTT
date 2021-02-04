import React from 'react'
import GridItem from './GridItem.js';
import './GridRow.css';


export default class GridRow extends React.Component {
   constructor(){
       super()
      

   }
    render(){
            let gridrow=[<GridItem/>,<GridItem/>,<GridItem/>];
           return<div className="gridrow">
           {this.props.row.map((col,colIndex)=>(
             <GridItem key={this.props.rowIndex+colIndex} rowIndex={this.props.rowIndex} colIndex={colIndex} clickHandler={this.props.clickHandler} colText={col}/>
           ))}
           </div>
           
          
     
    }
}
