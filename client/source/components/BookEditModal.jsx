// LIBRARY IMPORTS
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Select,
  RadioGroup,
  Radio,
  Stack,
} from '@chakra-ui/react';
import axios from 'axios';

function BookEditModal({ isOpen, onClose, bookTitle }) {
  const [format, setFormat] = useState('');
  const [age, setAge] = useState('');
  const [racialIdentity, setRacialIdentity] = useState('');

  const isFormFilled = format || age || racialIdentity;

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to submit the form data
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit info for {bookTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Format</FormLabel>
            <Select placeholder="Select format" onChange={(e) => setFormat(e.target.value)} value={format}>
              <option value="board book">Board Book</option>
              <option value="picture book">Picture Book</option>
              <option value="graphic novel">Graphic Novel</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Ages</FormLabel>
            <Select placeholder="Select age group" onChange={(e) => setAge(e.target.value)} value={age}>
              <option value="0-2">0-2</option>
              <option value="2-4">2-4</option>
              <option value="4-6">4-6</option>
              <option value="6-8">6-8</option>
              <option value="8-10">8-10</option>
              <option value="10-12">10-12</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Racial Identity</FormLabel>
            <RadioGroup onChange={setRacialIdentity} value={racialIdentity}>
              <Stack direction="column">
                <Radio value="Multiracial">Multiracial</Radio>
                <Radio value="South Asian">South Asian</Radio>
                <Radio value="Native American">Native American</Radio>
                {/* Add more Radio options as needed */}
              </Stack>
            </RadioGroup>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={handleSubmit}
            isDisabled={!isFormFilled}
          >
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default BookEditModal;
