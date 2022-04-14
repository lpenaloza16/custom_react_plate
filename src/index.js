import React from "react";
import ReactDOM from "react-dom";
import Blob from "./component/Blob";

function App() {
  return (
    <div>
      <h1>Header</h1>
      <Blob />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
