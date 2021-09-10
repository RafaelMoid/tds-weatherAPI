import React,{Fragment} from "react";
import styled from 'styled-components';
import {Route} from 'react-router-dom'

const WeatherLogo =styled.img`
width: 140px;
height: 140px;
margin: 40px auto;

`


function Dallol(){
    return(
        <Fragment>
            
                <h3 className="title">Dallol</h3>
                <br/>
                <p>clima atual</p>
                <p>temperatura</p>
                <WeatherLogo src="/icons/perfect-day.svg"/>
                <ul className="listaHora">
                    <li>dawn</li>
                    <li>morning</li>
                    <li>afternoon</li>
                    <li>night</li>
                </ul>
                <ul className="listaDados">
                    <li>wind speed</li>
                    <li>sunrise</li>
                    <li>sunset</li>
                    <li>humidity</li>
                </ul>
                  
          <Route exact path="/" />
            
        </Fragment>
    );
}

export default Dallol;