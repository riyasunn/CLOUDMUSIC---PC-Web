import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { formatDate } from '../../../../../utils/format-utils';

import { PlayListWrapper } from './style';
import { selectPlayList, selectCurrentSongIndex } from '../../../store/selector';
import { getSongDeatilAction } from '../../../store/action';

const PlayList = memo(() => {
    const dispatch = useDispatch();
    const playList = useSelector(selectPlayList);
    const currentSongIndex = useSelector(selectCurrentSongIndex);

    const changeMusic = (id) => {
        dispatch(getSongDeatilAction(id));
    };

    return (
        
        <PlayListWrapper>
           { 
            playList.length === 0 ? 
            <h2>You haven't added any songs yet</h2>
            : 
            playList.map((item, index) => {
                return(
                    <div key={item.id} 
                         className={classNames("play-item", {"active": currentSongIndex === index})}>
                        <div className='song-name' onClick={e => changeMusic(item.id)}>{item.name}</div>
                        <div className='song-info'>
                            <span className='artiest text-nowrap'>{item.ar[0].name} </span>
                            <span className='duration'>{formatDate(item.dt,"mm:ss")}</span>
                        </div>
                    </div>
                )
            })
        
           }
        </PlayListWrapper>
    );
    
});

export default PlayList;

// playList.length === 0 ? 
//             <h2>You haven't added any songs yet</h2>
//             : 