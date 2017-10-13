
import AppConstants from '../constants/AppConstants';

const reducer = (state = [], action) => {
    switch (action.type) {

        case AppConstants.MOVIES_GET_FAIL:
            return [ ...state, action.data ];

        case AppConstants.MOVIEDETAILS_GET_FAIL:
            return [ ...state, action.data ];

        case AppConstants.ERROR_CLEAR:
            return [];

        default:
            return state
    }
};

export default reducer;
