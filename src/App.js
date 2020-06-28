import React from 'react';
import logo from './logo.svg';
import './App.css';

import SiteLayout from './containers/SiteLayout';
import {  } from '@material-ui/core';
import PolitifactParser from './components/PolitifactParser';

function App() {
  return (
    <div className="App">
      <PolitifactParser/>
      <SiteLayout>
        
      </SiteLayout>
    </div>
  );
}

export default App;
