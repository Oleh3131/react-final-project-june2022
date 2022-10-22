import {axiosService} from "./axios.service";
import {urls} from "../configs";



const movieService = {
    getAll: (page=1) => axiosService.get(urls.movies,{params:{page}}),
    getAllMovieByGenres: (with_genres='') => axiosService.get(urls.movies,{params:{with_genres}}),
    getById:(id)=>axiosService.get(`${urls.oneMovie}/${id}`),
    search:(query='')=>axiosService.get(urls.search,{params: {query}}),
    getCurrentList:()=>axiosService.get(urls.currentMovie)
}

export {
    movieService
}