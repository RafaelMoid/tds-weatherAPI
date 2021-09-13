import React,{Fragment, useState, useEffect} from "react";
import {Route, Link} from 'react-router-dom'
import "./pages.css";
import styled from "styled-components";
import {getWeatherData} from "../weatherapi.js";





//Popular esse array com as imagens da pasta Images
const images = [
    { id: 1, src: './tds-weatherapi/public/icons/', title: 'foo', description: 'bar' },
    { id: 2, src: './assets/image02.jpg', title: 'foo', description: 'bar' },
    { id: 3, src: './assets/image03.jpg', title: 'foo', description: 'bar' },
    { id: 4, src: './assets/image04.jpg', title: 'foo', description: 'bar' },
    { id: 5, src: './assets/image05.jpg', title: 'foo', description: 'bar' }];

const ReturnBtn = styled.button `
height: 20%;
max-width: 100px;
max-height: 100px;
width: 20%;
color: black;
background-color:transparent;
border-radius: 0px;
top: 0;
left: 5%;
position: absolute;
background: transparent;
border: none !important;
font-size:0;
`





function Dallol(){
    
    const[weatherdata,setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const CITY = "Dallol";
    const MINUTES_TO_INTERVAL = 1
    const INTERVAL = MINUTES_TO_INTERVAL * 60 * 1000
    
    const getData = async () => {
        try{
            const {data} = await getWeatherData(CITY);
            console.log(data)
            setWeatherData(data)
            // console.log(data.weather)
            // console.log(data.weather[0].main)
            // console.log(data.name)
        }catch(error){
            console.log(error.message);
        }
    }
    
    useEffect(() => {
        getData();
        setInterval(() => {
            getData();
        }, INTERVAL);
    }, []);


    return(
        <Fragment>
                
                

                <ReturnBtn>
                <Link className="ReturnBtn" to='/'><img className="climaImg" src="/images/arrowBlack.png" /></Link>
                </ReturnBtn>

                <h3 className="title"> DALLOL</h3>
                <br/>
                <p className="subTitle">{weatherdata?.weather[0].main}</p>
                    <div>
                        <h1 className="temp">{parseFloat(weatherdata?.main.temp - 273.15).toFixed(0)}</h1>
                        <h3 className="celcius">°C</h3>
                         
                    </div>
                    <img className="climaImg" src="/images/sunny.svg" />
                <img src="/icons/perfect-day.svg"/>
                <ul className="Ul">
                    <li>afternoon <br/><br/> 
                    <img src="/images/afternoon.svg"/> </li>
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
                    <li>{parseFloat(weatherdata?.wind.speed).toFixed(1)}m/s</li>
                    <li>{parseFloat(weatherdata?.sys.sunrise).toFixed(1)}</li>
                    <li>{parseFloat(weatherdata?.sys.sunset).toFixed(1)}</li>
                    <li>{parseFloat(weatherdata?.main.humidity).toFixed(1)}%</li>
                </ul>

                
        </Fragment>
    );
}

export default Dallol;