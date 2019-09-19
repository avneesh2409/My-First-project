import React,{Component,Fragment} from "react";
import Facebook from './Facebook';
import Google from './Google';
import './App.css';


class Login extends Component{
constructor(props){
  super(props);
  this.state={
    username:'',
    password:''
  }
this.submithandler=this.submithandler.bind(this);
//this.onchange=this.onchange.bind(this);

}
submithandler(opt){
  console.log(opt);
}
componentDidMount(){
console.log("component will mount");

}
  render(){
  return(
    
    <Fragment>
      <div class="container text-center">
<Facebook /><hr />
<Google />
</div>
<div class="form-wrapper">
  <form onSubmit={this.submithandler}>
      <h1 className="fw1 text-center">Login here</h1>

      <div class="form-item">
                <input type="text" value={this.state.username} placeholder="username" required /> 
    </div>
    
    <div class="form-item">
                <input type="password" value={this.state.password} placeholder="password" required/> 
    </div>
    
    <div class="button-panel">
                <input type="submit" class="button" value="Log In" /> 
    </div>

</form>
 
  <div class="reminder">
      <p>Not a member? <a href="/register">Sign up now</a></p>
      <p><a href="dummy.php">Forgot password?</a></p>
  </div>
</div>  
</Fragment>
);
}
}
export default Login;