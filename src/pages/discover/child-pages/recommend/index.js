import React, { memo } from 'react';


import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style';
import TopBanner from './child-components/top-banner/index';
import HotRecommend from './child-components/hot-recommend';
import NewAlbum from './child-components/new-album';
import Ranking from './child-components/ranking';


const Recommend = () => {



    return (
        <RecommendWrapper>
            <TopBanner/>
            <Content className='wrap-v2'>
                <RecommendLeft>
                    <HotRecommend/>
                    <NewAlbum />
                    <Ranking />
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    );
};

export default memo(Recommend);