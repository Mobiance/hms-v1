import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 45%;
  bgcolor: '#DFF5FF';
`;

const FormWrapper = styled.div`
  width: 80%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  bgcolor: '#DFF5FF';
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #008DDA; 
`;

const AddPatientForm = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [gender, setGender] = useState('');
  const [Dob, setDob] = useState('');
  const [address, setAddress] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'contactNumber':
        setContactNumber(value);
        break;
      case 'age':
        setAge(value === '' ? '' : parseInt(value));
        break;
      case 'weight':
        setWeight(value === '' ? '' : parseInt(value));
        break;
      case 'gender':
        setGender(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
        break;
    }
  };

  const handleDateChange = (date) => {
    setDob(date.format('YYYY-MM-DD'));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/patients/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'      
        },
        credentials: 'include',
        body: JSON.stringify({
          name,
          contactNumber,
          age,
          weight,
          gender,
          Dob,
          address
        })
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Patient created successfully:', data);
        // Optionally, you can redirect or perform other actions upon successful creation
      } else {
        console.error('Failed to create patient:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to create patient:', error);
    }
  };

  return (
    <FormContainer className='bg-white'>
      <FormWrapper>
        <FormTitle>Add New Patient</FormTitle>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
            fullWidth
            multiline
            margin='normal'
          />
          <TextField
            label="Contact Number"
            type="tel"
            name="contactNumber"
            value={contactNumber}
            onChange={handleChange}
            required
            fullWidth
            multiline
            margin='normal'
          />
          <TextField
            label="Age"
            type="number"
            name="age"
            value={age}
            onChange={handleChange}
            required
            fullWidth
            multiline
            margin='normal'
          />
          <TextField
            label="Weight (in kg)"
            type="number"
            name="weight"
            value={weight}
            onChange={handleChange}
            required
            fullWidth
            multiline
            margin='normal'
          />
          <TextField
            select
            label="Gender"
            type='number'
            name="gender"
            value={gender}
            onChange={handleChange}
            required
            fullWidth
            multiline
            margin='normal'
          >
            <MenuItem value="">Select Gender</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField
              label="Date of Birth"
              value={Dob ? dayjs(Dob) : null}
              format="DD/MM/YYYY"
              onChange={handleDateChange}
              fullWidth
              margin='normal'
              multiline
            />
          </LocalizationProvider>
          <TextField
            label="Address"
            name="address"
            multiline
            rows={4}
            value={address}
            onChange={handleChange}
            fullWidth
            margin='normal'
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
        </form>
      </FormWrapper>
    </FormContainer>
  );
};

export default AddPatientForm;
