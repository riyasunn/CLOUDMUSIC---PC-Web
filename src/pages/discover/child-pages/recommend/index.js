import React, { memo } from 'react';


import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style';
import TopBanner from './child-components/top-banner/index';
import HotRecommend from './child-components/hot-recommend';
import NewAlbum from './child-components/new-album';
import Ranking from './child-components/ranking';
// import UserLogin from './child-components/user-login/style';
import SettledSinger from './child-components/settled-singer';
// import HotAnchor from './child-components/hot-anchor';


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
                <RecommendRight>
                    {/*<UserLogin />*/}
                    <SettledSinger />
                    {/*<HotAnchor />*/}
                </RecommendRight>
            </Content>
        </RecommendWrapper>
    );
};

export default memo(Recommend);