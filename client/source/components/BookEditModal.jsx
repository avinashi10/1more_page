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
  Text,
} from '@chakra-ui/react';
import axios from 'axios';

function BookEditModal({
  isOpen,
  onClose,
  bookTitle,
  currentFormat,
  currentAgeRange,
  currentRacialIdentity,
  bookId,
  API_ENDPOINT,
  onEditSuccess,
}) {
  const [format, setFormat] = useState(currentFormat || '');
  const [age, setAge] = useState(currentAgeRange || '');
  const [racialIdentity, setRacialIdentity] = useState(currentRacialIdentity || '');

  const isDataChanged = format !== currentFormat || age !== currentAgeRange || racialIdentity !== currentRacialIdentity;

  const handleSubmit = async (e) => {
    e.preventDefault();

    let updateData = {};
    if (format !== currentFormat) updateData.format = format;
    if (age !== currentAgeRange) updateData.ageRange = age;
    if (racialIdentity !== currentRacialIdentity) updateData.raceRep = racialIdentity;

    // Check if any field has been updated
    if (Object.keys(updateData).length === 0) {
      console.log('No changes made.');
      return;
    }

    try {
      await axios.put(`${API_ENDPOINT}/${bookId}`, updateData);
      onEditSuccess(`Successfully updated info for ${bookTitle}`);
      onClose();
    } catch (error) {
      console.error('Failed to update book:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Edit info for {bookTitle}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Format</FormLabel>
            <Text>
              Current Format: {currentFormat || 'Not set'}
            </Text>
            <Select placeholder="Select format" onChange={(e) => setFormat(e.target.value)} value={format}>
              <option value="board book">Board Book</option>
              <option value="picture book">Picture Book</option>
              <option value="graphic novel">Early Chapter Book</option>
              <option value="graphic novel">Graphic Novel</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Ages</FormLabel>
            <Text>
              Current Age Range: {currentAgeRange || 'Not set'}
            </Text>
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
            <Text>
              Current Racial Identity: {currentRacialIdentity || 'Not set'}
            </Text>
            <Select placeholder="Select racial identity" onChange={(e) => setRacialIdentity(e.target.value)} value={racialIdentity}>
              <option value="multiracial">Multiracial</option>
              <option value="south asian">South Asian</option>
              <option value="native american">Native American</option>
              <option value="black">Black</option>
              <option value="middle eastern">Middle Eastern</option>
              <option value="native hawaiian/pacific islander">Native Hawaiian/Pacific Islander</option>
              <option value="southeast asian">Southeast Asian</option>
              <option value="east asian">East Asian</option>
              <option value="latinx">Latinx</option>
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={handleSubmit}
            isDisabled={!isDataChanged}
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
