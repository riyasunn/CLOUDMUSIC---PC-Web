import { PLAYER_ACTION_TYPE as actionTypes } from './type';
import { getSongDetail } from '../../../services/player';
import { createAcion } from '../../../store/create-actions';

const changeCurrentSong = (currentSong) => createAcion(actionTypes.CHANGE_CURRENT_SONG, currentSong);

export const getSongDeatilAction = (ids) => async(dispatch) => {
    try{
        const response = await getSongDetail(ids);
        console.log("song detail", response.data.songs[0]);
        dispatch(changeCurrentSong(response.data.songs[0]))
    }catch(err) {
        console.log("get song Deail faild", err);
    }
}