import { PLAYER_ACTION_TYPE } from './type';
import { getSongDetail } from '../../../services/player';
import { createAcion } from '../../../store/create-actions';

const changeCurrentSong = (currentSong) => createAcion(PLAYER_ACTION_TYPE.CHANGE_CURRENT_SONG, currentSong);

export const getSongDeatilAction = () => async(dispatch) => {
    try{
        const response = await getSongDetail(247579);
        console.log("song detail", response.data.songs[0]);
        dispatch(changeCurrentSong(response.data.songs[0]))
    }catch(err) {
        console.log("get song Deail faild", err);
    }
}