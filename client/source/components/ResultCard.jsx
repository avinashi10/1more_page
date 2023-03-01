// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS

function ResultCard({ book }) {
  return (
    <div>
      <h4>{book.title}</h4>
      <img src={book.cover} alt="cover" />
      <p>By: {book.creators[0]['author']}</p>
    </div>
  );
}

export default ResultCard;
