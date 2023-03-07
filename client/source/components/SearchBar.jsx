// LIBRARY IMPORTS
import React, { useState } from 'react';
import { Flex, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import IconButton from '@mui/material/IconButton';
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
    <form onSubmit={handleSubmit}>
      <Flex
        alignItems="center"
        borderBottom=".1rem"
        borderStyle="solid"
        borderColor="brand.forest_green"
        bg="plum.50"
        p="1.5rem 1.5rem"
      >
        <Input
          value={currentInput}
          onChange={handleChange}
          variant="flushed"
          placeholder="Search by title"
        />
        <SearchIcon color="brand.forest_green" />
      </Flex>
    </form>
  );
}

export default SearchBar;
