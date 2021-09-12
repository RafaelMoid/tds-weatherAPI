import React from "react";
import axios from "axios";

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q';
const apiKey = '3158e411ff0769713960b94f6e40d7e9';

export const getWeatherData = async (cityname) => {
 try{
     const data = await axios.get(baseUrl + `=${cityname}&appid=${apiKey}`);
    //  console.log(data)
     return data;
 }catch(error){
     throw error;
 }



}