import React, { memo } from 'react';

import { PlayerWrapper, Content, PlayerLeft, PlayerRight } from './style';

const Player = memo(() => {
    return (
        <PlayerWrapper>
            <Content className='wrap-v2'>
                <PlayerLeft>
                    <h2>Player Info</h2>
                    <h2>Song comment</h2>
                </PlayerLeft>
                <PlayerRight>
                    <h2>Simi Play list</h2>
                    <h2>Simi Song</h2>
                </PlayerRight>
            </Content>
            
        </PlayerWrapper>
    );
});

export default Player;