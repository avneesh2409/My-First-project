import React,{Component,Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router,NavLink} from "react-router-dom";
import Route from "react-router-dom/Route";
import Registration from './Registration';
import Login from './Login';

class App extends Component{

  render() {
    return (
      <Router>
        <div className="form-wrapper">
        <ul>
          <li>
            <NavLink to="/" exact  >Home</NavLink>
          </li>
          <li>
            <NavLink to="/login" exact  >login</NavLink>
          </li>

          <li>
            <NavLink to="/register" exact strict >register</NavLink>
          </li>

          <li>
            <NavLink to="/user" exact strict>user</NavLink>
          </li>
          </ul>
          {/* <Prompt
            when={!this.state.loggedIn}
            message={(location)=>{
               return location.pathname.startsWith('/user') ? 'Are you sure?' : true
             }}
          /> */}

        <Route path="/" exact strict render={
          () => {
            return (
<h1 className="form-wrapper">Hi Welcome to App.js File thnk you visiting</h1>
            );
          }
        }/>
                <Route path="/login" exact strict render={
          () => {
            return (
<Login />
            );
          }
        }/>
                <Route path="/register" exact strict render={
          () => {
            return (
<Registration />
            );
          }
        }/>
                <Route path="/user" exact strict render={
          () => {
            return (
<p>Welcome to my user web page</p>
            );
          }
        }/>
       
        </div>
      </Router>
    );
  }

}

export default App;
