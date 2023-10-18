// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box, Center, GridItem, Heading, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Text, useDisclosure,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

// LOCAL IMPORTS

function ResultCard({ book, isAdmin, API_ENDPOINT }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // SET STATE
  const [googleBook, setGoogleBook] = useState(null);

  // HOOKS
  useEffect(() => {
    axios.get(`${API_ENDPOINT}/getGoogleBook/${book?.google_books_id}`)
      .then(({ data }) => {
        setGoogleBook(data.volumeInfo);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box position="relative">
      {isAdmin && (
        <EditIcon
          position="absolute"
          top={2}
          right={2}
          cursor="pointer"
          color="brand.sage_green"
          // onClick={/* Function to handle edit goes here */}
        />
      )}
      <GridItem
        display="grid"
        maxW={{
          base: '100%', sm: '10rem', md: '18rem', lg: '25rem', xl: '30rem',
        }}
        maxH="23rem"
        p="1"
        border=".1rem"
        borderRadius=".5rem"
        borderStyle="solid"
        borderColor="brand.sage_green"
      >
        <Center
          bg="brand.light"
          border=".1rem"
          borderRadius=".5rem"
          borderStyle="solid"
          borderColor="#F6E0AD"
          w="100%"
          h="11.5rem"
        >
          <Image
            src={googleBook?.imageLinks.thumbnail}
            alt="cover"
            borderRadius="sm"
            p="0.5rem"
          />
        </Center>
        <Heading my="4" size="sm">
          {book.title}
        </Heading>
        <Text>
          By: {googleBook?.authors[0]}
        </Text>
        {book.age_range &&
          <Text>Ages: {book.age_range}</Text>}
        <Text>
          Published: {googleBook?.publishedDate.substring(0,4)}
        </Text>
      </GridItem>
    </Box>
  );
}

export default ResultCard;
