
import config from './config.json';
import theMovieDb from 'themoviedb-javascript-library';

const api_key       = config.api.v3.api_key;

theMovieDb.common.api_key       = api_key;
theMovieDb.common.base_uri      = config.api.v3.base_uri;
theMovieDb.common.images_uri    = config.img.images_uri;

export const getImgUri = () => {
    return config.img.images_uri + config.img.poster_size;
};

export const getTopRatedMovies = () => {

    return new Promise((resolve, reject) => {
        theMovieDb.movies.getTopRated({ api_key }, resolve, reject);
    });
};

export const getMovieById = (id) => {

    return new Promise((resolve, reject) => {
        theMovieDb.movies.getById({ api_key, id }, resolve, reject);
    });
};
