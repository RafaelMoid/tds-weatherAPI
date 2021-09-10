import React,{Fragment, useState} from "react";
import styled from 'styled-components';
import {Route} from 'react-router-dom'
import "./pages.css";



const api = {
    key:"3abe62ea41f7078ad65d4e59cf05bcfc",
    base:"https://api.openweathermap.org/data/2.5/",
};

const WeatherLogo =styled.img`
width: 140px;
height: 140px;
margin: -10px auto;

`

const Title = styled.h3 `
height: 0px;
margin-bottom: -20px;
`

const SubTitle = styled.p `
width: 350px;
height: 0px;
font-size: 20px;
text-align: center;
align-items: center;
margin-bottom: 0px;
`
const Temp = styled.div `
display: flex;
flex-direction:row;
align-items: center;
`

const Condition = styled.span `
width: 140px;
height: 140px;
margin: 0px;
font-size: 100px;
margin-left: 90px;
margin-right: -20px;
`
const ConditionFontSize = styled.span `
font-size: 20px;
margin-bottom: 50px;
`

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`

const InfoContainer = styled.div`
display: flex;
margin: 5px 10px;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`



function Dallol(){

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => { return}

    return(
        <Fragment>
            
                <Title className="title">Dallol,NG</Title>
                <br/>
                <SubTitle>clima atual</SubTitle>
                    <Temp>
                        <Condition>-2</Condition>
                        <ConditionFontSize>°C</ConditionFontSize>
                        
                    </Temp>
                <WeatherLogo src="/icons/perfect-day.svg"/>
                <ul className="Ul">
                    <li>afternoon</li>
                    <li>dawn</li>
                    <li>morning</li>                    
                    <li>night</li>
                </ul>
                <ul className="Img">
                    <li>-8°C</li>
                    <li>-5°C</li>
                    <li>-2°C</li>
                    <li>-7°C</li>
                </ul>
                <ul className="Values">
                    <li>-8°C</li>
                    <li>-5°C</li>
                    <li>-2°C</li>
                    <li>-7°C</li>
                </ul>
                
                <ul className="Ul">
                    <li>wind speed</li>
                    <li>sunrise</li>
                    <li>sunset</li>
                    <li>humidity</li>
                </ul>
                <ul className="Img">
                    <li>-8°C</li>
                    <li>-5°C</li>
                    <li>-2°C</li>
                    <li>-7°C</li>
                </ul>
                <ul className="Values">
                    <li>5,1m/s</li>
                    <li>5:14am</li>
                    <li>7:25PM</li>
                    <li>52%</li>
                </ul>
                
                <button className="btn" >
                <input type="image" src="./public/icons/pressure.svg" />
                </button>  
            
        </Fragment>
    );
}

export default Dallol;