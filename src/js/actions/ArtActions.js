import ActionConstants from '../ActionConstants';
import {Art} from '../models';


/**
 * @param  {Boolean} isFetching
 * @param  {?Object} error
 *
 * @return {Object}
 */
export function updateApiState(isFetching, error = null) {
    return {
        type: ActionConstants.UPDATE_API_STATE,
        isFetching,
        error
    };
}


/**
 * Action creator for storing the received art info in redux stores
 *
 * @param  {String} id  Permanent art id
 * @param  {Object} art
 *
 * @return {Object}
 */
export function storeArtInfo(id, art) {
    return {
        type: ActionConstants.STORE_ART_INFO,
        id,
        art
    };
}


/**
 * Async action creator for fetching artwork info from API
 *
 * @param  {String} id Permanent id of art
 *
 * @return {Thunk}
 */
export function fetchArtInfo(id) {
    return (dispatch) => {
        dispatch(updateApiState(true));

        return window.fetch(`https://gist.githubusercontent.com/jstaffans/2dd13eaeef667a5ea8cd7b1ac8d39b6c/raw/aa3722ed73fe5836a8c5353476bb34f3a7a2a1a0/${id}.json`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                dispatch(updateApiState(false));
                dispatch(storeArtInfo(id, new Art(data)));
            })
            .catch(err => {
                dispatch(updateApiState(false, err));
            });
    };
}

