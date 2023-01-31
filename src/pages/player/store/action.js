import { PLAYER_ACTION_TYPE as actionTypes } from './type';
import { getSongDetail, getLyric } from '../../../services/player';
import { parseLyric } from '../../../utils/parse-lyric';
import { createAcion } from '../../../store/create-actions';


//change song, index and playlist:
const changeCurrentSong = (currentSong) => createAcion(actionTypes.CHANGE_CURRENT_SONG, currentSong);

const changeCurrentSongIndex = (index) => createAcion(actionTypes.CHANGE_CURRENT_SONG_INDEX, index);

const changePlayList = (newPlayList) => createAcion(actionTypes.CHANGE_PLAY_LIST, newPlayList);

export const getSongDeatilAction = (ids) => async(dispatch, getState) => {
        const playList = getState().getIn(["player", "playList"]);
        const songIndex = playList.findIndex(song => song.id === ids);
        let song = null;
        if (songIndex !== -1) {
        //song exist in the playList:
            song = playList[songIndex];
            dispatch(changeCurrentSongIndex(songIndex)); 
            dispatch(changeCurrentSong(song));
        } else {
        //song not in the playList:
            //1. get song details:
            const response = await getSongDetail(ids);
            song = response.data && response.data.songs[0]
            if (!song) return;
            // console.log("song detail", song);
            //2. add song to the playList and update in the redux:
            const newPlayList = [...playList];
            newPlayList.push(song);
            // console.log("newPlayList", newPlayList)
            dispatch(changePlayList(newPlayList));
            //3. change currentSongIndex:
            dispatch(changeCurrentSongIndex(newPlayList.length - 1));
            //4. change currentSong:
            dispatch(changeCurrentSong(song));
        };
        if(!song) return;
        dispatch(getLyricAction(song.id));
};

// Change play sequence:
export const changeSequenceAction = (currentSequence) => createAcion(actionTypes.CHANGE_SEQUENCE, currentSequence);

//Change current music
export const changeMusicAction = (tag) => {
    // console.log("tag", tag);
    return (dispatch, getState) => {
        
        const currentSequence = getState().getIn(["player", "sequence"]);
        const playList = getState().getIn(["player", "playList"]);
        let currentSongIndex = getState().getIn(["player", "currentSongIndex"])
        // console.log("sequence when change music", currentSequence);
        // console.log("change music-currentSongIndex-0", currentSongIndex); 
            switch(currentSequence) {
                case 1: 
                    currentSongIndex = Math.floor(Math.random() * playList.length);
                    // console.log("change music-currentSongIndex-1", currentSongIndex);
                    break;
                
                default: 
                    currentSongIndex += tag;
                    if(currentSongIndex >= playList.length) currentSongIndex = 0;
                    if(currentSongIndex < 0) currentSongIndex = playList.length - 1;
                    // console.log("change music-currentSongIndex-2", currentSongIndex);
            };
            // console.log("change music-currentSongIndex", currentSongIndex);
            const currentSong = playList[currentSongIndex];
            dispatch(changeCurrentSongIndex(currentSongIndex));
            dispatch(changeCurrentSong(currentSong));
            dispatch(getLyricAction(currentSong.id));
    };
};

//get lyrics:
const changeLyrics = (lyricList) => createAcion(actionTypes.CHANGE_LYRIC_LIST, lyricList);

export const getLyricAction = (id) => async(dispatch) => {
    const response = await getLyric(id);
    // console.log("res",response);
    const lyric = response.data.lrc.lyric;
    // console.log("get lyric action", lyric);
    const lyricList = parseLyric(lyric);
    // console.log("lyricList", lyricList);
    dispatch(changeLyrics(lyricList));
};

export const changeCurrentLyricIndexAction = (index) => createAcion(actionTypes.CHANGE_CURRENT_LYRIC_INDEX, index);

export const changeIsPlayPanelOpenAction = (Boolean) => createAcion(actionTypes.CHANGE_IS_PLAY_PANEL_OPEN, Boolean);