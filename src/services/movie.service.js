import {axiosService} from "./axios.service";
import {urls} from "../configs";



const movieService = {
    getAll: (page=1) => axiosService.get(urls.movies,{params:{page}}),
    getById:(id)=>axiosService.get(`${urls.oneMovie}/${id}`),
    search:(query='')=>axiosService.get(urls.search,{params: {query}})
}

export {
    movieService
}