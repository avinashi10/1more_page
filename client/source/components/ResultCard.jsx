// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// LOCAL IMPORTS
import StyledResultCard from './styles/ResultCard.styled.jsx';

function ResultCard({ book }) {
  // SET STATE
  const [googleId, setGoogleId] = useState(book.google_books_id);
  const [googleBook, setGoogleBook] = useState({});

  // HOOKS
  useEffect(() => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://www.googleapis.com/books/v1/volumes/${googleId}`,
      headers: {
        'Authorization': ''
      }
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  })

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
