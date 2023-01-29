import React, { memo } from 'react';

import { PlayerPanelWrapper, } from './style'
import PlayList from './child-pages/play-list/index';
import PlayHeader from './child-pages/play-header';
import PlayLyric from './child-pages/play-lyric';

const PlayerPanel = memo(() => {
    return (
        <PlayerPanelWrapper className='wrap-v2'>
            <PlayHeader/>
            <div className='content'>
                <img src='' alt=''></img>
                <PlayList/>
                <PlayLyric/>
            </div>
        </PlayerPanelWrapper>
    );
});

export default PlayerPanel;