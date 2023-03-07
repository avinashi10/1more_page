// LIBRARY IMPORTS
import React from 'react';
import { useRadioGroup, Button, ButtonGroup, VStack } from '@chakra-ui/react';

// LOCAL IMPORTS
import RadioCard from './RadioButtonCard.jsx';

// MAIN
function RadioButtonList({ options, selectToggle }) {
  const testChange = (value) => {
    console.log('value: ', value);
  };

  const { value, getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    onChange: selectToggle,
  });

  const group = getRootProps();

  return (
    <VStack {...group} p="1rem">
      {options.map(({ label, id, value }) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={id} {...radio}>
            {label}
          </RadioCard>
        );
      })}
    </VStack>
  );
}

export default RadioButtonList;
