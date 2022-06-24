import React, { Component } from 'react'

export default class Courses extends Component {
    componentWillMount(){
        alert("The header is about to be unmounted")
    }
  render() {
    return (
      <div><h1>The Courses offered by User</h1>
      <ul>
      <li>react</li>
      <li>Python</li>
      </ul>

      </div>
    )
  }
}
