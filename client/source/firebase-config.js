// LIBRARY IMPORTS
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC9i0im2LVCUAKbnaMEA4ZjhcHScAEyzOo',
  authDomain: 'one-more-page.firebaseapp.com',
  projectId: 'one-more-page',
  storageBucket: 'one-more-page.appspot.com',
  messagingSenderId: '507718610679',
  appId: '1:507718610679:web:12c103d6ff69f664806df2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
