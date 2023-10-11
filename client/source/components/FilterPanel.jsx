// LIBRARY IMPORTS
import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

// LOCAL IMPORTS
import CheckboxList from './FilterFeatures/CheckboxList.jsx';
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
      <Box mb={4}>
        <Heading size="md" mb={2}>Format</Heading>
        <CheckboxList options={formatList} handleChecked={handleFormatChecked} />
      </Box>
      <Box mb={4}>
        <Heading size="md" mb={2}>Ages</Heading>
        <CheckboxList options={ageList} handleChecked={handleAgeChecked} />
      </Box>
      <Box>
        <Heading size="md" mb={2}>Racial Identity</Heading>
        <CheckboxList options={raceList} handleChecked={handleRaceChecked} />
      </Box>
    </Flex>
  );
}

export default FilterPanel;
