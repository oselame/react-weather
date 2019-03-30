import axios from "axios";

const API_KEY = '15312c73e55bdf784321093410f8971d';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},br`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}