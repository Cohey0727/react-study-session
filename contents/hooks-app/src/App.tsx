import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Component2 />
        {/* <Component4 /> */}
      </header>
    </div>
  );
}

export default App;
