
import AppConstants from '../constants/AppConstants';

const initialState = {
    isLoading:  false,
    data:       {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case AppConstants.MOVIEDETAILS_GET_REQUEST:

            return Object.assign( {}, state,
                {
                    isLoading: true
                }
            );

        case AppConstants.MOVIEDETAILS_GET_SUCCESS:

            return Object.assign( {}, state,
                {
                    isLoading: false,
                    data: action.data
                }
            );


        case AppConstants.MOVIEDETAILS_GET_FAIL:

            return Object.assign( {}, state,
                {
                    isLoading: false,
                    data: []
                }
            );

        default:
            return state
    }
};

export default reducer;
