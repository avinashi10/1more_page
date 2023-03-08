// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GridItem, Heading, Image, Text, Center } from '@chakra-ui/react';

// LOCAL IMPORTS

function ResultCard({ book }) {
  // SET STATE
  // const [googleId, setGoogleId] = useState(book.google_books_id);
  const [googleBook, setGoogleBook] = useState(null);
  const imgURL = `https://books.google.com/books/content?id=${book?.google_books_id}&printsec=frontcover&img=1`;

  // HOOKS
  useEffect(() => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://www.googleapis.com/books/v1/volumes/${book?.google_books_id}`,
      headers: {
        'Authorization': 'AIzaSyBzu1ILX3_H7tqbI-dyFfobH4p1LCNlB8Y'
      },
    };

    axios(config)
      .then(({ data }) => {
        setGoogleBook(data.volumeInfo);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <GridItem
      display="grid"
      maxW="10rem"
      maxH="21rem"
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
      <Text>
        Ages: {book.age_range}
      </Text>
      <Text>
        Published: {googleBook?.publishedDate.substring(0,4)}
      </Text>
    </GridItem>
  );
}

export default ResultCard;
