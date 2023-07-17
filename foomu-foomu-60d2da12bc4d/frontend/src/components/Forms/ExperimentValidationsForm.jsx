import React, { useState, useEffect } from 'react';
import { Input, Button, FormControl, FormLabel, Select, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import ExperimentForm from './ExperimentsForm';
import ValidationForm from './ValidationsForm';
import EquipmentForm from './EquipmentsForm';
import QualitativeResultForm from './QualitativeResultsForm'
import QuantitativeResultForm from './QuantitativeResultsForm'

function ExperimentValidationForm() {
    const [message, setMessage] = useState('');
    const [experiments, setExperiments] = useState([]);
    const [validations, setValidations] = useState([]);
    const [equipments, setEquipments] = useState([]);
    const [qualitativeresults, setQualitativeresults] = useState([]);
    const [quantitativeresults, setQuantitativeresults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch('/api/experimentvalidations')
      .then(res => res.json())
  
          
        .then(data => {
          console.log(data); 
          setExperiments(data.experiments);
          setValidations(data.validations);
          setEquipments(data.equipments);
          setQualitativeresults(data.qualitativeresults);
          setQuantitativeresults(data.quantitativeresults);
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
        const response = await fetch('/api/validations', {
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
    const { isOpen: isValidationsModalOpen, onOpen: onValidationsModalOpen, onClose: onValidationsModalClose } = useDisclosure();
    const { isOpen: isQualitativeresultsModalOpen, onOpen: onQualitativeresultsModalOpen, onClose: onQualitativeresultsModalClose } = useDisclosure();
    const { isOpen: isQuantitativeresultsModalOpen, onOpen: onQuantitativeresultsModalOpen, onClose: onQuantitativeresultsModalClose } = useDisclosure();

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

            <FormControl id="validations">
              <FormLabel>Validations</FormLabel>
              <Select name="validations">
                {validations.map((validation) => (
                  <option key={validation.id} value={validation.id}>{validation.name}</option>
                ))}
              </Select>
              <Button onClick={onValidationsModalOpen}>+</Button>
            </FormControl>
  
            <Modal isOpen={isValidationsModalOpen} onClose={onValidationsModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add a new validation</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <ValidationForm />
                </ModalBody>
              </ModalContent>
            </Modal>

            <FormControl id="qualitativeresults">
              <FormLabel>Qualitative results</FormLabel>
              <Select name="qualitativeresults">
                {qualitativeresults.map((qualitativeresult) => (
                  <option key={qualitativeresult.id} value={qualitativeresult.id}>{qualitativeresult.name}</option>
                ))}
              </Select>
              <Button onClick={onQualitativeresultsModalOpen}>+</Button>
            </FormControl>
  
            <Modal isOpen={isQualitativeresultsModalOpen} onClose={onQualitativeresultsModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add a new qualitative result</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <QualitativeResultForm />
                </ModalBody>
              </ModalContent>
            </Modal>

            <FormControl id="quantitativeresults">
              <FormLabel>Quantitative results</FormLabel>
              <Select name="quantitativeresults">
                {quantitativeresults.map((quantitativeresult) => (
                  <option key={quantitativeresult.id} value={quantitativeresult.id}>{quantitativeresult.name}</option>
                ))}
              </Select>
              <Button onCntick={onQuantitativeresultsModalOpen}>+</Button>
            </FormControl>
  
            <Modal isOpen={isQuantitativeresultsModalOpen} onClose={onQuantitativeresultsModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add a new quantitative result</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <QuantitativeResultForm />
                </ModalBody>
              </ModalContent>
            </Modal>
  


            <FormControl id="palidation_metadata">
             <FormLabel>Validation metadata</FormLabel>
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
  
  export default  ExperimentValidationForm;