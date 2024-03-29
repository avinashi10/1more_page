/* eslint-disable react-hooks/exhaustive-deps */
// LIBRARY IMPORTS
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Flex } from '@chakra-ui/react';

// LOCAL IMPORTS
import ResultList from './ResultList.jsx';
import SearchBar from './SearchBar.jsx';
import FilterPanel from './FilterPanel.jsx';
import { formatList, ageList, raceList } from './FilterFeatures/filterValues.js';

function App() {
  // SET STATES
  const [booklist, setBooklist] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [formats, setFormats] = useState(formatList);
  const [ages, setAges] = useState(ageList);
  const [races, setRaces] = useState(raceList);
  const booksRef = useRef([]);

  // EVENT HANDLERS

  const handleFormatChecked = (id) => {
    const formatStateList = formats;
    const changeCheckedFormats = formatStateList.map((format) => {
      return format.id === id ? { ...format, checked: !format.checked } : format;
    });
    setFormats(changeCheckedFormats);
  };

  const handleAgeChecked = (id) => {
    const ageStateList = ages;
    const changeCheckedAges = ageStateList.map((age) => {
      return age.id === id ? { ...age, checked: !age.checked } : age;
    });
    setAges(changeCheckedAges);
  };

  const handleRaceChecked = (id) => {
    const raceStateList = races;
    const changeCheckedRaces = raceStateList.map((race) => {
      return race.id === id ? { ...race, checked: !race.checked } : race;
    });
    setRaces(changeCheckedRaces);
  };

  // Determine if running in emulator environment
  const isEmulator = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  // console.log('isEmulator frontend:', isEmulator);

  /* ***DEVELOPMENT NOTE:***
  Although 127.0.0.1 and localhost usually point to the
  same local loopback address,they are treated as different
  origins by CORS policy. Therefore for frontend requests
  to work in development, they url listed below on line 60
  (e.g. 127.0.0.1 not localhost) must exactly match the url
  on line 16 of index.js
   */
  const API_ENDPOINT = isEmulator ? 'http://127.0.0.1:5001/one-more-page/us-central1/api/books' : 'https://us-central1-one-more-page.cloudfunctions.net/api/books';
  // console.log('API Endpoint:', API_ENDPOINT);

  // HOOKS
  useEffect(() => {
    axios.get(API_ENDPOINT)
      .then(({ data }) => {
        setBooklist(data);
        booksRef.current = data;
      })
      .catch((err) => console.error(err));
  }, []);

  const applyFilters = () => {
    let filteredList = booksRef.current;

    // Format Filter
    const formatsChecked = formats
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (formatsChecked.length) {
      filteredList = filteredList.filter((book) => formatsChecked.includes(book.format.toLowerCase()));
    }
    // Age Filter
    const agesChecked = ages
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (agesChecked.length) {
      filteredList = filteredList.filter((book) => agesChecked.includes(book.age_range.toLowerCase()));
    }
    // Race Filter
    const racesChecked = races
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (racesChecked.length) {
      filteredList = filteredList.filter((book) => racesChecked.includes(book.race_rep.toLowerCase()));
    }
    // Search Filter
    if (userInput) {
      filteredList = filteredList.filter((book) => book.title.toLowerCase().search(userInput.toLowerCase().trim()) !== -1);
    }
    setBooklist(filteredList);
    // console.log('FILTER LIST: ', filteredList);
  };

  useEffect(() => {
    applyFilters();
  }, [formats, ages, races, userInput]);

  return (
    <Flex flexDir="column" h="100vh">
      <SearchBar
        setUserInput={setUserInput}
      />
      <Flex flex="1" h="100vh" w="100vw">
        <FilterPanel
          handleFormatChecked={handleFormatChecked}
          handleAgeChecked={handleAgeChecked}
          handleRaceChecked={handleRaceChecked}
        />
        <ResultList
          booklist={booklist}
          API_ENDPOINT={API_ENDPOINT}
        />
      </Flex>
    </Flex>
  );
}

export default App;
