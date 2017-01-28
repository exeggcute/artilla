import {ArtActions} from '../src/js/actions';
import ActionConstants from '../src/js/ActionConstants';

describe('art actions', () => {
    it('should create an action to update api status', () => {
        const isFetching = true;

        const expectedAction = {
            type: ActionConstants.UPDATE_API_STATE,
            isFetching,
            error: null

        };

        expect(ArtActions.updateApiState(isFetching)).toEqual(expectedAction);
    });


    it('should create an action to store art info', () => {
        const id = 123;
        const art = {
            name: 'Jean Monnet',
            year: '1901'
        };

        const expectedAction = {
            type: ActionConstants.STORE_ART_INFO,
            id,
            art
        };

        expect(ArtActions.storeArtInfo(id, art)).toEqual(expectedAction);
    });
});
