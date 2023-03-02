// LIBRARY IMPORTS
import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

function FilterListToggle({ options, value, selectToggle }) {
  return (
    <ToggleButtonGroup value={value} onChange={selectToggle} exclusive>
      {options.map(({ label, id, value }) => (
        <ToggleButton key={id} value={value}>
          {label}
        </ToggleButton>))}
    </ToggleButtonGroup>
  );
}

export default FilterListToggle;
