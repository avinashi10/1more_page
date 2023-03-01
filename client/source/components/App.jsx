// LIBRARY IMPORTS
import React, { useState } from 'react';

// LOCAL IMPORTS
import books from '../sampleData/bookData.js';
import Header from './Header.jsx';
import Results from './Results.jsx';
import Search from './Search.jsx';
import AgeRangeSearch from './SearchFeatures/AgeRangeSearch.jsx';
import FormatSearch from './SearchFeatures/FormatSearch.jsx';
import PubYearSearch from './SearchFeatures/PubYearSearch.jsx';

function App() {
  // SET STATES
  const [booklist, setBooklist] = useState(books);
  const [userInput, setUserInput] = useState('');
  const [ageRange, setAgeRange] = useState([]);
  const [format, setFormat] = useState([]);
  const [pubYear, setPubYear] = useState([]);

  return (
    <div>
      <Header />
      <Search setUserInput={setUserInput} />
      <AgeRangeSearch ageRange={ageRange} setAgeRange={setAgeRange} />
      <FormatSearch setFormat={setFormat} />
      <PubYearSearch setYearPub={setPubYear} />
      <Results booklist={booklist} />
    </div>
  );
}

export default App;
