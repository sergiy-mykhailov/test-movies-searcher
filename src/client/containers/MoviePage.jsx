
import React from 'react';
import { connect } from 'react-redux'

import MoviePage from '../components/MoviePage.jsx';
import api from '../api';

const imgUri = api.getImgUri();

const mapStateToProps = (state, ownProps) => {

    return {
        movieDetails:   state.movieDetails.data,
        isLoading:      state.movieDetails.isLoading,
        imgUri:         imgUri,
        isError:        state.error.length > 0
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

    api.getMovieById(dispatch, ownProps.match.params.id);
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
