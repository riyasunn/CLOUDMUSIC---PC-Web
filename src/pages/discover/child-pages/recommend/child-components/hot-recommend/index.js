import React, { memo } from 'react';


import { HotRecommendWrapper, } from './style';
import RcmThemeHeader from '../../../../../../components/theme-header-recommend';

const HotRecommend = memo(() => {
    return (
        <HotRecommendWrapper>
            <div>
                <RcmThemeHeader title="Hot recommend" keywords={["Chinese music", "Popular", "Rock", "Ballad", "Electronic music" ]}/>
            </div>
        </HotRecommendWrapper>
    );
});

export default HotRecommend;