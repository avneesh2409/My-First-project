import React,{Component,Fragment} from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,NavLink,Link} from "react-router-dom";
import Route from "react-router-dom/Route";

//import Facebook from './Facebook';

class App extends Component{
  state={
    loggedIn:false
  }
  clickhandler = () =>{
this.setState={
  loggedIn:true
}
  }
render(){
  return (
 <Router>
<div className="App">
  <NavLink to="/about" >
    </NavLink>
    <input type="button" value="Log In" onClick={this.clickhandler} />
<Route path="/" exact strict
render={
  ()=>{
    return (<h1>Welcome to my first react App</h1>)
  }
}
  />

</div>
</Router>
  );
}
}

export default App;
