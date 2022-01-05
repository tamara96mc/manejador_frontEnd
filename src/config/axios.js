import axios from 'axios';

const clienteAxios = axios.create({
    //baseURL : process.env.REACT_APP_BACKEND_URL
    baseURL : "https://bot-jira-api.herokuapp.com/"
});

export default clienteAxios;