import React, { useState, ChangeEvent } from 'react';
import './App.css';

export const App = () => {
  const [value, setValue] = useState(""); 
  const [text, setText] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }

  const handleClick = () => {
    setText([...text, value]);
    setValue("");
  }

  console.log('コンポーネントの再描画が発生しているかどうかのチェック')

  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      <button type="button" onClick={handleClick}>追加</button>
      <ul>
        {text.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </>
  );
};
