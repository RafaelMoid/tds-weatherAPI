import './App.css';
import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Route, Link, Switch} from 'react-router-dom';
import NavBar from './NavBar';



const Title = styled.h3 `
height: 0px;
font-size: 40px;  
font-family:Urbanist;
top: 20px;
position: relative;
`

const SubTitle = styled.p `
width: 140px;
height: 30px;
font-size: 25px; 
font-family:Urbanist;
position: relative;
`

const CLimaImg = styled.img `

margin-top: 0px;
margin-bottom: 40px;
max-height: 120px;
max-width: 120px;
position: relative;
`

function Home() {
    return (

    <div className="App">
    <header className="App-header">
     
            
      <Title>WEATHER</Title>
      <SubTitle>select a city</SubTitle>
      <CLimaImg className="climaImg" src="/images/worldwidewhite.png" />
      <NavBar />

    </header>
  </div>
);
}

export default Home;