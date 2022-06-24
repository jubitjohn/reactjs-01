import React, { Component } from 'react'
import './user.css'

export default class User extends Component {
//   constructor(props){
//       super(props)
//   }
  render() {
    return (
      <div className='usercomponent'>I'm {this.props.user.name} and I'm {this.props.user.age} years old</div>
    )
  }
}





