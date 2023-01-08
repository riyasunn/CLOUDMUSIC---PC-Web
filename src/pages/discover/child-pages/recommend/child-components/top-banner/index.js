import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';
import { getTopBannersAction } from '../../store/action';
import { selectTopBanners } from '../../store/selector';

const TopBanner = () => {
    
        const dispatch = useDispatch();

        const topBanners = useSelector(selectTopBanners);
    
        useEffect(() => {
            dispatch(getTopBannersAction());
        }, [dispatch]);
    

    return (
        <BannerWrapper>
            <div className='banner wrap-v2'>
                <BannerLeft>{topBanners.length}</BannerLeft>
                <BannerRight></BannerRight>
            </div>
        <BannerControl></BannerControl>    
        </BannerWrapper>
    );
};

export default memo(TopBanner);