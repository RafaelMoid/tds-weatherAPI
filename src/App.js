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
      <header className="App-header">
       
              
        <Title>WEATHER</Title>
        <SubTitle>select a city</SubTitle>
        <WW className="WW" src="\img\worldwidewhite.png" ></WW>
        <NavBar />
        <ul className="Ul">
          <Route exact path="/dallol" component={Dallol} />
          <Route exact path="/fairbanks" component={Fairbanks} />
          <Route exact path="/londres" component={Londres} />
        </ul>  
        <ul className="Ul">
          <Route exact path="/recife" component={Recife} />
          <Route exact path="/vancouver" component={Vancouver} />
          <Route exact path="/yakutsk" component={Yakutsk} />
          </ul>
        
      </header>
    </div>
  );
}

export default App;
