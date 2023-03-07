// LIBRARY IMPORTS
import React from 'react';
import { Button, ButtonGroup, VStack } from '@chakra-ui/react';
// import { ToggleButtonGroup, ToggleButton } from '@mui/material';

function FilterListToggle({ options, value, selectToggle }) {
  return (
    <VStack value={value} onChange={selectToggle}>
      {options.map(({ label, id, value }) => (
        <Button key={id} value={value}>
          {label}
        </Button>))}
    </VStack>
  );
}

export default FilterListToggle;
