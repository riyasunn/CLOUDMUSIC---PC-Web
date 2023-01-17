import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { HotRecommendWrapper, } from './style';
import RcmThemeHeader from '../../../../../../components/theme-header-recommend';
import AlbumCover from '../../../../../../components/album-cover';
import { getHotRecommendsAction } from '../../store/action';
import { selectHotRecommends } from '../../store/selector';


const HotRecommend = memo(() => {
    const dispatch = useDispatch();
    const hotRecommends = useSelector(selectHotRecommends);

    useEffect(() => {
        dispatch(getHotRecommendsAction())
    }, [dispatch]);

    return (
       
            <HotRecommendWrapper>
                <div>
                    <RcmThemeHeader title="Hot recommend" keywords={["Chinese music", "Popular", "Rock", "Ballad", "Electronic music" ]}/>
                    <div className='recommend-list'>
                        {hotRecommends && hotRecommends.map((item) => {
                            return (
                                <AlbumCover key={item.id} info={item}/>
                            )
                        })}
                    </div>
                </div>
            </HotRecommendWrapper>
       
    );
});

export default HotRecommend;