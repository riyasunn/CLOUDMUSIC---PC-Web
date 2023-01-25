import { PLAYER_ACTION_TYPE as actionTypes } from './type';
import { getSongDetail } from '../../../services/player';
import { createAcion } from '../../../store/create-actions';

const changeCurrentSong = (currentSong) => createAcion(actionTypes.CHANGE_CURRENT_SONG, currentSong);

const changeCurrentSongIndex = (index) => createAcion(actionTypes.CHANGE_CURRENT_SONG_INDEX, index);

const changePlayList = (newPlayList) => createAcion(actionTypes.CHANGE_PLAY_LIST, newPlayList);

export const getSongDeatilAction = (ids) => async(dispatch, getState) => {
        const playList = getState().getIn(["player", "playList"]);
        console.log("play-list", playList);
        const songIndex = playList.findIndex(song => song.id === ids);

        if (songIndex !== -1) {
        //song exist in the playList:
            const currentSong = playList[songIndex];
            dispatch(changeCurrentSongIndex(songIndex)); 
            dispatch(changeCurrentSong(currentSong));
        } else {
        //song not in the playList:
            //1. get song details:
            const response = await getSongDetail(ids);
            const song = response.data && response.data.songs[0]
            if (!song) return;
            console.log("song detail", song);
            //2. add song to the playList and update in the redux:
            const newPlayList = [...playList];
            newPlayList.push(song);
            console.log("newPlayList", newPlayList)
            dispatch(changePlayList(newPlayList));
            //3. change currentSongIndex:
            dispatch(changeCurrentSongIndex(newPlayList.length - 1));
            //4. change currentSong:
            dispatch(changeCurrentSong(song));
        }
};