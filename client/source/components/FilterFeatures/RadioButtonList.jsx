// LIBRARY IMPORTS
import React from 'react';
import { Button, ButtonGroup, VStack } from '@chakra-ui/react';
// import { ToggleButtonGroup, ToggleButton } from '@mui/material';

function RadioButtonList({ options, value, selectToggle }) {
  return (
    <ButtonGroup onChange={selectToggle}>
      <VStack value={value}>
        {options.map(({ label, id, value }) => (
          <Button
            key={id}
            value={value}
            type="radio"
            onClick={}
          >
            {label}
          </Button>
        ))}
      </VStack>
    </ButtonGroup>
  );
}

export default RadioButtonList;
