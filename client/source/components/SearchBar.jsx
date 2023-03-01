// LIBRARY IMPORTS
import React, { useState } from 'react';

function SearchBar({ setUserInput }) {
  // SET STATES
  const [currentInput, setCurrentInput] = useState('');

  // HANDLE EVENTS
  const handleChange = (e) => setCurrentInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput(currentInput);
    setCurrentInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={currentInput}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SearchBar;
