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
                    showalert:false,
                    selectValue:" "        }
        this.onCheckChange=this.onCheckChange.bind(this)
        this.onRadioChange=this.onRadioChange.bind(this)
        this.onDropdownChange=this.onDropdownChange.bind(this)
    } 

    onCheckChange =(event)=>
    {
        this.setState({[event.target.name] : event.target.checked })
    }
    onRadioChange=(event)=>
    {
        this.setState({[event.target.name] : event.target.value })
    }

    onDropdownChange=(event) =>
    {
        this.setState({selectValue:event.target.value })
    }

    handletext = (event,key) =>

    {

             this.setState({[`${key}`]:event.target.value})
         
               
    }

   
   handlegender=(event) =>
    {
        this.setState({Gender:event.target.value})
        
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
                onChange={(event)=> this.handletext(event,'FirstName')} /> <br/>

            <label> LastName </label><br/>
            <input type="text" value={this.state.LastName}
            onChange={(event)=>this.handletext(event,'LastName')} /> <br/>
            
            <label> DateOfBirth </label><br/>
            <input type="date" value={this.state.DateOfBirth} 
                onChange={(event)=>this.handletext(event,'DateOfBirth')} /> <br/>

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
                onChange={(event)=>this.handletext(event,'Email')}/> <br/>

            <label> PhoneNumber</label><br/>
            <input type="number"value={this.state.PhoneNumber}
                onChange={(event)=>this.handletext(event,'PhoneNumber')}/> <br/>

                <label>Location</label><br/>
                <divv>
                <select value={this.state.selectValue} onChange={this.onDropdownChange} >
                <option value="India"> India </option>              
                <option value="United State" > United State </option>             
                <option value="United Kingdom" > United Kingdom </option>                 
                 </select>   
                 </divv>   <br/>      

            <label> Message </label><br/>
            <textarea value={this.state.Message}
                onChange={(event)=>this.handletext(event,'Message')}/> <br/>

            
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
