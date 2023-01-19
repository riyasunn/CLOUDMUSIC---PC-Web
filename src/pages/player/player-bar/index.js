import React, { memo, useEffect } from 'react';
import { useDispatch, useSlector } from 'react-redux';

import { Slider } from 'antd';
import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style';
import { getSongDeatilAction } from '../store/action';
// import { getSongDetail } from '../../../services/player';

const PlayerBar = memo(() => {
    const dispatch = useDispatch();

    useEffect(()=> {
        // getSongDetail(247579).then(res => console.log("get song info", res) )
        dispatch(getSongDeatilAction())
    }, [dispatch]);

    return (
        <PlayerBarWrapper className='sprite_player'>
            <div className='content wrap-v2'>
                <Control className='btn'>
                    <button className='sprite_player prev '></button>
                    <button className='sprite_player play '></button>
                    <button className='sprite_player next '></button>
                </Control>
                <PlayInfo>
                    <div className='image'>
                        <a href='/待更新'>
                            <img src='https://p1.music.126.net/xUoJEQGDf83T6zstKVNqPQ==/109951167746420311.jpg?param=34y34' alt='' />
                            <div className='sprite_player cover'></div>
                        </a>
                    </div>
                    <div className='info'>
                        <div className='song'>
                            <a href='/待更新' className='song-name'>歌曲名待更新</a>
                            <a href='/待更新' className='artiest-name'>作者名待更新</a>
                        </div>
                        <div className='progress'>
                            <Slider />
                            <div className='time'>
                                <span className='now-time'>12:00</span>
                                <span className='divider'>/</span>
                                <span className='duration'>1:00:00</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator>
                    <div className='left'>
                        <button className='sprite_player btn favor'></button>
                        <button className='sprite_player btn share'></button>
                    </div>
                    <div className='right sprite_player'>
                        <button className='sprite_player btn volume'></button>
                        <button className='sprite_player btn loop'></button>
                        <button className='sprite_player btn play-list'></button>
                    </div>
                </Operator>  
            </div>
        </PlayerBarWrapper>
    );
});

export default PlayerBar;