import React from 'react';
import './App.css';

import { useState } from "react";

import type { ChangeEvent } from 'react';

export const App = () => {
  const [value, setValue] = useState(""); 
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const handleClick = () => {
    setText(value);
    setValue("");
  }

  console.log('コンポーネントの再描画が発生しているかどうかのチェック')

  return (
    <>
      <input type="text" value={value} onChange={handleChange}/>
      <button type="button" onClick={handleClick}>追加</button>
      <p> {text}</p>
    </>
  );
};