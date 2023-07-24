import React, { useState, useEffect } from 'react';
import {     Button, 
  FormControl, 
  FormLabel, 
  Input, 
  Checkbox, 
  Select, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import ExperimentForm from './ExperimentsForm';
import QualitativeTypeForm from './QualitativeTypesForm';



function QualitativeResultForm() {
  const [message, setMessage] = useState('');
  const [experiments, setexperiments] = useState([]);
  const [qualitativeTypes, setqualitativeTypes] = useState([]);

  useEffect(() => {
    fetch('/api/qualitativeresults')
      .then(res => res.json())
      .then(data => {
        console.log(data); 
        setexperiments(data.experiments);
        setqualitativeTypes(data.qualitativeTypes);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const values = Object.fromEntries(data.entries());

    try {
      const response = await fetch('/api/qualitativeresults', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setMessage('Form submitted successfully!');
        event.target.reset();
      } else {
        console.error('Error:', response.statusText);
        setMessage('Error occurred while submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An unexpected error occurred. Please try again.');
    }
  };

  const { isOpen: isexperimentModalOpen, onOpen: onexperimentModalOpen, onClose: onexperimentModalClose } = useDisclosure();
  const { isOpen: isqualitativeTypeModalOpen, onOpen: onqualitativeTypeModalOpen, onClose: onqualitativeTypeModalClose } = useDisclosure();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl id="experiment_id">
          <FormLabel>Experiment</FormLabel>
          <Select name="experiment_id" required>
            {experiments.map((experiment) => (
              <option key={experiment.id} value={experiment.id}>{experiment.name}</option>
            ))}
          </Select>
          <Button onClick={onexperimentModalOpen}>+</Button>
        </FormControl>

        <Modal isOpen={isexperimentModalOpen} onClose={onexperimentModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a new experiment</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ExperimentForm />
            </ModalBody>
          </ModalContent>
        </Modal>

        <FormControl id="qualitative_type">
          <FormLabel>Qualitative Type</FormLabel>
          <Select name="qualitative_type" required>
            {qualitativeTypes.map((qualitativeType) => (
              <option key={qualitativeType.id} value={qualitativeType.id}>{qualitativeType.name}</option>
            ))}
          </Select>
          <Button onClick={onqualitativeTypeModalOpen}>+</Button>
        </FormControl>

        <Modal isOpen={isqualitativeTypeModalOpen} onClose={onqualitativeTypeModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a new qualitative type</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <QualitativeTypeForm />
            </ModalBody>
          </ModalContent>
        </Modal>


        <FormControl id="value">
          <FormLabel>Value</FormLabel>
          <Input type="number" step="any" name="value" />
        </FormControl>

        <FormControl id="boolean">
          <FormLabel>Boolean</FormLabel>
          <Checkbox name="boolean" />
        </FormControl>

        <FormControl id="comment">
          <FormLabel>Comment</FormLabel>
          <Input type="text" name="comment" />
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>

      {message && <div>{message}</div>}
    </>
  );
}

export default QualitativeResultForm;
