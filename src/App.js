import './App.css';
import GridItem from './GridItem';
import React, { Component } from 'react'
import GridRow from "./GridRow";
import Header from "./Header";
import Footer from "./Footer";
class App extends Component {
  constructor(){
    super();
    this.state={

    gameState: [
      ["","",""],
      ["","",""],
      ["","",""]
    ],
      playerTurn:"X"
    }
  }
  clickHandler=(rowIndex,colIndex)=>{
    const tempGameState=[...this.state.gameState]
    if(this.checkWinner(tempGameState)===true ||tempGameState[rowIndex][colIndex]!=="") {
      return tempGameState
       //if the winning condns are satisfied it should return here


  }
    else {
    tempGameState[rowIndex][colIndex]=this.state.playerTurn;
    this.setState({
      gameState:tempGameState,
      playerTurn:this.state.playerTurn==="X"?"O":"X"
    })
  }
  
}
  
  checkWinner=(tempState)=>{
    
    const [a,b,c]=tempState[0];
    const [d,e,f]=tempState[1];
    const [g,h,i]=tempState[2];

    return (
      this.checkThree(a, b, c) ||
      this.checkThree(d, e, f) ||
      this.checkThree(g, h, i) ||
      this.checkThree(a, d, g) ||
      this.checkThree(b, e, h) ||
      this.checkThree(c, f, i) ||
      this.checkThree(a, e, i) ||
      this.checkThree(c, e, g)
    )

  }
  checkThree=(a, b, c)=>{
    if (a!=="" || b!=="" || c!=="") return false
    return a === b && b === c
  }
  render() {
    return (
      <div className="container">
       <Header/>
     
      <div id="board">
      {this.state.gameState.map((row,rowIndex)=>(
        <GridRow row={row} key={rowIndex} rowIndex={rowIndex} clickHandler={this.clickHandler}/>
      ))}
      </div>
      {/* <GridRow/>
      <GridRow/>
      <GridRow/> */}
      <Footer turn={this.state.playerTurn}/>
        
      </div>
    )
  }
}



export default App;
