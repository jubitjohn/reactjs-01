import React, { Component } from 'react'

export default class FruitForm extends Component {
    constructor(props){
        super(props)
        this.state={value:'Coconut'}
    }
    handleChange=(event)=>{
        this.setState({value:event.target.value})
    }
    handleSubmit=(event)=>{
        alert('My favourate fruit is :'+this.state.value)
        event.preventDefault()
    }
  render() {
    return (
      <div><form onSubmit={this.handleSubmit}>
          <label>Pick your favourate fruit:
              <select value={this.state.value} onChange={this.handleChange}>
                  <option value="Mango">Mango</option>
                  <option value="Coconut">Coconut</option>
                  <option value="orange">orange</option>
                  <option value="Pineapple">Pineapple</option>
              </select>
              </label>
              <input type="submit" value="Submit Pick"/></form></div>
    )
  }
}
