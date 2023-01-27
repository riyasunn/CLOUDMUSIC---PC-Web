import { createSelector } from 'reselect';


const selectPlayerReducer = (state) => state.get("player");

export const selectCurrentSong = createSelector(
    [selectPlayerReducer],
    (player) => player.get("currentSong")
);

export const selectPlayList = createSelector(
    [selectPlayerReducer],
    (player) => player.get("playList")
);

export const selectSequence = createSelector(
    [selectPlayerReducer],
    (player) => player.get("sequence")
);

export const selectLyricList = createSelector(
    [selectPlayerReducer],
    (player) => player.get("lyricList")
);