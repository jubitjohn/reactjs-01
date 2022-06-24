import React, { Component } from 'react'
import User from './User'

export default class Employee extends Component {
  render() {
    const userdetails={name:'Jubit',age:'22'}
    return (
      <div>
          They are my Employee:
          <User user={userdetails}/>
         
      </div>
    )
  }
}
