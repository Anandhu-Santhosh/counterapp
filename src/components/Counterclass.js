import React, { Component } from 'react'

export default class Counterclass extends Component {

    constructor(props){
        super(props)
        this.state={
            counter:0
        }
    }
  render() {
    return (
      <div>
        Counterclass
        <p>You clicked {this.state.counter} Times</p>
        <button onClick={()=>this.setState({counter: this.state.counter+1})}>Add</button>
        <button onClick={()=>this.setState({counter: this.state.counter-1})}>Sub</button>
        </div>
    )
  }
}
