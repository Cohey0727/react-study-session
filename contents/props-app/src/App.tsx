import React, { useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        ただの入力
        <input />
        値のみを制御
        <input value={value} />
        値と変更を制御
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        変更のみを制御
        <input onChange={(e) => setValue(e.target.value)} />
        初期値のみを制御
        <input defaultValue="Hello" />
        入力不可で値を制御
        <input value={value} disabled />
      </header>
    </div>
  );
}

export default App;
