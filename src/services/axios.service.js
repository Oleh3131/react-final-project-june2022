import axios from "axios";

import {baseURL} from "../configs";

let axiosService = axios.create({baseURL});

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDA4Yzg1NzA2NGIxOGMwM2E4N2FlMjZjYTU4ZWJjMCIsInN1YiI6IjYzNGQ0MjA4Mzg5ZGExMDA3YzY4NTg0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.atUYdlL9V74zxEjd274VSJpusRpHs07Qg0sUqp99zYM';

axiosService.interceptors.request.use((config) => {

    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;

});

export {
    axiosService
}