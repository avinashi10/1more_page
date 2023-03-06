// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import ResultCard from './ResultCard.jsx';
import StyledResultList from './styles/ResultList.styled.jsx';

function ResultList({ booklist }) {
  return (
    <StyledResultList>
      <h3>Results:</h3>
      <div className="list-wrapper">
        {booklist.map((book) => <ResultCard key={book.isbn13} book={book} />)}
      </div>
    </StyledResultList>
  );
}

export default ResultList;
