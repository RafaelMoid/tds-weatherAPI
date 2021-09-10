import React,{Fragment, useState} from "react";
import {Route} from 'react-router-dom'
import "./pages.css";



const api = {
    key:"3abe62ea41f7078ad65d4e59cf05bcfc",
    base:"https://api.openweathermap.org/data/2.5/",
};





function Dallol(){

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => { return}

    return(
        <Fragment>
            
                <h3 className="title">Dallol,NG</h3>
                <br/>
                <p className="subTitle">clima atual</p>
                    <div>
                        <h1 className="temp">-2</h1>
                        <h3 className="celcius">°C</h3>
                        
                    </div>
                <image src="/icons/perfect-day.svg"/>
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
               
            
        </Fragment>
    );
}

export default Dallol;