// LIBRARY IMPORTS
import React from 'react';
import { Grid } from '@chakra-ui/react';

// LOCAL IMPORTS
import ResultCard from './ResultCard.jsx';
import StyledResultList from './styles/ResultList.styled.jsx';

function ResultList({ booklist }) {
  return (
    <Grid
      gridTemplateColumns="repeat(5, minmax(10rem, 1fr))"
      gridGap=".5rem"
      bg="#E9EDDC"
      h="100vh"
      w="100vw"
      p="4rem"
      overflowY="auto"
    >
      {booklist.map((book) => <ResultCard key={book.isbn13} book={book} />)}
    </Grid>
  );
}

export default ResultList;
