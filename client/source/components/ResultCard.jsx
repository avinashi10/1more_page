// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// LOCAL IMPORTS
import StyledResultCard from './styles/ResultCard.styled.jsx';

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
    <StyledResultCard>
      <div className="listcard-wrapper">
        <img src={googleBook?.imageLinks.thumbnail} alt="cover" />
        <header>
          <h4>{book.title}</h4>
          <p>By: {googleBook?.authors[0]}</p>
        </header>
        <footer>
          <p>{book.age_range}</p>
          <p>{googleBook?.publishedDate}</p>
        </footer>
      </div>
    </StyledResultCard>
  );
}

export default ResultCard;
