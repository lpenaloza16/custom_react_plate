import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import "tachyons";
function App() {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Navigation />
      <Logo />
      {/* {
      <ImageLinkForm />
      <FaceRecognition />} */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// I have using this file as both the App and Index; Using both is not practical but is only being used for this example.
