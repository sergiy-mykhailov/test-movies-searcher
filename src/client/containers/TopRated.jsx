
import React from 'react';
import { connect } from 'react-redux'

import Movies from '../components/Movies.jsx';
import { getImgUri, getTopRatedMovies } from '../api';
import { getTopRated, getTopRatedSuccess, getTopRatedFail } from '../actions'

const imgUri = getImgUri();

const mapStateToProps = (state) => {

    return {
        pageTitle:  'Top-rated',
        filterType: 'title',
        movies:     state.movies.data,
        isLoading:  state.movies.isLoading,
        imgUri:     imgUri,
        isError:    state.error.length > 0
    }
};

const mapDispatchToProps = (dispatch) => {

    dispatch(getTopRated());

    getTopRatedMovies()
        .then(
            (res) => dispatch(getTopRatedSuccess(JSON.parse(res).results)),
            (err) => dispatch(getTopRatedFail(JSON.parse(err)))
        );
    return {};
};

export default connect( mapStateToProps, mapDispatchToProps )(Movies);
