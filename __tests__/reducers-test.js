import cloneDeep from 'lodash.cloneDeep';
import {art as artReducer} from '../src/js/reducers';
import ActionConstants from '../src/js/ActionConstants';

const initialState = {
    apiStatus: {
        isFetching: false,
        error: null
    },
    arts: {}
};


describe('arts reducer', () => {
    it('should return the initial state', () => {
        expect(
            artReducer(undefined, {}) // eslint-disable-line no-undefined
        ).toEqual(initialState);
    });


    it('should update the api status', () => {
        const expectedState = cloneDeep(initialState);
        const isFetching = false;
        const error = 'Some error';

        const apiStatus = {
            isFetching,
            error
        };

        expectedState.apiStatus = apiStatus;

        const newState = artReducer(initialState, {
            type: ActionConstants.UPDATE_API_STATE,
            isFetching,
            error
        });

        expect(newState).toEqual(expectedState);
    });


    it('should update the art', () => {
        const expectedState = cloneDeep(initialState);
        const id = 123;
        const art = {
            id,
            name: 'Florian painting'
        };

        expectedState.arts[id] = art;

        const newState = artReducer(initialState, {
            type: ActionConstants.STORE_ART_INFO,
            id,
            art
        });

        expect(newState).toEqual(expectedState);
    });
});

