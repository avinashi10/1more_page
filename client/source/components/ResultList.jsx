// LIBRARY IMPORTS
import React from 'react';
import { Grid } from '@chakra-ui/react';

// LOCAL IMPORTS
import ResultCard from './ResultCard.jsx';
import StyledResultList from './styles/ResultList.styled.jsx';

function ResultList({ booklist }) {
  return (
    <Grid
      gridTemplateColumns="repeat(4, 1fr)"
      gridGap=".5rem"
      bg="brand.sage_green"
      h="100vh"
      p="1rem"
      overflowY="auto"
    >
      {booklist.map((book) => <ResultCard key={book.isbn13} book={book} />)}
    </Grid>
  );
}

export default ResultList;
