import React from "react";
import './style.css';

class First extends React.Component {
  render() {
    return (
    <div className="main">
        <h1>Hello Dojo!</h1>
        <h2>Things i need to do:
        </h2>
        <ul>
          <li>Learn Mongo</li>
          <li>Learn Express</li>
          <li>Learn React</li>
          <li>Lear Node</li>
        </ul>
      </div>
    );
  }
}

export default First;