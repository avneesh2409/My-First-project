import React,{Component,Fragment} from "react";
import './App.css';
//import {Redirect} from "react-router-dom";

class Registration extends Component{
constructor(props){
  super(props);
this.state={
    first:'',
    middle:'',
    last:'',
    age:'',
    email:'',
    contact:'',
    password:'',
    nationality:''
}
this.clearstate=this.clearstate.bind(this);
this.submithandler=this.submithandler.bind(this);
this.handleChange=this.handleChange.bind(this);
}
handleChange(event) {
 
  
      if(event.target.placeholder==='firstname')
    {
      this.setState( {first:event.target.value});
    }
    if(event.target.placeholder==='password')
    {
      this.setState( {password:event.target.value});
    }
  
    if(event.target.placeholder==='middlename')
    {
      this.setState( {middle:event.target.value});
    }
    if(event.target.placeholder==='lastname')
    {
      this.setState( {last:event.target.value});
    }
    if(event.target.placeholder==='age')
    {
      this.setState( {age:event.target.value});
    }
    if(event.target.placeholder==='contact')
    {
      this.setState( {contact:event.target.value});
    }
    if(event.target.placeholder==='nationality')
    {
      this.setState( {nationality:event.target.value});
    }
    if(event.target.placeholder==='email')
    {
     this.setState( {email:event.target.value});
    }

}
clearstate(opt){
console.log(opt);
this.setState({
   first:'',
   middle:'',
   last:'',
   age:'',
   email:'',
   contact:'',
   password:'',
   nationality:''
});
}
submithandler=(event)=>{
  console.log(this.state);
event.preventDefault();
}
render(){
return (
<Fragment>
<div class="form-wrapper2">
  <form onSubmit={this.submithandler}>
    <h1 className="fw1 text-center">Register here</h1>

    <div class="form-item">
                <input type="text"  onChange={this.handleChange} value={this.state.first}  placeholder="firstname"  required />
    </div>
    <div class="form-item">
                <input type="text"   onChange={this.handleChange} value={this.state.middle}  placeholder="middlename"  required />
    </div>
    <div class="form-item">
                <input type="text"   value={this.state.last} onChange={this.handleChange} placeholder="lastname"  required />
    </div>
    <div class="form-item">
        <input type="text" onChange={this.handleChange} value={this.state.age}  placeholder="age"  required />
    </div>
    <div class="form-item">
                <input type="text"   value={this.state.email}  placeholder="email" onChange={this.handleChange} required />
    </div>
    <div class="form-item">
                <input type="text"   value={this.state.contact}  placeholder="contact" onChange={this.handleChange} required />
    </div>
    <div class="form-item">
                <input type="text"   value={this.state.nationality}  placeholder="nationality" onChange={this.handleChange} required />
    </div>
    <div class="form-item">
                <input type="password" value={this.state.password}  placeholder="password" onChange={this.handleChange} required />
    </div>
    
    <div class="button-panel">
                <input type="submit" onClick={this.clearstate} class="button" value="Register" />
    </div>
  </form>
  <div class="reminder">
    <p>Already have an Account <a href="/login">Login Now</a></p>
  </div>
  
</div>


</Fragment>

);

}

}
export default Registration;
