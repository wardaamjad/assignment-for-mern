import React, { useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import CountryInput from './components/CountryInput';
import UniversityList from './components/UniversityList';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import University from './components/University';
import Main from './components/Main';

const App = () => {
 

  return (
    <Router>
    <Switch>
    <Route path="/" component={Main} />
    <Route path="/university/:university" component={University} />
    </Switch>
    </Router>
  );
};

export default App;
