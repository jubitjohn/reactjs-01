import React, { Component } from 'react'
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default class LoginControl extends Component {
  constructor(props) {
    super(props)
    this.state={isLoggedIn:false};
    this.handleLoginClick=this.handleLoginClick.bind(this);
    this.handleLogoutClick=this.handleLogoutClick.bind(this);
  }  
  handleLoginClick=()=>{
    this.setState({isLoggedIn:true});
  }
  handleLogoutClick=()=>{
    this.setState({isLoggedIn:false});
  }
  render() {
    const isLoggedIn=this.state.isLoggedIn ;
    let display;
    if(isLoggedIn){
        // button= <LogoutButton onClick={this.handleLogoutClick}/>
        display=<button onClick={this.handleLogoutClick}>LogOut</button>
    }
    else{
        // button= <LoginButton onClick={this.handleLoginClick}/>
        display=<button onClick={this.handleLoginClick}>Login</button>
    }
    return (
      <div>
        <Greeting />
      {display}
      </div>
    )
  }
}
