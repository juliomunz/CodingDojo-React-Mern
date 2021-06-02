import './App.css';
import React from "react";
import List from './components/List';
import Formadd from './components/Formadd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/task">Add new Task</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/task">
            <Formadd />
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
