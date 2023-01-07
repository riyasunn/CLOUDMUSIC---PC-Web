import axios from 'axios';

import { BASE_URL, TIMEOUT } from './config';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
});

instance.interceptors.request.use((config => {

    return config;
}, err => { 
    return err;
    }
));

instance.interceptors.response.use(response => {

    return response;
}, err => {
    console.log("in the request intercept failure", err);
    if (err && err.response) {
        switch(err.response.status) {
            case 400:
                err.message = "request error"
                break
            case 401:
                err.message = "unauthorized access"
                break
            default:
                err.message = "other errors"
        }
    }
    return err;
});

export default instance;