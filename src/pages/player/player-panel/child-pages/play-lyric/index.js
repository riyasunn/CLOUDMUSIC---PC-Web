import React, { memo, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { LyricWrapper } from './style';
import { selectLyricList, selectCurrentLyricIndex } from '../../../store/selector';

const PlayLyric = memo(() => {
    //redux hooks:
    const lyricList = useSelector(selectLyricList);
    const currentLyricIndex = useSelector(selectCurrentLyricIndex);
    //other hooks:
    const lyricRef = useRef();
    useEffect(() => {
        if(currentLyricIndex > 0 && currentLyricIndex < 3) return;
        scrollTo(lyricRef.current, (currentLyricIndex - 3)*32, 300)
    }, [currentLyricIndex]);

    //other handle function:
    const scrollTo = (element, to, duration) => {
        if (duration <= 0) return;
        var difference = to - element.scrollTop;
        // console.log("scrollTop-1",element.scrollTop);
        // console.log("to",to);
        // console.log("differenct",difference);
        var perTick = difference / duration * 10 ;
        // console.log("perTick",perTick);
        setTimeout(function() {
            element.scrollTop = element.scrollTop + perTick;
            // console.log("scrollTop-2",element.scrollTop);
            if (element.scrollTop === to) return;
            scrollTo(element, to, duration - 10);
        }, 10);
    };


    return (
        <LyricWrapper ref={lyricRef}>
            <div className='lyric-content'>
                {
                    lyricList.map((item, index) => {
                        return(
                            <div key={index} 
                                 className={classNames("lyc-line", { "active" : index === currentLyricIndex})}>
                                <span>{item.content}</span>
                            </div>
                        )
                    })
                }
            </div>
        </LyricWrapper>
    );
});

export default PlayLyric;