const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    movies: '/discover/movie',
    genres: '/genre/movie/list',
    oneMovie:'/movie',
    search:'./search/movie',
    currentMovie:'movie/now_playing'
}

export {
    baseURL,
    urls
}