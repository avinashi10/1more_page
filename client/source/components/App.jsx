// LIBRARY IMPORTS
import React, { useState } from 'react';

// LOCAL IMPORTS
import books from '../sampleData/bookData.js';
import Header from './Header.jsx';
import ResultList from './ResultList.jsx';
import SearchBar from './SearchBar.jsx';
import AgeRangeFilter from './FilterFeatures/AgeRangeFilter.jsx';
import FormatFilter from './FilterFeatures/FormatFilter.jsx';
import PubYearFilter from './FilterFeatures/PubYearFilter.jsx';

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
      <SearchBar setUserInput={setUserInput} />
      <AgeRangeFilter ageRange={ageRange} setAgeRange={setAgeRange} />
      <FormatFilter setFormat={setFormat} />
      <PubYearFilter setYearPub={setPubYear} />
      <ResultList booklist={booklist} />
    </div>
  );
}

export default App;
