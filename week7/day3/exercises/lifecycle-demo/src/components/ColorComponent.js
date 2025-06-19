import React, { useEffect, useState } from "react";

export default function ColorComponent() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFavoriteColor("yellow");
    }, 2000);
    return () => clearTimeout(timer); // nettoyage
  }, []);

  useEffect(() => {
    console.log("after update");
  }, [favoriteColor]);

  return (
    <div>
      <h1>My favorite color is {favoriteColor}</h1>
      <button onClick={() => setFavoriteColor("blue")}>
        Change to blue
      </button>
    </div>
  );
}
