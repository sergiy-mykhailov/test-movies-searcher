
import AppConstants from '../constants/AppConstants';

export const getTopRated = () => {
    return {
        type: AppConstants.MOVIES_GET_REQUEST
    };
};
export const getTopRatedSuccess = (data) => {
    return {
        type: AppConstants.MOVIES_GET_SUCCESS,
        data
    };
};
export const getTopRatedFail = (data) => {
    return {
        type: AppConstants.MOVIES_GET_FAIL,
        data
    };
};

export const getMovieDetails = () => {
    return {
        type: AppConstants.MOVIEDETAILS_GET_REQUEST
    };
};
export const getMovieDetailsSuccess = (data) => {
    return {
        type: AppConstants.MOVIEDETAILS_GET_SUCCESS,
        data
    };
};
export const getMovieDetailsFail = (data) => {
    return {
        type: AppConstants.MOVIEDETAILS_GET_FAIL,
        data
    };
};

export const clearErrors = () => {
    return {
        type: AppConstants.ERROR_CLEAR
    };
};
