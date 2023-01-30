import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { formatDate } from '../../../../../utils/format-utils';

import { PlayListWrapper } from './style';
import { selectPlayList, selectCurrentLyricIndex } from '../../../store/selector';

const PlayList = memo(() => {

    const playList = useSelector(selectPlayList);
    const currentSongIndex = useSelector(selectCurrentLyricIndex);
    
    return (
        
        <PlayListWrapper>
           {
            playList.map((item, index) => {
                return(
                    <div key={item.id} 
                         className={classNames("play-item", {"active": currentSongIndex === index})}>
                        <div className='song-name'>{item.name}</div>
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

//   { playList.map((item) => {
//     return(
        // <div key={item.id} className='content'>
        //     <div className='song-name'>{item.name}</div>
        //     <div className='right'>
        //         <span className='artiest'>{item.ar[0].name} </span>
        //         <span className='duration'>{formatDate(item.dt,"mm:ss")}</span>
        //     </div>
        // </div>
//     )
// })
// }

// <div className='right'></div>
// </div>