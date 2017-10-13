
import React from 'react';
import { connect } from 'react-redux'

import MoviePage from '../components/MoviePage.jsx';
import { getImgUri, getMovieById } from '../api';
import { getMovieDetails, getMovieDetailsSuccess, getMovieDetailsFail } from '../actions'

const imgUri = getImgUri();

const mapStateToProps = (state) => {

    return {
        movieDetails:   state.movieDetails.data,
        isLoading:      state.movieDetails.isLoading,
        imgUri:         imgUri,
        isError:        state.error.length > 0
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

    dispatch(getMovieDetails());

    getMovieById(ownProps.match.params.id)
        .then(
            (res) => dispatch(getMovieDetailsSuccess(JSON.parse(res))),
            (err) => dispatch(getMovieDetailsFail(JSON.parse(err)))
        );

    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
