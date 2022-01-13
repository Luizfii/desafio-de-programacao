import axios from 'axios';
import App from './App';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/codificar/oficina/proposals'
});

export default api;