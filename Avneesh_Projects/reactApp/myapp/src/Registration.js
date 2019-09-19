import React,{Component,Fragment} from "react";
import './App.css';

class Registration extends Component{
constructor(props){
this.state={
    first:null,
    middle:null,
    last:null,
    age:null,
    email:null,
    contact:null,
    password:null,
    nationality:null
}
submithandler=()=>{
this.setState(arg=>({
    first:arg.first,
    middle:arg.middle,
    last:arg.last,
    age:arg.age,
    email:arg.email,
    contact:arg.contact,
    password:arg.password,
    nationality:arg.nationality
}))
}
}

    render(){
return (
<Fragment>
<div class="form-wrapper">
  <form onSubmit={submithandler}>
    <h3>Login here</h3>

    <div class="form-item">
                <input type="text"  value={this.state.first} required />
    </div>
    <div class="form-item">
                <input type="text"   value={this.state.middle} required />
    </div>
    <div class="form-item">
                <input type="text"   value={this.state.last} required />
    </div>
    <div class="form-item">
                <input type="text"   value={this.state.age} required />
    </div>
    <div class="form-item">
                <input type="text"   value={this.state.email} required />
    </div>
    <div class="form-item">
                <input type="text"   value={this.state.contact} required />
    </div>
    <div class="form-item">
                <input type="text"   value={this.state.nationality} required />
    </div>
    <div class="form-item">
                <input type="password" value={this.state.password} required />
    </div>
    
    <div class="button-panel">
                <input type="submit" class="button" title="Log In" />
    </div>
  </form>
  <div class="reminder">
    <p>Already have an Account <a href={}>Login Now</a></p>
  </div>
  
</div>

</Fragment>

);

}

}
export default Registration;
