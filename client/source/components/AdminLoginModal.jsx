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
} from '@chakra-ui/react';

// LOCAL IMPORTS
import { useAuth } from '../authContext.jsx';

function AdminLoginModal({ isOpen, onClose }) {
  const { currentUser, login, logout } = useAuth();
  const [adminInput, setAdminInput] = useState({ email: '', password: '' });

  const handleAdminInputChange = (e) => {
    const { name, value } = e.target;
    setAdminInput(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(adminInput.email, adminInput.password);
      onClose(); // Close the modal on successful login
    } catch (error) {
      // Handle errors here, such as displaying a message to the user
      console.error('Failed to log in:', error);
    }
    setAdminInput({ email: '', password: '' }); // Reset the input fields
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
              name="email"
              value={adminInput.email}
              onChange={handleAdminInputChange}
              placeholder="Enter email"
              type="email"
              mb={3}
            />
            <Input
              name="password"
              value={adminInput.password}
              onChange={handleAdminInputChange}
              placeholder="Enter password"
              type="password"
            />
            <Button type="submit" mt={3}>
              Login
            </Button>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AdminLoginModal;
