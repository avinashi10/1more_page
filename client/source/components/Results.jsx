// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import ResultCard from './ResultCard.jsx';

function Results({ booklist }) {
  return (
    <div>
      <h3>Results:</h3>
      {booklist.map((book) => <ResultCard key={book.ISBN} book={book} />)}
    </div>
  );
}

export default Results;
