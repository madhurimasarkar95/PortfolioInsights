import React, { Component } from 'react';
import Child from './childcomponent';

class Form extends Component{

    constructor(props){
        super(props);
        
        
        this.state={
                    FirstName :" ",
                    LastName:" ",
                    DateOfBirth:" ",
                    Email:" ",
                    PhoneNumber:" ",
                    Football:false,
                    Cricket:false,
                    Gender:" ",
                    Message:" ",
                    showalert:false
        }
        this.onCheckChange=this.onCheckChange.bind(this)
        this.onRadioChange=this.onRadioChange.bind(this)
    } 

    onCheckChange =(event)=>
    {
        this.setState({[event.target.name] : event.target.checked })
    }
    onRadioChange=(event)=>
    {
        this.setState({[event.target.name] : event.target.value })
    }

    handlefistname = (event) =>
    {
        this.setState({FirstName:event.target.value})
               
    }

    handlelastname = (event) =>
    {
        this.setState({LastName:event.target.value})
               
    }

    handledateofbirth= (event) =>
    {
        this.setState({DateOfBirth:event.target.value})
               
    }

    handleemail= (event) =>
    {
        this.setState({Email:event.target.value})
               
    }

    handlephonenumber= (event) =>
    {
        this.setState({PhoneNumber:event.target.value})
               
    }
    handlegender=(event) =>
    {
        this.setState({Gender:event.target.value})
        
    }

    handlemessage= (event) =>
    {
        this.setState({Message:event.target.value})
               
    }
    
    handlesubmit=(event) =>
    {
        this.setState({showalert:true})
        event.preventDefault();
    
    }
    render(){
        return(
            
            <div>
            <form onSubmit ={this.handlesubmit}>

            <label> FirstName </label><br/>
            <input type="text" value={this.state.FirstName}
                onChange={this.handlefistname} /> <br/>

            <label> LastName </label><br/>
            <input type="text" value={this.state.LastName}
            onChange={this.handlelastname} /> <br/>
            
            <label> DateOfBirth </label><br/>
            <input type="date" value={this.state.DateOfBirth} 
                onChange={this.handledateofbirth} /> <br/>

            <label>
                Hobbies : 
            </label>
             Foot Ball <input type="checkbox" name="Football" 
             checked={this.state.Football} 
            onChange={this.onCheckChange}/> 
             Cricket <input type="checkbox" name="Cricket" 
            checked={this.state.Cricket} 
            onChange={this.onCheckChange}/> <br/>

            <label>
                Gender :
            </label><br/>
            Female <input type="radio" 
            name="Gender" 
            value="Female"
            checked={this.state.Gender==="Female"} 
            onChange={this.onRadioChange}/> 

            
            Male <input type="radio"
             name="Gender"
              value="Male"
              checked={this.state.Gender==="Male"} 
            onChange={this.onRadioChange}/>  <br/>
            
            <label> Email </label><br/>
            <input type="email" value={this.state.Email}
                onChange={this.handleemail}/> <br/>

            <label> Phoneumber</label><br/>
            <input type="number"value={this.state.PhoneNumber}
                onChange={this.handlephonenumber}/> <br/>

            <label> Message </label><br/>
            <textarea value={this.state.Message}
                onChange={this.handlemessage}/> <br/>

            <input type= "submit" value="Submit"/><br/>
            
            </form>
             { this.state.showalert && 
            <Child parentstate={this.state}/> 
             }
</div>

        )
    }
}

export default Form;