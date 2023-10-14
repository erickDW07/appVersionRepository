import axios from 'axios';

const urlBase = 'http://localhost:3030/api/appRepository';


export const aplicaconesApi = axios.create({
    baseURL: urlBase
});

