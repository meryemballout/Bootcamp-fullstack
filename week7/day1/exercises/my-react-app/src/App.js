// App.js
import React from "react";
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div style={{ width: "60%", margin: "auto", paddingTop: "50px" }}>
      <h2>My Travel Carousel</h2>
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Hong_Kong_Skyline_Restitch_-_Dec_2007.jpg" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Macau_skyline_night.jpg" alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Cherry_blossoms_in_Japan.jpg" alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Las_Vegas_Montage_2013.jpg" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
