// LIBRARY IMPORTS
import React, { useState } from 'react';
import { Button, Flex, FormControl, Input, IconButton, Image, Link, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

// LOCAL IMPORTS
import logo from '../images/OMPLogo.png';
import headshot from '../images/headshot.png';

function SearchBar({ setUserInput }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // SET STATES
  const [currentInput, setCurrentInput] = useState('');

  // HANDLE EVENTS
  const handleChange = (e) => setCurrentInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput(currentInput);
    setCurrentInput('');
  };

  return (
    <Flex as="header" justifyContent="space-between" alignItems="center" borderBottom=".1rem" borderStyle="solid" borderColor="brand.sage_green" bg="brand.light" p=".2rem .5rem">
      <Image src={logo} alt="App Logo" boxSize="150px" flexShrink={0} />
      <FormControl
        as="form"
        flex={1}
        ml={4}
        mr={4}
        onSubmit={handleSubmit}
        display="flex"
        alignItems="center"
        bg="brand.light"
        p="1.5rem 1.5rem"
      >
        <Input
          value={currentInput}
          onChange={handleChange}
          variant="flushed"
          placeholder="Search by title"
          borderColor="brand.forest_green"
        />
        <IconButton
          color="brand.forest_green"
          variant="outline"
          aria-label="Search for book by title"
          type="submit"
          icon={<SearchIcon />}
        />
      </FormControl>
      <Button onClick={onOpen} flexShrink={0}>
        <Image src={headshot} alt="Headshot of Archaa" boxSize="50px" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="brand.light">
          <ModalHeader>About One More Page</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            This website was built by Archaa Shrivastav, a software engineer, children&apos;s book expert, and author! Learn more about her work as a software engineer
            {' '}
            <Link href="https://www.archaareads.com/code" isExternal fontWeight="bold" textDecoration="underline">here</Link>
            {' '}
            and her work as an author
            {' '}
            <Link href="https://wwww.archaareads.com" isExternal fontWeight="bold" textDecoration="underline">here</Link>
            .
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default SearchBar;
