// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// LOCAL IMPORTS
import App from './App.jsx';
import { AuthProvider } from '../authContext.jsx';

const theme = extendTheme({
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          _focus: {
            boxShadow: 'none',
            borderColor: 'black',
          },
        },
      },
    },
  },
  colors: {
    brand: {
      black: '#0a1f0a',
      forest_green: '#0f2e0f',
      plum: '#824c71',
      orange: '#d4a373',
      sage_green: '#ccd5ae',
      light: '#fdf8ec',
    },
  },
  fonts: {
    heading: '\'DM Sans\', sans-serif',
    body: '\'DM Sans\', sans-serif',
  },
});

function AppHolder() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default AppHolder;
