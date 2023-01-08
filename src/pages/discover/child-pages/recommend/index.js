import React, { memo } from 'react';


import { RecommendWrapper } from './style';
import TopBanner from './child-components/top-banner/index';


const Recommend = () => {



    return (
        <RecommendWrapper>
            <TopBanner/>
        </RecommendWrapper>
    );
};

export default memo(Recommend);