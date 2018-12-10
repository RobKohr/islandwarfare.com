import React, {useState} from 'react';
import {  sendAction, registerDataUpdateFunction } from "./socket/socket";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const Login = ({ register }) => {
  const [count, setCount] = useState(0);
  function onSubmit(event){
    event.preventDefault();
    sendAction('register');
  }
  return (
    <form id="login" onSubmit={onSubmit}>
      {register && <h2>Register</h2>}
      {!register && <h2>Login</h2>}
      <p>
        <label>Username</label>
        <input type="text"></input>
      </p>
      <p>
        <label>Password</label>
        <input type="password"></input>
      </p>
      {register &&
        <p>
          <label>Retype Password</label>
          <input type="password" name="retype-password"></input>
        </p>

      }
      <p>
        <label></label>
        <input type="submit" onClick={e => onSubmit(e)}></input>
      </p>
    </form>
  )
}

const Register = () => (
  <Login register="true"></Login>
)


const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
          <li>
            <Link to="/login/">Login</Link>
          </li>
          <li>
            <Link to="/register/">Register</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
      <Route path="/login/" component={Login} />
      <Route path="/register/" component={Register} />
    </div>
  </Router>
);

export default AppRouter;