import React, { Component } from 'react';
//import Popup from "reactjs-popup";

class Child extends Component{
  constructor(props){
    super(props)
      }

        renderpopup=() => 
        { console.log("******",this.props);
          return(
            <div style={{position:'absolute',top: '0px',right :'250px',width:'50%', height:'400px', backgroundColor:'#D3D3D3' ,border: '3px solid #73AD21'}}>
                      <p>FirstName:{this.props.parentstate.FirstName} </p>
                      <p>LastName:{this.props.parentstate.LastName} </p>
                      <p>DateOfBirth:{this.props.parentstate.DateOfBirth} </p>
                      <p>Email: {this.props.parentstate.Email} </p>
                      <p>PhoneNumber: {this.props.parentstate.PhoneNumber} </p>
                      <p>Football:{this.props.parentstate.Football.toString()} </p>
                      <p>Cricket:{this.props.parentstate.Cricket.toString()} </p>
                      <p>Gender:{this.props.parentstate.Gender} </p>
                      <p>Message:{this.props.parentstate.Message} </p>
            </div>
          )
        }
        
        
    render(){
      return(this.renderpopup())
    }
  }

  




    

  
  export default Child;