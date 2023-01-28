import { Map } from 'immutable';
import { PLAYER_ACTION_TYPE as actionTypes} from './type';

const defaultState = Map({
    currentSong: {},
    playList: [],
    currentSongIndex: 0,
    sequence: 0, //0 loop; 1 random; 2 single
    lyricList: [],
    currentLyricIndex: 0,
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
        case actionTypes.CHANGE_SEQUENCE:
            return state.set("sequence", payload);
        case actionTypes.CHANGE_LYRIC_LIST:
            return state.set("lyricList", payload);
        case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex", payload);
        default:
            return state;
    };
};

export default reducer;