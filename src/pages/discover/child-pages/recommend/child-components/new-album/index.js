import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectNewAlbums } from '../../store/selector';
import { getNewAlbumsAction } from '../../store/action';

import { NewAlbumWrapper, } from './style';
import RcmThemeHeader from '../../../../../../components/theme-header-recommend';
import { Carousel } from 'antd';


const NewAlbum = memo(() => {
    const dispatch = useDispatch();

    const newAblums = useSelector(selectNewAlbums);

    useEffect(() => {
        dispatch(getNewAlbumsAction())
    }, [dispatch]);

    console.log(newAblums);

    return (
        <NewAlbumWrapper>
            <RcmThemeHeader title="New album"/>
            <div className='content'>
                <button className='arrow arrow-left sprite_02'></button>
                <div className='album'>
                    <Carousel dots={false}>
                    {
                        [0, 1].map((item) => {
                            return (
                                <div key={item} className="page">
                                    { 
                                        newAblums && newAblums.slice(item * 5, (item + 1) * 5).map((item) => {
                                            return (
                                                <div key={item.id}>{item.name}</div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    </Carousel>
                </div>
                <button className='arrow arrow-right sprite_02'></button>
            </div>
        </NewAlbumWrapper>
    );
});

export default NewAlbum;

