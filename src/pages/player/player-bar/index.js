import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formatDate } from '../../../utils/format-utils';

import { Slider } from 'antd';
import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style';
import { getSongDeatilAction } from '../store/action';
import { selectCurrentSong } from '../store/selector';
import { setImageSize } from '../../../utils/format-utils';
// import { getSongDetail } from '../../../services/player';

const PlayerBar = memo(() => {
    const dispatch = useDispatch();
    const currentSong = useSelector(selectCurrentSong);
    console.log("playBar currentSong", currentSong);

    useEffect(()=> {
        // getSongDetail(247579).then(res => console.log("get song info", res) )
        dispatch(getSongDeatilAction(247579))
    }, [dispatch]);

    const songPic = (currentSong.al && currentSong.al.picUrl) || "";
    const singerName = (currentSong.ar && currentSong.ar[0].name)  || "Unknown";
    const duration = currentSong.dt || 0;
    const showDuration = formatDate(duration, "mm:ss");

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
                            <img src={setImageSize(songPic, 34)} alt='' />
                            <div className='sprite_player cover'></div>
                        </a>
                    </div>
                    <div className='info'>
                        <div className='song'>
                            <a href='/待更新' className='song-name'>{currentSong.name}</a>
                            <a href='/待更新' className='artiest-name'>{singerName}</a>
                        </div>
                        <div className='progress'>
                            <Slider />
                            <div className='time'>
                                <span className='now-time'>12:00</span>
                                <span className='divider'>/</span>
                                <span className='duration'>{showDuration}</span>
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