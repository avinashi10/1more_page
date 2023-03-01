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
import StyledApp from './styles/App.styled.jsx';

function App() {
  // SET STATES
  const [booklist, setBooklist] = useState(books);
  const [userInput, setUserInput] = useState('');
  const [ageRange, setAgeRange] = useState([]);
  const [format, setFormat] = useState([]);
  const [pubYear, setPubYear] = useState([]);

  return (
    <StyledApp>
      <div className="home">
        <Header />
        <SearchBar setUserInput={setUserInput} />
        <div className="home_panel-list_wrapper">
          <div className="home_panel_wrapper">
            <AgeRangeFilter ageRange={ageRange} setAgeRange={setAgeRange} />
            <FormatFilter setFormat={setFormat} />
            <PubYearFilter setYearPub={setPubYear} />
          </div>
          <div className="home_list_wrapper">
            <ResultList booklist={booklist} />
          </div>
        </div>
      </div>
    </StyledApp>
  );
}

export default App;
