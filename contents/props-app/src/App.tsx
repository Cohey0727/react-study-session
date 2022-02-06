import React, { useRef, useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const inputRef = useRef("");
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
        <textarea
          defaultValue={"# 今日会ったこと"}
          value={value}
          rows={10}
          onChange={(e) => setValue(e.target.value)}
        />
        入力不可で値を制御
        <input value={value} disabled />
        <button onClick={() => setValue(inputRef.current)}>送信</button>
        <Child value={value} />
        value: {value}
      </header>
    </div>
  );
}

const Child = ({ value }: any) => {
  return <p>{value}</p>;
};

export default App;
