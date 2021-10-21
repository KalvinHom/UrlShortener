import React from "react";
import "./Home.scss";
import URLForm from "./URLForm.js";

function Home() {
  return (
    <div className="Home">
      <h1>URL Shortener</h1>
      <h2>Enter a URL to get started!</h2>
      <URLForm />
    </div>
  );
}

export default Home;
