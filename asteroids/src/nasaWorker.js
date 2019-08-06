// This file is responsible for getting data from Nasa
import axios from 'axios';
import App from './App';

const API_KEY   = "xdmrFmM68ruLMzXiIAi3SfpVGJr5ofncLv7NxA45"

export const getAsteroids = (start, end) => {
    return axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${API_KEY}`)
}
