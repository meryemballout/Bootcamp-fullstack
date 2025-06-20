import React, { Component } from "react";
import data from "./data.json";

class Example3 extends Component {
  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {data.Experiences.map((exp, index) => (
          <div key={index}>
            <p><strong>Company:</strong> {exp.company}</p>
            <p><strong>Position:</strong> {exp.position}</p>
            <p><strong>Years:</strong> {exp.years}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
