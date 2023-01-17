import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';
import { getTopBannersAction } from '../../store/action';
import { selectTopBanners } from '../../store/selector';
import { Carousel } from 'antd';

const TopBanner = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
    
        const dispatch = useDispatch();

        const topBanners = useSelector(selectTopBanners);
    
        useEffect(() => {
            dispatch(getTopBannersAction());
        }, [dispatch]);
        // console.log("top", topBanners);

        const bannerRef = useRef();

        const changeBanner = useCallback((from,to) => {
            setCurrentIndex(to);
        }, []);

        const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl+"?imageView&blur=40x20");

    return (
        <BannerWrapper bgImg={bgImage}>
            <div className='banner wrap-v2'>
                <BannerLeft> 
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={changeBanner}>
                        {topBanners && topBanners.map((item) => {
                            return (
                                <div className="banner-item" key={item.imageUrl}>
                                    <img className='img' src={item.imageUrl} alt="banner images"/>
                                </div>
                            )
                        })}
                    </Carousel>
                </BannerLeft>
                <BannerRight>
                       
                </BannerRight>
                <BannerControl>
                    <button className='btn left' onClick={e => bannerRef.current.prev()}></button>   
                    <button className='btn right' onClick={e => bannerRef.current.next()}></button>        
                </BannerControl>  
            </div>
          
        </BannerWrapper>
    );
};

export default memo(TopBanner);