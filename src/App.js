import './App.css';
import React, {Fragment} from 'react';
import Dallol from './pages/Dallol(NG).js';
import Fairbanks from './pages/Fairbanks(US).js';
import Londres from './pages/Londres(GB).js';
import Recife from './pages/Recife(BR).js';
import Vancouver from './pages/Vancouver(CA).js';
import Home from './pages/Home.js';
import Yakutsk from './pages/Yakutsk(RU).js';
import {Route, Link, Switch} from 'react-router-dom';
import styled from 'styled-components';

const WW = styled.img `
width: 80px;
height: 80px;
`

const Title = styled.h3 `
height: 0px;
`

const SubTitle = styled.p `
width: 140px;
height: 30px;
font-size: 20px;
`



function App() {
  return (
    <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/dallol" component={Dallol} />
          <Route exact path="/fairbanks" component={Fairbanks} />
          <Route exact path="/londres" component={Londres} />
          <Route exact path="/recife" component={Recife} />
          <Route exact path="/vancouver" component={Vancouver} />
          <Route exact path="/yakutsk" component={Yakutsk} />
          
      
    </div>
  );
}

export default App;
