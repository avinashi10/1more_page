// LIBRARY IMPORTS
import React from 'react';
import { Grid } from '@chakra-ui/react';

// LOCAL IMPORTS
import ResultCard from './ResultCard.jsx';

function ResultList({ booklist, currentUser, API_ENDPOINT }) {
  return (
    <Grid
      gridTemplateColumns="repeat(5, minmax(10rem, 1fr))"
      gridGap=".5rem"
      bg="#E9EDDC"
      h="100vh"
      w="100vw"
      p="4rem"
      overflowY="auto"
      sx={{
        '@media screen and (max-width: 1200px)': {
          gridTemplateColumns: 'repeat(4, minmax(10rem, 1fr))',
        },
        '@media screen and (max-width: 992px)': {
          gridTemplateColumns: 'repeat(3, minmax(10rem, 1fr))',
        },
        '@media screen and (max-width: 768px)': {
          gridTemplateColumns: 'repeat(2, minmax(10rem, 1fr))',
        },
        '@media screen and (max-width: 576px)': {
          gridTemplateColumns: 'repeat(1, minmax(10rem, 1fr))',
        },
      }}
    >
      {booklist.map((book) => <ResultCard key={book.isbn13} book={book} API_ENDPOINT={API_ENDPOINT} />)}
    </Grid>
  );
}

export default ResultList;
