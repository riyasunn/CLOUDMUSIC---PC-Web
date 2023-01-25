import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setImageSize, formatDate, getPlaySong } from '../../../utils/format-utils';

import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';
import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style';
import { getSongDeatilAction } from '../store/action';
import { selectCurrentSong } from '../store/selector';
// import { getSongDetail } from '../../../services/player';

const PlayerBar = memo(() => {
    //props and state:
    const [ currentTime, setCurrentTime] = useState(0);
    const [ progress, setProgress ] = useState(0); 
    const [ isChanging, setIsChanging ] = useState(false);
    const [ isPlaying, setIsPlaying ] = useState(false);

    //redux hooks:
    const dispatch = useDispatch();
    const currentSong = useSelector(selectCurrentSong);
    // console.log("playBar currentSong", currentSong);

    //other hooks:
    const audioRef = useRef();

    useEffect(()=> {
        // getSongDetail(247579).then(res => console.log("get song info", res) )
        dispatch(getSongDeatilAction(1355394805))
    }, [dispatch]);

    useEffect(()=> {
        audioRef.current.src = getPlaySong(currentSong.id);
    }, [currentSong]);
    

    //other handle:
    const songPic = (currentSong.al && currentSong.al.picUrl) || "";
    const singerName = (currentSong.ar && currentSong.ar[0].name)  || "Unknown";
    const duration = currentSong.dt || 0;
    const showDuration = formatDate(duration, "mm:ss");
    const showCurrentTime = formatDate(currentTime, "mm:ss");

    //handle function:
    const playMusic = useCallback(() => {
            isPlaying ? audioRef.current.pause() : audioRef.current.play();
            setIsPlaying(!isPlaying);
    }, [isPlaying]);

    const timeUpdate = (e) => {
        // console.log("timeupdate current-time: ",e.target.currentTime);
        
        if(!isChanging) { 
            // console.log("progress value when not change slider: ", currentTime, currentTime / duration * 100);
            setProgress(currentTime / duration * 100); 
            setCurrentTime(e.target.currentTime * 1000);
        }
    };

    const sliderChange = useCallback((value) => {
        // console.log("change value", value);
        setIsChanging(true);
        const duringChangeCurrentTime = value / 100 * duration;
        setCurrentTime(duringChangeCurrentTime);
        setProgress(value); 
    }, [duration]);

    const sliderAfterChange = useCallback((value)=> {
        // console.log("end", value);
        const currentTimeAfterChange = value / 100 * duration / 1000;
        audioRef.current.currentTime = currentTimeAfterChange;
        // console.log("after change music current-time", audioRef.current.currentTime )
        setCurrentTime(currentTimeAfterChange * 1000);
        // console.log("after change display current-time", currentTime);
        setIsChanging(false);

        if (!isPlaying) {
            playMusic();
        };
    }, [duration, isPlaying, playMusic]);

    return (
        <PlayerBarWrapper className='sprite_player'>
            <div className='content wrap-v2'>
                <Control isPlaying={isPlaying} >
                    <button className='sprite_player prev '></button>
                    <button className='sprite_player play ' onClick={playMusic}></button>
                    <button className='sprite_player next '></button>
                </Control>
                <PlayInfo>
                    <div className='image'>
                        <NavLink to='/discover/player'>
                            <img src={setImageSize(songPic, 34)} alt='' />
                            <div className='sprite_player cover'></div>
                        </NavLink>
                    </div>
                    <div className='info'>
                        <div className='song'>
                            <a href='/待更新' className='song-name'>{currentSong.name}</a>
                            <a href='/待更新' className='artiest-name'>{singerName}</a>
                        </div>
                        <div className='progress'>
                            <Slider  value={progress}
                                     onChange={sliderChange}
                                     onAfterChange={sliderAfterChange}
                            />
                            <div className='time'>
                                <span className='now-time'>{showCurrentTime}</span>
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
            <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)}/>
        </PlayerBarWrapper>
    );
});

export default PlayerBar;