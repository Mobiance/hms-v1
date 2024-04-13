import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Snackbar, Alert } from '@mui/material'; // For toast notifications
import axios from 'axios'; // Import axios

function LoginPage2() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/api/users/login',
        {
          username,
          password,
          role,
        },
        {
            withCredentials:true
        }
      );

      if (response.status === 200) {
        // Handle successful login (e.g., redirect to dashboard)
        console.log('Login successful!', response); // Log response if needed
        document.cookie= accessToken=+response.data.data.accessToken
        setShowToast(true); // Show success toast
      } else {
        // Handle errors from backend
        setErrorMessage(await response.text());
        console.error('Login failed:', errorMessage);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred during login. Please try again.'); // Generic error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth sx={{ mb: 2 }}> {/* For nicer layout */}
        <InputLabel id="role-select-label">Role</InputLabel>
        <Select
          labelId="role-select-label"
          value={role}
          label="Role"
          onChange={(e) => setRole(e.target.value)}
        >
          <MenuItem value="Doctor">Doctor</MenuItem>
          <MenuItem value="Receptionist">Receptionist</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        sx={{ mb: 2 }}
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <TextField
        fullWidth
        sx={{ mb: 2 }}
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">
        Login
      </Button>

      <Snackbar
        open={showToast}
        autoHideDuration={3000} // Adjust duration if needed
        onClose={handleCloseToast}
      >
        {errorMessage ? (
          <Alert severity="error">{errorMessage}</Alert>
        ) : (
          <Alert severity="success">Login Successful!</Alert>
        )}
      </Snackbar>
    </form>
  );
}

export default LoginPage2;