import './App.css';
import React from 'react';
import Dallol from './pages/Dallol(NG).js';
import Fairbanks from './pages/Fairbanks(US).js';
import Londres from './pages/Londres(GB).js';
import Recife from './pages/Recife(BR).js';
import Vancouver from './pages/Vancouver(CA)';
import Yakutsk from './pages/Yakutsk(RU)';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Rafael's weather API service</h1>
        <Dallol />
        <Fairbanks />
        <Londres />
        <Recife />
        <Vancouver />
        <Yakutsk/>
      </header>
    </div>
  );
}

export default App;
