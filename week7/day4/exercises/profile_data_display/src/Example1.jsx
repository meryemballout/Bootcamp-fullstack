import React, { Component } from "react";
import data from "./data.json";

class Example1 extends Component {
  render() {
    return (
      <div>
        <h2>Social Medias</h2>
        {data.SocialMedias.map((item, index) => (
          <div key={index}>
            <strong>{item.platform}:</strong> <a href={item.url}>{item.url}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default Example1;
