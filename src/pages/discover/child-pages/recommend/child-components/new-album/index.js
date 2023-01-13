import React, { memo, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectNewAlbums } from '../../store/selector';
import { getNewAlbumsAction } from '../../store/action';

import { NewAlbumWrapper, } from './style';
import RcmThemeHeader from '../../../../../../components/theme-header-recommend';
import { Carousel } from 'antd';
import NewAlbumCover from '../../../../../../components/new-album-cover';


const NewAlbum = memo(() => {
    const dispatch = useDispatch();

    const newAblums = useSelector(selectNewAlbums);

    useEffect(() => {
        dispatch(getNewAlbumsAction())
    }, [dispatch]);

    // console.log(newAblums);

    const newAlbumRef = useRef();

    return (
        <NewAlbumWrapper>
            <RcmThemeHeader title="New album"/>
            <div className='content'>
                <button className='arrow arrow-left sprite_02'
                        onClick={e => newAlbumRef.current.prev()}
                ></button>
                <div className='album'>
                    <Carousel dots={false} ref={newAlbumRef}>
                    {
                        [0, 1].map((item) => {
                            return (
                                <div key={item} className="page">
                                    { 
                                        newAblums && newAblums.slice(item * 5, (item + 1) * 5).map((items) => {
                                            return (
                                                <NewAlbumCover key={items.id} 
                                                               info={items} 
                                                               size="100" 
                                                               width="118px" 
                                                               height="100px" 
                                                               bgp="-570px"
                                                />

                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    </Carousel>
                </div>
                <button className='arrow arrow-right sprite_02'
                        onClick={e => newAlbumRef.current.next()}
                ></button>
            </div>
        </NewAlbumWrapper>
    );
});

export default NewAlbum;

