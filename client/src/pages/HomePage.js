import React from "react";
import "../styles/HomePage.css";

function HomePage() {
  fetch("http://localhost:3000/organizations")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return <></>;
}
export default HomePage;
