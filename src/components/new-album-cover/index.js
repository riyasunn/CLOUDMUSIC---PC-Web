import React, { memo } from 'react';

import { setImageSize } from '../../utils/format-utils';

import { NewAlbumCoverWrapper } from "./style";

const NewAlbumCover = memo((props) => {
    const { info, size = "153", width = "153px", height = "153px", bgp } = props;

    return (
        <NewAlbumCoverWrapper width={width} height={height} bgp={bgp}>
            <div className='album-img'>
                <img src={setImageSize(info.picUrl, size)} alt='new album cover'/>
                <a href="/todo" className='cover sprite_cover'> </a>
            </div>
            <div className='album-info'>
                <div className='name'>{info.name}</div>
                <div className='artist'>{info.artist.name}</div>
            </div>
            
        </NewAlbumCoverWrapper>
    );
});

export default NewAlbumCover;