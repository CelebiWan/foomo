import React, { useState, useEffect } from 'react';
import { Input, Button, FormControl, FormLabel, Select, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import ExperimentForm from './ExperimentsForm';
import ProcessForm from './ProcessesForm';
import EquipmentForm from './EquipmentsForm';

function ExperimentMethodForm() {
    const [message, setMessage] = useState('');
    const [experiments, setExperiments] = useState([]);
    const [processes, setProcesses] = useState([]);
    const [equipments, setEquipments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch('/api/experimentmethods')
      .then(res => res.json())
  
          
        .then(data => {
          console.log(data); 
          setExperiments(data.experiments);
          setProcesses(data.processes);
          setEquipments(data.equipments);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    }, []);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const data = new FormData(event.target);
      const values = Object.fromEntries(data.entries());
  
      try {
        const response = await fetch('/api/experimentmethods', {
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
  
    const { isOpen: isEquipmentModalOpen, onOpen: onEquipmentModalOpen, onClose: onEquipmentModalClose } = useDisclosure();
    const { isOpen: isExperimentModalOpen, onOpen: onExperimentModalOpen, onClose: onExperimentModalClose } = useDisclosure();
    const { isOpen: isProcessesModalOpen, onOpen: onProcessesModalOpen, onClose: onProcessesModalClose } = useDisclosure();
  
    return (
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <FormControl id="experiment">
              <FormLabel> Experiment</FormLabel>
              <Select name="experiment" required>
                {experiments.map((experiment) => (
                  <option key={experiment.id} value={experiment.id}>{experiment.name}</option>
                ))}
              </Select>
              <Button onClick={onExperimentModalOpen}>+</Button>
            </FormControl>
  
            <Modal isOpen={isExperimentModalOpen} onClose={onExperimentModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add a new experiment</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <ExperimentForm />
                </ModalBody>
              </ModalContent>
            </Modal>
  
            <FormControl id="processes">
              <FormLabel>Processes</FormLabel>
              <Select name="processes">
                {processes.map((processes) => (
                  <option key={processes.id} value={processes.id}>{processes.name}</option>
                ))}
              </Select>
              <Button onClick={onProcessesModalOpen}>+</Button>
            </FormControl>
  
            <Modal isOpen={isProcessesModalOpen} onClose={onProcessesModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add a new processes</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <ProcessForm />
                </ModalBody>
              </ModalContent>
            </Modal>
  
            <FormControl id="equipment">
              <FormLabel>Equipment</FormLabel>
              <Select name="equipment">
                {equipments.map((equipment) => (
                  <option key={equipment.id} value={equipment.id}>{equipment.name}</option>
                ))}
              </Select>
              <Button onClick={onEquipmentModalOpen}>+</Button>
            </FormControl>
  
            <Modal isOpen={isEquipmentModalOpen} onClose={onEquipmentModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add a new equipment</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <EquipmentForm />
                </ModalBody>
              </ModalContent>
            </Modal>


            <FormControl id="process_metadata">
             <FormLabel>Process metadata</FormLabel>
             <Input type="text" name="name" required />
            </FormControl>

            <FormControl id="equipment_metadata">
             <FormLabel>Equipment metadata</FormLabel>
             <Input type="text" name="alias" required />
            </FormControl>


            <FormControl id="step">
             <FormLabel>Step</FormLabel>
             <Input type="text" name="cas_number" required />
            </FormControl>     

            <FormControl id="period">
             <FormLabel>Period</FormLabel>
             <Input type="text" name="cas_number" required />
            </FormControl>     

            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </form>
        )}
  
        {message && <div>{message}</div>}
      </>
    );
  }
  
  export default  ExperimentMethodForm;