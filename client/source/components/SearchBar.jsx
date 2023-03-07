// LIBRARY IMPORTS
import React, { useState } from 'react';
import { Flex, Input, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

// LOCAL IMPORTS

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
        borderColor="brand.sage_green"
        bg="#fdf8ec"
        p="1.5rem 1.5rem"
      >
        <Input
          value={currentInput}
          onChange={handleChange}
          variant="flushed"
          placeholder="Search by title"
          borderColor="brand.forest_green"
        />
        <IconButton
          color="brand.forest_green"
          variant="outline"
          aria-label="Search for book by title"
          type="submit"
          icon={<SearchIcon />}
        />
      </Flex>
    </form>
  );
}

export default SearchBar;
