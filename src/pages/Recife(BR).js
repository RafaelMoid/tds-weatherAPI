import React,{Fragment, useState} from "react";
import {Route} from 'react-router-dom'
import "./pages.css";



const api = {
    key:"",
    base:"https://api.openweathermap.org/data/2.5/",
};

//Popular esse array com as imagens da pasta Images
const images = [
    { id: 1, src: './tds-weatherapi/public/icons/', title: 'foo', description: 'bar' },
    { id: 2, src: './assets/image02.jpg', title: 'foo', description: 'bar' },
    { id: 3, src: './assets/image03.jpg', title: 'foo', description: 'bar' },
    { id: 4, src: './assets/image04.jpg', title: 'foo', description: 'bar' },
    { id: 5, src: './assets/image05.jpg', title: 'foo', description: 'bar' }];



function Recife(){

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => { return}

    return(
        <Fragment>
            
                <h3 className="title">RECIFE</h3>
                <br/>
                <p className="subTitle">sunny</p>
                    <div>
                        <h1 className="temp">28</h1>
                        <h3 className="celcius">°C</h3>
                        
                    </div>
                    <img className="climaImg" src="/images/storm.svg" />
                <ul className="Ul">
                    <li>afternoon <br/><br/> <image src="/icons/afternoon.svg"/> </li>
                    <li>dawn <br/><br/>  </li>
                    <li>morning <br/><br/>  </li>                    
                    <li>night <br/><br/>  </li>
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

export default Recife;