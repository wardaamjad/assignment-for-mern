import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const CountryInput = ({ onCountryChange }) => {
  const [country, setCountry] = useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCountryChange(country);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Country Name"
        variant="outlined"
        fullWidth
        value={country}
        onChange={handleCountryChange}
      />
    </form>
  );
};

export default CountryInput;
