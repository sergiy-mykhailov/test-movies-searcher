
import config from './config.json';
import theMovieDb from 'themoviedb-javascript-library';

import {
    getTopRated, getTopRatedSuccess, getTopRatedFail,
    getMovieDetails, getMovieDetailsSuccess, getMovieDetailsFail
} from '../actions'

const api_key       = config.api.v3.api_key;

theMovieDb.common.api_key       = api_key;
theMovieDb.common.base_uri      = config.api.v3.base_uri;
theMovieDb.common.images_uri    = config.img.images_uri;

export default {

    getImgUri () {
        return config.img.images_uri + config.img.poster_size;
    },

    getTopRated (dispatch) {

        dispatch(getTopRated());

        const successCB = (res) => {
            const data = JSON.parse(res);
            dispatch(getTopRatedSuccess(data.results));
        };
        const errorCB = (res) => {
            dispatch(getTopRatedFail(JSON.parse(res)));
        };

        theMovieDb.movies.getTopRated({ api_key }, successCB, errorCB);

    },

    getMovieById (dispatch, id) {

        dispatch(getMovieDetails());

        const successCB = (res) => {
            const data = JSON.parse(res);
            dispatch(getMovieDetailsSuccess(data));
        };
        const errorCB = (res) => {
            dispatch(getMovieDetailsFail(JSON.parse(res)));
        };

        theMovieDb.movies.getById({ api_key, id }, successCB, errorCB);

    }
}