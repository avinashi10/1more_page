// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';

// LOCAL IMPORTS
import books from '../sampleData/bookData.js';
import Header from './Header.jsx';
import ResultList from './ResultList.jsx';
import SearchBar from './SearchBar.jsx';
import FilterPanel from './FilterPanel.jsx';
import StyledApp from './styles/App.styled.jsx';

function App() {
  // SET STATES
  const [booklist, setBooklist] = useState(books);
  const [userInput, setUserInput] = useState('');
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedRace, setSelectedRace] = useState(null);

  // const [ageRange, setAgeRange] = useState([]);
  // const [format, setFormat] = useState([]);
  // const [pubYear, setPubYear] = useState([]);

  // HANDLE EVENTS
  const handleSelectFormat = (event, value) => (!value ? null : setSelectedFormat(value));

  const handleSelectAge = (event, value) => (!value ? null : setSelectedAge(value));

  const handleSelectRace = (event, value) => (!value ? null : setSelectedRace(value));

  // HOOKS
  const applyFilters = () => {
    let updatedList = books;
    // Format Filter
    if (selectedFormat) {
      updatedList = updatedList.filter((item) => item.format === selectedFormat);
    }
    // Age Filter
    if (selectedAge) {
      updatedList = updatedList.filter((item) => item.age_range === selectedAge);
    }
    // Race Filter
    if (selectedRace) {
      updatedList = updatedList.filter((item) => item.racial_rep === selectedRace);
    }
    setBooklist(updatedList);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedFormat, selectedAge, selectedRace]);

  return (
    <StyledApp>
      <div className="home">
        <Header />
        <SearchBar setUserInput={setUserInput} />
        <div className="home_panel-list_wrapper">
          <div className="home_panel_wrapper">
            <FilterPanel selectFormat={handleSelectFormat} selectedFormat={selectedFormat} selectAge={handleSelectAge} selectedAge={selectedAge} selectedRace={selectedRace} selectRace={handleSelectRace} />
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
