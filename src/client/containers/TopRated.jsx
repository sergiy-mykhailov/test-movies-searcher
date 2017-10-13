
import React from 'react';
import { connect } from 'react-redux'

import Movies from '../components/Movies.jsx';
import api from '../api';

const imgUri = api.getImgUri();

const mapStateToProps = (state) => {

    return {
        pageTitle:  'Top-rated',
        filterType: 'title',
        movies:     state.movies.data,
        isLoading:  state.movies.isLoading,
        imgUri:     imgUri,
        isError:        state.error.length > 0
    }
};

const mapDispatchToProps = (dispatch) => {
    api.getTopRated(dispatch);
    return {};
};

export default connect( mapStateToProps, mapDispatchToProps )(Movies);
