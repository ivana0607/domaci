import axios from "axios"
const SPACEX_BASE_URL = 'https://api.spacexdata.com/v3';//bazni url uvek izvucemo u promenljivu
//ako bude menjan da ga menjamo samo na jednom mestu

export const getInfo = () => {
    return axios.get(`${SPACEX_BASE_URL}/info`);
}
export const getPastLaunches = () => {
    return axios.get(`${SPACEX_BASE_URL}/launches/past`);
}