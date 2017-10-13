
import { combineReducers } from 'redux';

import movies from './movies';
import movieDetails from './movieDetails';
import error from './error';

const reducer = combineReducers({
    movies,
    movieDetails,
    error
});

export default reducer;
