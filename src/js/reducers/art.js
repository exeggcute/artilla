import ActionConstants from '../ActionConstants';


const initialState = {
    apiStatus: {
        isFetching: false,
        error: null
    },
    arts: {}
};


export default function art(state = initialState, action) {
    let arts;
    let apiStatus;

    switch (action.type) {
        case ActionConstants.UPDATE_API_STATE:
            apiStatus = {
                ...state.apiStatus,
                isFetching: action.isFetching,
                error: action.error
            };

            return {
                ...state,
                apiStatus
            };


        case ActionConstants.STORE_ART_INFO:
            arts = {...state.arts};

            arts[action.id] = action.art;

            return {
                ...state,
                arts
            };


        default:
            return state;
    }
}
