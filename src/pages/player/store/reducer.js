import { Map } from 'immutable';
import { PLAYER_ACTION_TYPE as actionTypes} from './type';

const defaultState = Map({
    currentSong: {},
    playList: [],
    currentSongIndex: 0,
});

const reducer = (state = defaultState, action) => {
    const { type, payload } = action;

    switch(type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", payload);
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList", payload);
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex", payload);
        default:
            return state;
    }
};

export default reducer;