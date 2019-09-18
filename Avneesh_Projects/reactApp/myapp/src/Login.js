import React,{Component,Fragment} from "react";
//import App from './App.css';
import Facebook from './Facebook';
import Google from './Google';
import './App.css';
import axios from 'axios';
class Login extends Component{
  constructor(){
    super();
    this.state={
      name:"",
      password:"",
      email:""
    }
 //   this.handleSubmit=this.handleSubmit.bind(this);
  }
 
  
  
  // componentWillMount() {
  //   this.getData()
  // }

  // getData() {
  //   // // create a new XMLHttpRequest
  //   // var xhr = new XMLHttpRequest()

  //   // // get a callback when the server responds
  //   // xhr.addEventListener('load', () => {
     
  //   //   console.log(xhr.responseText)
  //   // })
  //   // // open the request with the verb and the url
  //   // xhr.open('GET', 'ihttp://localhost:56702/ap')
  //   // // send the request
  //   // xhr.send()
    
  // }

render(){
return (
<Fragment>
<Google />	
<Facebook />

<div class="form-wrapper">
  <form action="" method="post">
    <h3>Login here</h3>

    <div class="form-item">
                <input type="text" name="username" required="required" placeholder="Username" autofocus required></input>
    </div>
    
    <div class="form-item">
                <input type="password" name="password" required="required" placeholder="Password" required></input>
    </div>
    
    <div class="button-panel">
                <input type="submit" class="button" title="Log In" name="login" value="Login"></input>
    </div>
  </form>
  <div class="reminder">
    <p>Not a member? <a href="register.php">Sign up now</a></p>
    <p><a href="dummy.php">Forgot password?</a></p>
  </div>
  
</div>

</Fragment>

);

}

}
export default Login;
