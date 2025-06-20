import React, { Component } from "react";
import data from "./data.json";

class Example2 extends Component {
  render() {
    return (
      <div>
        <h2>Skills</h2>
        <h4>Languages:</h4>
        <ul>
          {data.Skills.languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
        <h4>Frameworks:</h4>
        <ul>
          {data.Skills.frameworks.map((fw, index) => (
            <li key={index}>{fw}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example2;
