// Exercise3.js
import React, { Component } from "react";
import "./Exercise.css";

class Exercise extends Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        <h1 style={style_header}>This is a Header</h1>

        <p className="para">This is a paragraph styled from CSS file.</p>

        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          Visit React Website
        </a>

        <form>
          <input type="text" placeholder="Type something" />
          <button type="submit">Submit</button>
        </form>

        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder"
          width="150"
        />

        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
