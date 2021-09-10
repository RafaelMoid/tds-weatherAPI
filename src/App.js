import './App.css';
import React, {Fragment} from 'react';
import Dallol from './pages/Dallol(NG).js';
import Fairbanks from './pages/Fairbanks(US).js';
import Londres from './pages/Londres(GB).js';
import Recife from './pages/Recife(BR).js';
import Vancouver from './pages/Vancouver(CA)';
import Yakutsk from './pages/Yakutsk(RU)';
import {Route, Link} from 'react-router-dom';
import NavBar from './NavBar';
import axios from './axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Rafael's weather API service</h1>
        <NavBar />
        <Route exact path="/dallol" component={Dallol} />
        <Route exact path="/fairbanks" component={Fairbanks} />
        <Route exact path="/londres" component={Londres} />
        <Route exact path="/recife" component={Recife} />
        <Route exact path="/vancouver" component={Vancouver} />
        <Route exact path="/yakutsk" component={Yakutsk} />
        <Route exact path="/" />
      </header>
    </div>
  );
}

export default App;
