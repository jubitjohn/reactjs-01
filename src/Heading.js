import React, { Component } from 'react'

export default class Heading extends Component {
  constructor(props){
    super(props)
    this.state={mypet:'rocky'}
  }  
  //Willmount is not present is the newer version!!
  // componentWillMount(){
  //   console.log('Before Component')

  // }
  componentDidMount(){
    setTimeout(()=>
    {this.setState({mypet:'dog'})},1000)  

  }
  // shouldComponentUpdate(){
  //   return false;
  // }
  componentDidUpdate(){
    document.getElementById("div2").innerHTML="The Updaetd favourate pet is : "+this.state.mypet;
  }
  changePet=()=>{
    this.setState({mypet:'julie'})
  }
  // componentDidMount(){
  //   // console.log('After Component')
  //   setTimeout(()=> {this.setState({mypet:'teddy'},)},1000)
  // }
  render() {
    return (
      <div className= ''><h1 >My favourate pet is {this.state.mypet}</h1><br></br>
      <div id='div2'></div>
      </div>
    )
  }
}

