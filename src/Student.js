import React, { Component } from 'react'

export default class Student extends Component {
  constructor(){
      super()
      this.state={name:"Jubit",gender:"Male",age:"22",course:"B.tech"};

  }  
  changeName=()=>{this.setState({name:"Angu",age:'20',gender:"female"})}
  render() {
    return (
      <div className='usercomponent'><h3>My name is {this.state.name}</h3>
      <h3>My age is {this.state.age}</h3>
      <h3>I'm a {this.state.gender} candidate</h3>
      <h3>I'm pursuing {this.state.course} </h3>
      <button type="button" onClick={this.changeName} >Find a Match
          </button></div>
    )
  }
}
