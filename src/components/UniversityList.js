import React from 'react';
import List from '@mui/material/List';
import UniversityItem from './UniversityItem';

const UniversityList = ({ universities }) => {
  return (
    <List>
      {universities.map((university, index) => (
        <UniversityItem key={index} university={university} />
      ))}
    </List>
  );
};

export default UniversityList;
    