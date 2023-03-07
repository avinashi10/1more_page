// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

// LOCAL IMPORTS
import RadioButtonList from './FilterFeatures/RadioButtonList.jsx';
import { formatList, ageList, raceList } from './FilterFeatures/filterValues.js';

function FilterPanel({ selectedFormat, selectFormat, selectedAge, selectAge, selectedRace, selectRace }) {
  return (
    <Flex
      flexDir="column"
      p="1rem"
      flexBasis="18rem"
      bg="#F3E5D7"
      h="100vh"
      overflowY="auto"
    >
      <div className="input-group">
        <Heading size="sm">Format</Heading>
        <FilterListToggle options={formatList} value={selectedFormat} selectToggle={selectFormat} />
      </div>
      <div className="input-group">
        <Heading size="sm">Ages</Heading>
        <RadioButtonList options={ageList} value={selectedAge} selectToggle={selectAge} />
      </div>
      <div className="input-group">
        <Heading size="sm">Racial Identity</Heading>
        <RadioButtonList options={raceList} value={selectedRace} selectToggle={selectRace} />
      </div>
    </Flex>
  );
}

export default FilterPanel;
