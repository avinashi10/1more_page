// LIBRARY IMPORTS
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';

// LOCAL IMPORTS
import { useAuth } from '../authContext.jsx';

function AdminLoginModal({ isOpen, onClose }) {
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const [adminInput, setAdminInput] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleAdminInputChange = (e) => {
    const { name, value } = e.target;
    setAdminInput(prev => ({ ...prev, [name]: value }));
    setErrorMessage('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!adminInput.email || !adminInput.password) {
      setErrorMessage('Please enter both email and password');
      return;
    }
    setIsLoading(true);
    try {
      await login(adminInput.email, adminInput.password);
      onClose();
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setErrorMessage('No user found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        setErrorMessage('Incorrect password.');
      } else if (error.code === 'auth/invalid-email') {
        setErrorMessage('Invalid email format.');
      } else {
        // Generic error message for other types of errors
        setErrorMessage('Failed to log in. Please try again.');
      }
      console.error('Login error:', error.code);
    }
    setIsLoading(false);
    setAdminInput({ email: '', password: '' });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="brand.light">
        <ModalHeader>Admin Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl as="form" onSubmit={handleLogin}>
            <Input
              id="email-input"
              name="email"
              value={adminInput.email}
              onChange={handleAdminInputChange}
              placeholder="Enter email"
              type="email"
              mb={3}
            />
            <Input
              id="password-input"
              name="password"
              value={adminInput.password}
              onChange={handleAdminInputChange}
              placeholder="Enter password"
              type="password"
            />
            {errorMessage && (
              <Text color="red.500" fontSize="sm" mt={2}>
                {errorMessage}
              </Text>
            )}
            <Button type="submit" mt={3} isLoading={isLoading}>
              Login
            </Button>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AdminLoginModal;
