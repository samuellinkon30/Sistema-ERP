import axios from 'axios';

const api = axios.create({
    baseURL: 'https://erp-mlovi.herokuapp.com/',
});

export default api;