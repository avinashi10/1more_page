// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import firebase from 'firebase/app';
import 'firebase/auth';

// LOCAL IMPORTS
import App from './App.jsx';
import { AuthProvider } from '../authContext.js';

const firebaseConfig = {
  apiKey: 'AIzaSyC9i0im2LVCUAKbnaMEA4ZjhcHScAEyzOo',
  authDomain: 'one-more-page.firebaseapp.com',
  projectId: 'one-more-page',
  storageBucket: 'one-more-page.appspot.com',
  messagingSenderId: '507718610679',
  appId: '1:507718610679:web:12c103d6ff69f664806df2',
};

// Initialize Firebase (if it hasn't been initialized yet)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

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
