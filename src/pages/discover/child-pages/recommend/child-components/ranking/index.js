import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { getTopListInfo, getRankingList } from '../../../../../../services/recommend';
import { RankingWrapper, } from './style';
import RcmThemeHeader from '../../../../../../components/theme-header-recommend';
import { getRankingAction } from '../../store/action';
import { selectUpRanking, selectNewRanking, selectOriginalRanking } from '../../store/selector';
import RankingList from '../../../../../../components/ranking-list';


const Ranking = memo(() => {
    const dispatch = useDispatch();

    const upRanking = useSelector(selectUpRanking);
    const newRanking = useSelector(selectNewRanking);
    const originalRanking = useSelector(selectOriginalRanking);
    console.log("up", upRanking);
    console.log("new", newRanking);
    console.log("original", originalRanking);

    // getTopListInfo().then(res=> console.log('toplist info', res)); //get toplist id, will use in the getRankingList
    // getRankingList(19723756).then(res=> console.log("get ranking", res));
    useEffect(() => {
        dispatch(getRankingAction(19723756));
        dispatch(getRankingAction(3779629));
        dispatch(getRankingAction(2884035));
    }, [dispatch]) ;

    return (
        <RankingWrapper>
            <RcmThemeHeader title="Top ranking"/>
            <div className='topRanking'>
                <RankingList info={upRanking}/>
                <RankingList info={newRanking}/>
                <RankingList info={originalRanking}/>
            </div>
        </RankingWrapper>
    );
});

export default Ranking;
