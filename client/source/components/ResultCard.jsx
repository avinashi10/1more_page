// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import StyledResultCard from './styles/ResultCard.styled.jsx';

function ResultCard({ book }) {
  return (
    <StyledResultCard>
      <div className="listcard-wrapper">
        <img src={book.cover} alt="cover" />
        <header>
          <h4>{book.title}</h4>
          <p>By: {book.creators[0]['author']}</p>
        </header>
        <footer>
          <p>{book.age_range}</p>
          <p>{book.date}</p>
        </footer>
      </div>
    </StyledResultCard>
  );
}

export default ResultCard;
