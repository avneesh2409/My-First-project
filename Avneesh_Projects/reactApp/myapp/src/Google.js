import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
// or
//import { GoogleLogin } from 'react-google-login';
  
class Google extends Component{
  constructor(){
    super();
     this.responseGoogle=this.responseGoogle.bind(this);
   }

  responseGoogle = (response) => {
    console.log(response);
  }
 render(){
  return(
  <GoogleLogin
    clientId="158230404472-j8hel1qi1dkmh01baq5hia18vvnd9qs5.apps.googleusercontent.com"
    buttonText="Google Login"
    className="form-wrapper2"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  />

);
  }
}
export default Google;