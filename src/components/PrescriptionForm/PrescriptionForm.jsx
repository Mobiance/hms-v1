// PrescriptionForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './PrescriptionForm.css';
import TextField from '@mui/material/TextField';

const PrescriptionForm = () => {
  const [medications, setMedications] = useState([]);
  const [medicineName, setMedicineName] = useState('');
  const [frequency, setFrequency] = useState('');
  const [quantity, setQuantity] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const handleAddMedicine = () => {
    setMedications([...medications, { medicineName, frequency, quantity }]);
    setMedicineName('');
    setFrequency('');
    setQuantity('');
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/prescription/add/:id', {
        medications,
        symptoms
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    console.log(medications);
  };

  return (
    <div className="prescription-form-container bg-white">
      <h2 style={{ color: '#008DDA' }}>Prescription Form</h2>
      <div>
        <TextField
          id="symptoms"
          label="Symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          multiline
          maxRows={4}
          fullWidth
         
        />
      </div>
      <div>
        <TextField
          id="medicineName"
          label="Medicine Name"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
          multiline
          maxRows={4}
          fullWidth
         
        />
      </div>
      <div>
        <TextField
          id="frequency"
          label="Frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          multiline
          maxRows={4}
          fullWidth
      
        />
      </div>
      <div>
        <TextField
          id="quantity"
          label="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          multiline
          maxRows={4}
          fullWidth
         
        />
      </div>
     
      <button onClick={handleAddMedicine}>Add Medicine</button>
      <div>
        <h3>Medications</h3>
        <table>
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Frequency</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {medications.map((medicine, index) => (
              <tr key={index}>
                <td>{medicine.medicineName}</td>
                <td>{medicine.frequency}</td>
                <td>{medicine.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PrescriptionForm;
