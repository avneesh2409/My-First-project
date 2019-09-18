import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
 import axios from 'axios';


class Facebook extends Component{
constructor(){
 super();
//  this.state={
//    name:'',
//    email:'',
//    token:''
//  }
  this.responseFacebook=this.responseFacebook.bind(this);
}
responseFacebook = (response) => {
  if(response){
    console.log(response);
    let payload={
      //fbData: {
        name:response.name,
        email:response.id,
        token:response.accessToken
      //}
    }
    axios({
      method: 'post',
      url: 'http://localhost:56702/api',
      data: JSON.stringify(payload),
      headers: {
      'Content-Type': 'application/json'
      },
      success: function(resp){
        console.log(resp);  
      },
      error: function(e){
        debugger;
      }
    });
  }
}

 
render(){

 
 return ( <FacebookLogin
    appId="422443185136180"
    onFailure={this.responseFacebook}
    autoLoad={true}
    cookie={true}
    fields="name,email,picture"
    callback={this.responseFacebook}
    cssClass="form-wrapper1"
    icon="fa-facebook"
  />

);

}
}
export default Facebook;

