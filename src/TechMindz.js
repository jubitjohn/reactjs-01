import React, { Component } from 'react'
import Courses from './Courses';

export default class TechMindz extends Component {
    constructor(props){
        super(props)
        this.state={display:true}
    }
    delHeader=()=>{
        if(this.state.display){
        this.setState({display:false})
        document.getElementById('btn1').innerHTML="Show header"}
        else{
            this.setState({display:true})
        document.getElementById('btn1').innerHTML="Hide header"

        }

     
    }
    
  render() {

    let myheader;
    if(this.state.display){
        myheader=<Courses/>;
    }



    return (
      <div>{myheader}
      <button type='button' id='btn1' onClick={this.delHeader} >Hide header</button></div>
    )
  }
}
