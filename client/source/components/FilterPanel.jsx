// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

// LOCAL IMPORTS
import FilterListToggle from './FilterFeatures/FilterListToggle.jsx';
import { formatList, ageList, raceList } from './FilterFeatures/filterValues.js';

function FilterPanel({ selectedFormat, selectFormat, selectedAge, selectAge, selectedRace, selectRace }) {
  return (
    <Flex
      flexDir="column"
      p="1rem"
      flexBasis="18rem"
      bg="brand.orange"
      h="100vh"
      overflowY="auto"
    >
      <div className="input-group">
        <Heading size="sm">Format</Heading>
        <FilterListToggle options={formatList} value={selectedFormat} selectToggle={selectFormat} />
      </div>
      <div className="input-group">
        <Heading size="sm">Ages</Heading>
        <FilterListToggle options={ageList} value={selectedAge} selectToggle={selectAge} />
      </div>
      <div className="input-group">
        <Heading size="sm">Racial Identity</Heading>
        <FilterListToggle options={raceList} value={selectedRace} selectToggle={selectRace} />
      </div>
    </Flex>
  );
}

export default FilterPanel;
