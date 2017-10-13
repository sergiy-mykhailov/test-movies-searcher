
import React from 'react';
import { connect } from 'react-redux'

import { clearErrors } from '../actions'

import ErrorPage from '../components/ErrorPage.jsx';

const mapStateToProps = (state) => {

    return {
        error:   state.error
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        onClear: () => {
            dispatch(clearErrors());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
