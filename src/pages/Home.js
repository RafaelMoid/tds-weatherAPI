import './App.css';
import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Route, Link, Switch} from 'react-router-dom';
import NavBar from './NavBar';

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


function Home() {
    return (

    <div className="App">
    <header className="App-header">
     
            
      <Title>WEATHER</Title>
      <SubTitle>select a city</SubTitle>
      <WW className="WW" src="tds-wheatherapi/public/img/worldwidewhite.png" ></WW>
      <NavBar />

    </header>
  </div>
);
}

export default Home;