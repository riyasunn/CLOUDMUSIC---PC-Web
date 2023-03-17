import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { HeaderWrapper, HeaderLeft, HeaderRight} from './style';
import { selectPlayList, selectCurrentSong, selectIsPlayPanelOpen } from '../../../store/selector';
import { deletePlayListAction, changeIsPlayPanelOpenAction } from '../../../store/action';

const PlayHeader = memo(() => {
    const dispatch = useDispatch();

    const playList = useSelector(selectPlayList);
    const currentSong = useSelector(selectCurrentSong);
    const isPlayPanelOpen = useSelector(selectIsPlayPanelOpen);

    const deleteAll = () => {
        dispatch(deletePlayListAction([]));
    };
    const closePanel = () => {
        dispatch(changeIsPlayPanelOpenAction(!isPlayPanelOpen))
    }

    return (
        <HeaderWrapper>
            <HeaderLeft>
                <h2>Playlist ({playList.length})</h2>
                <div className='operator'>
                    <i className='sprite_playlist del'></i>
                    <span onClick={deleteAll}>Delete all</span>
                    <span className='close' onClick={closePanel}> X Close</span>
                </div>
            </HeaderLeft>
            <HeaderRight>
                <h2>{currentSong.name}</h2>
            </HeaderRight>
        </HeaderWrapper>
    );
});

export default PlayHeader;