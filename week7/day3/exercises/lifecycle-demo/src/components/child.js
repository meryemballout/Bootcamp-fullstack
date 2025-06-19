import React, { useEffect } from "react";

export default function Child() {
  useEffect(() => {
    return () => {
      alert("Child component is unmounted");
    };
  }, []);

  return <h1>Hello World!</h1>;
}
