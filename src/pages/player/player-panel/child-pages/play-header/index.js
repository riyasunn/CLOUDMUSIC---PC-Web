import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { HeaderWrapper, HeaderLeft, HeaderRight} from './style';
import { selectPlayList } from '../../../store/selector';

const PlayHeader = memo(() => {

    const playList = useSelector(selectPlayList);

    return (
        <HeaderWrapper>
            <HeaderLeft>
                <h2>Playlist ({playList.length})</h2>
                <div className='operator'>
                    <i className='sprite_playlist del'></i>
                    <span>Delete all</span>
                </div>
            </HeaderLeft>
            <HeaderRight>
                <h2>song name</h2>
                <div className='operator'>
                    <i className='sprite_playlist close'></i>
                </div>
            </HeaderRight>
        </HeaderWrapper>
    );
});

export default PlayHeader;