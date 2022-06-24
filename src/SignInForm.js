import React, { Component } from 'react'
import './SigninForm.css'
export default class SigninForm extends Component {
  render() {
    return (
      <div className="main">
        <div className="shadow shadow rounded px-5">
          <h5>Enter Your Credentials</h5>
        <form className="text-center">
              <div className="my-3">
                <label className="form-label">UserName: </label><input type="text" className=""></input>              
              </div>
              <div className="my-3">
                <label className="form-label">Password: </label><input type="text" className=""></input>               
              </div>
        </form>
        <div class="d-grid gap-2  mx-auto">
            <button class="btn btn-primary" type="button">Sign In</button>
        </div>
     </div>
     </div>
    )
}
}