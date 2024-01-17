import React, { useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import CountryInput from './components/CountryInput';
import UniversityList from './components/UniversityList';

const App = () => {
  const [universities, setUniversities] = useState([]);

  const handleCountryChange = async (country) => {
    try {
      const response = await axios.get(http://universities.hipolabs.com/search?country=${country});
      await axios.post('http://localhost:3001/api/save', { country, universities: response.data });
      setUniversities(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <CountryInput onCountryChange={handleCountryChange} />
      <UniversityList universities={universities} />
    </Container>
  );
};

export default App;
