import axios from 'axios';
import config from '../config';

const axiosInstance = axios.create({
    baseURL: config.baseUrl,
    timeout: config.timeout,
    withCredentials: true,
    params: {
        _dc: Date.now(),
    },
});

export default axiosInstance;
