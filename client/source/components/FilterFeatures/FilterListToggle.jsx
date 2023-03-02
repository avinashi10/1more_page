// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//     justifyContent: 'space-between',
//   },
//   toggle: {
//     fontFamily: `'DM Sans', sans-serif`,
//     fontSize: '.8rem',
//     border: '1px solid #0f2e0f',
//     borderRadius: '10px',
//     '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
//       borderRadius: '10px',
//     },
//     '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
//       borderRadius: '10px',
//       border: '1px solid #0f2e0f',
//     },
//     '&.Mui-selected': {
//       borderRadius: '10px',
//       background: '#000',
//       color: '#fff',
//     },
//     '&.MuiToggleButton-root': {
//       '&:hover': {
//         background: '#000',
//         color: '#fff',
//       },
//     },
//   },
// });

// LOCAL IMPORTS

function FilterListToggle({ options, value, selectToggle }) {
  // const classes = useStyles();
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
