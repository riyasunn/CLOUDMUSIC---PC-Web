import { Map } from 'immutable';
import { PLAYER_ACTION_TYPE } from './type';

const defaultState = Map({
    currentSong: {},
});

const reducer = (state = defaultState, action) => {
    const { type, payload } = action;

    switch(type) {
        case PLAYER_ACTION_TYPE.CHANGE_CURRENT_SONG:
            return state.set("currentSong", payload);
        default:
            return state;
    }
};

export default reducer;