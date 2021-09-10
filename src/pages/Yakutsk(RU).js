import React,{Fragment, useState} from "react";
import styled from 'styled-components';
import {Route} from 'react-router-dom'
import "./pages.css";


export const WeatherInfoIcons = {
    sunset: "./tds-weatherapi/public/icons/temp.svg",
    sunrise: "./tds-weatherapi/public/icons/temp.svg",
    humidity: "./tds-weatherapi/public/icons/humidity.svg",
    wind: "./tds-weatherapi/public/icons/wind.svg",
    pressure: "./tds-weatherapi/public/icons/pressure.svg",
}

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


async function fetchAsync () {
    // await response of fetch call
    let response = await fetch('https://api.github.https://samples.openweathermap.org/data/2.5/forecast?id=2318534&appid=3abe62ea41f7078ad65d4e59cf05bcfc');
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    return data;

  }
  
  // trigger async function
  // log response or catch error of fetch promise
  fetchAsync()
      .then(data => console.log(data))
      .catch(reason => console.log(reason.message))

function Yakutsk(){



    return(
        <Fragment>
            
                <Title className="title">Yakutsk,RU</Title>
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
                <ul className="Values">
                    <li>5,1m/s</li>
                    <li>5:14am</li>
                    <li>7:25PM</li>
                    <li>52%</li>
                </ul>
                            
        </Fragment>
    );
}

export default Yakutsk;