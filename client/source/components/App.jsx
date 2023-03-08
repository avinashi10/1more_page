// LIBRARY IMPORTS
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Flex } from '@chakra-ui/react';

// LOCAL IMPORTS
import Header from './Header.jsx';
import ResultList from './ResultList.jsx';
import SearchBar from './SearchBar.jsx';
import FilterPanel from './FilterPanel.jsx';

function App() {
  // SET STATES
  const [booklist, setBooklist] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedRace, setSelectedRace] = useState(null);
  const booksRef = useRef([]);

  // HANDLE EVENTS
  const handleSelectFormat = (value) => (!value ? null : setSelectedFormat(value));

  const handleSelectAge = (value) => (!value ? null : setSelectedAge(value));

  const handleSelectRace = (value) => (!value ? null : setSelectedRace(value));

  // HOOKS
  useEffect(() => {
    axios.get('/books')
      .then(({ data }) => {
        setBooklist(data);
        booksRef.current = data;
      })
      .catch((err) => console.error(err));
  }, []);

  const applyFilters = () => {
    let updatedList = booksRef.current;
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
      updatedList = updatedList.filter((item) => item.race_rep === selectedRace);
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
      <SearchBar setUserInput={setUserInput} />
      <Flex flex="1" h="100vh" w="100vw">
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
