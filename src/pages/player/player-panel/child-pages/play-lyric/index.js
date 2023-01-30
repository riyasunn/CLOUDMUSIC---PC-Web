import React, { memo } from 'react';
import { useSelector } from 'react-redux';


import { LyricWrapper } from './style';
import { selectLyricList, } from '../../../store/selector';

const PlayLyric = memo(() => {
    const lyricList = useSelector(selectLyricList);
    // const lyricList = [{time:0, content:"a"}, {time:1, content:"b"}, {time:2, content:"c"}];

    return (
        <LyricWrapper>
            <div className='lyric-content'>
                {
                    lyricList.map((item, index) => {
                        return(
                            <div key={index} className="lyc-line">
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