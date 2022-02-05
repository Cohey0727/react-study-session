import React from "react";
import "./App.css";
import List from "./List";

function App() {
  const list = [
    {
      id: "a",
      firstname: "Robin",
      lastname: "Wieruch",
      year: 1988,
    },
    {
      id: "b",
      firstname: "Dave",
      lastname: "Davidds",
      year: 1990,
    },
  ];

  return (
    <div className="App">
      <h1>React hooksとは？</h1>
      <List list={list} />
    </div>
  );
}

export default App;
