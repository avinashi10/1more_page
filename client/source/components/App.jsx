// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex } from '@chakra-ui/react';

// LOCAL IMPORTS
import Header from './Header.jsx';
import ResultList from './ResultList.jsx';
import SearchBar from './SearchBar.jsx';
import FilterPanel from './FilterPanel.jsx';
import StyledApp from './styles/App.styled.jsx';

function App() {
  // SET STATES
  const [booklist, setBooklist] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedRace, setSelectedRace] = useState(null);

  // HANDLE EVENTS
  const handleSelectFormat = (event, value) => (!value ? null : setSelectedFormat(value));

  const handleSelectAge = (event, value) => (!value ? null : setSelectedAge(value));

  const handleSelectRace = (event, value) => (!value ? null : setSelectedRace(value));

  // HOOKS
  useEffect(() => {
    axios.get('/books')
      .then(({ data }) => setBooklist(data))
      .catch((err) => console.error(err));
  }, []);

  const applyFilters = () => {
    let updatedList = booklist;
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
    // Search Filter
    if (userInput) {
      updatedList = updatedList.filter((item) => item.title.toLowerCase().search(userInput.toLowerCase().trim()) !== -1);
    }
    setBooklist(updatedList);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedFormat, selectedAge, selectedRace, userInput]);

  return (
    <Flex flexDir="column" h="100vh">
      <Header />
      <SearchBar setUserInput={setUserInput} />
      <Flex flex="1" h="100vh">
        <FilterPanel
          selectFormat={handleSelectFormat}
          selectedFormat={selectedFormat}
          selectAge={handleSelectAge}
          selectedAge={selectedAge}
          selectedRace={selectedRace}
          selectRace={handleSelectRace}
        />
        <ResultList
          booklist={booklist}
        />
      </Flex>
    </Flex>
  );
}

export default App;
