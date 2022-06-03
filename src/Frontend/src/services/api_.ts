import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://localhost:3000'
})

export default api;