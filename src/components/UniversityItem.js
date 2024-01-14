import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WebIcon from '@mui/icons-material/Web';

const UniversityItem = ({ university }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleWebsiteClick = () => {
    window.open(university.web_pages[0], '_blank');
  };

  return (
    <>
      <ListItem button onClick={handleToggle}>
        <ListItemText primary={university.name} />
        <IconButton onClick={handleWebsiteClick}>
          <WebIcon />
        </IconButton>
        <IconButton onClick={handleToggle}>
          <ExpandMoreIcon />
        </IconButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemText primary={`Domains: ${university.domains.join(', ')}`} />
        <ListItemText primary={`Country Code: ${university.alpha_two_code}`} />
        <ListItemText primary={`Web Sites: ${university.web_pages.join(', ')}`} />
        <ListItemText primary={`State / Province: ${university.country}`} />
        <ListItemText primary={`Country: ${university.country}`} />
      </Collapse>
    </>
  );
};

export default UniversityItem;
