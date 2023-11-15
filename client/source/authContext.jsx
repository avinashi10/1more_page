// LIBRARY IMPORTS
import React, {
  createContext, useContext, useState, useEffect,
} from 'react';
import {
  getAuth, connectAuthEmulator, signInWithEmailAndPassword, signOut, onAuthStateChanged,
} from 'firebase/auth';

// LOCAL IMPORTS
import app from './firebase-config';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider component that wraps app and provides the auth state
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null); // State to hold the current user
  const [loading, setLoading] = useState(true); // State to keep track of loading status

  const auth = getAuth(app);
  /*
  This emulator authenticator which uses emulated
  users vs real authentication credentials is
  throwing errors
  if (window.location.hostname === '127.0.0.1') {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099');
    console.log('Connected to Auth Emulator:', auth.emulatorConfig);
  }
  */
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  // Effect hook to subscribe to user state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
