import React from "react";
import "./App.css";

type State = {
  name: string;
  age: number;
};

const state: State = {
  name: "",
  age: 0,
};

function Component1() {
  return (
    <div className="App">
      <div>
        Name: <input onChange={(e) => (state.name = e.target.value)} />
      </div>
      <div>
        Age:
        <input
          type="number"
          onChange={(e) => (state.age = parseInt(e.target.value))}
        />
      </div>
      <div>
        <p>name: {state.name}</p>
        <p>age: {state.age}</p>
      </div>
    </div>
  );
}

export default Component1;
