import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

instance.interceptors.request.use((request) => {
    console.log('Instance Axios - ' + request);
    // Edit request config
    return request;
}, error => {
    console.log('Instance Axios - ' + error);
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    console.log(response);
    // Edit response config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default instance;