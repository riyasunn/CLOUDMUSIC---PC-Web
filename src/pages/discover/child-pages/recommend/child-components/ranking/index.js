import React, { memo } from 'react';


import { RankingWrapper, } from './style';
import RcmThemeHeader from '../../../../../../components/theme-header-recommend';

const Ranking = memo(() => {
    return (
        <RankingWrapper>
            <RcmThemeHeader title="Ranking"/>
        </RankingWrapper>
    );
});

export default Ranking;