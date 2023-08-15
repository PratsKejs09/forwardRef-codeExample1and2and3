import './style.css';
import React, { useState, useRef } from 'react';
import CustomInput from './CustomInput';

export default function App() {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <CustomInput
        ref={inputRef}
        value={value}
        // type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleFocus}> Focus </button>
    </div>
  );
}
