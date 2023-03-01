// LIBRARY IMPORTS
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

// LOCAL IMPORTS
import StyledSearchBar from './styles/SearchBar.styled.jsx';

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
    <StyledSearchBar>
      <form className="searchbar-wrapper" onSubmit={handleSubmit}>
        <TextField
          className="searchbar-text"
          id="search-bar"
          type="text"
          onChange={handleChange}
          variant="outlined"
          placeholder="Search by title or author"
        />
        <IconButton type="submit" aria-label="search" className="searchbar-icon">
          <SearchIcon style={{ fill: '#0F2E0F' }} />
        </IconButton>
      </form>
    </StyledSearchBar>
  );
}

export default SearchBar;
