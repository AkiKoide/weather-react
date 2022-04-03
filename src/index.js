import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <script src="src/app.js"></script>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
