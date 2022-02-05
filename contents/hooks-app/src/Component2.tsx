import React, { useState } from "react";
import "./App.css";

type State = {
  name: string;
  age: number;
};

function Component2() {
  const [state, setState] = useState<State>({ name: "", age: 0 });
  return (
    <div className="App">
      <div>
        Name:
        <input onChange={(e) => setState({ ...state, name: e.target.value })} />
      </div>
      <div>
        Age:
        <input
          type="number"
          onChange={(e) =>
            setState({ ...state, age: parseInt(e.target.value) })
          }
        />
      </div>
      <div>
        <p>name: {state.name}</p>
        <p>age: {state.age}</p>
      </div>
    </div>
  );
}

export default Component2;
