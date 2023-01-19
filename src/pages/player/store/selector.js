import { createSelector } from 'reselect';


const selectPlayerReducer = (state) => state.get("player");

export const selectCurrentSong = createSelector(
    [selectPlayerReducer],
    (player) => player.get("currentSong")
);