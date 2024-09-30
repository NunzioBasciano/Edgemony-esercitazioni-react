"use client";

import { useState } from 'react'

export default function Home() {
  const [input, setInput] = useState('');
  const [excludeSpaces, setExcludeSpaces] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setExcludeSpaces(event.target.checked);
  };

  const charCounter = () => {
    return excludeSpaces ? input.replace(/\s+/g, '').length : input.length;
  };

  return (
    <div>
      <h1>Conta Caratteri</h1>

      <textarea
        value={input}
        onChange={handleInputChange}
        rows="4"
        cols="50"
      ></textarea>
      <br />
      <label>
        <input
          type="checkbox"
          checked={excludeSpaces}
          onChange={handleCheckboxChange}
        />
        Escludi gli spazi
      </label>
      <br />
      <p>Numero di caratteri{excludeSpaces ? ' (escludendo gli spazi)' : ''}: {charCounter()}</p>
    </div>
  );
}