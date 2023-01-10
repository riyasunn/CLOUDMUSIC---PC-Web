import React, { memo } from 'react';


import { NewAlbumWrapper, } from './style';
import RcmThemeHeader from '../../../../../../components/theme-header-recommend';

const NewAlbum = memo(() => {
    return (
        <NewAlbumWrapper>
            <RcmThemeHeader title="New album"/>
        </NewAlbumWrapper>
    );
});

export default NewAlbum;