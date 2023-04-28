// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

// LOCAL IMPORTS
import CheckboxList from './FilterFeatures/CheckboxList.jsx';
import RadioButtonList from './FilterFeatures/RadioButtonList.jsx';
import { formatList, ageList, raceList } from './FilterFeatures/filterValues.js';

function FilterPanel({ handleFormatChecked, handleRaceChecked, handleAgeChecked }) {
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
        {/* <RadioButtonList options={formatList} value={selectedFormat} selectToggle={selectFormat} /> */}
        <CheckboxList options={formatList} handleChecked={handleFormatChecked} />
      </div>
      <div className="input-group">
        <Heading size="sm">Ages</Heading>
        {/* <RadioButtonList options={formatList} value={selectedFormat} selectToggle={selectFormat} /> */}
        <CheckboxList options={ageList} handleChecked={handleAgeChecked} />
      </div>
      <div className="input-group">
        <Heading size="sm">Racial Identity</Heading>
        {/* <RadioButtonList options={formatList} value={selectedFormat} selectToggle={selectFormat} /> */}
        <CheckboxList options={raceList} handleChecked={handleRaceChecked} />
      </div>
    </Flex>
  );
}

export default FilterPanel;
