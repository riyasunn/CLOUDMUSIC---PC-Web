import { Map } from 'immutable';
import { PLAYER_ACTION_TYPE as actionTypes} from './type';

const defaultState = Map({
    currentSong: {},
});

const reducer = (state = defaultState, action) => {
    const { type, payload } = action;

    switch(type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", payload);
        default:
            return state;
    }
};

export default reducer;