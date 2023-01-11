import React, { memo } from 'react';

import { getCount } from '../../utils/format-utils';

import { AlbumCoverWrapper, } from './style';

const AlbumCover = memo((props) => {
    const { info } = props;

    return (
        <AlbumCoverWrapper>
            <div className='cover-top'>
                <img src={info.picUrl} alt="" />
                <div className='cover sprite_cover'>
                    <div className='info sprite_cover'>
                        <span>
                            <i className='sprite_icon earphone'></i>
                            {getCount(info.playCount)}
                        </span>
                        <i className='sprite_icon play'></i>
                    </div>
                </div>
            </div>
            <div className='cover-bottom text-nowrap'>
                {info.name}
            </div>
            <div className='cover-src'>
                {info.copywriter}
            </div>
        </AlbumCoverWrapper>
    );
});

export default AlbumCover;