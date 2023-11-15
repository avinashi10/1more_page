// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';
import {
  Box, Center, GridItem, Heading, Image, Text, useDisclosure,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import axios from 'axios';

// LOCAL IMPORTS
import { useAuth } from '../authContext.jsx';
import BookEditModal from './BookEditModal.jsx';

function ResultCard({ book, API_ENDPOINT }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // SET STATE
  const [googleBook, setGoogleBook] = useState(null);
  const { currentUser, logout } = useAuth();

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
      {currentUser && (
        <EditIcon
          position="absolute"
          top={2}
          right={2}
          cursor="pointer"
          color="brand.sage_green"
          onClick={onOpen}
        />
      )}
      <BookEditModal isOpen={isOpen} onClose={onClose} bookTitle={book.title} />
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
