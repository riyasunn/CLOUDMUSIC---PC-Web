import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTopBannersAction } from './store/action';
import { selectTopBanners } from './store/selector';

const Recommend = () => {
    const dispatch = useDispatch();

    const topBanners = useSelector(selectTopBanners);

    useEffect(() => {
        dispatch(getTopBannersAction())
    }, [dispatch]);

    

    return (
        <div>
            <h2>Recommend: {topBanners.length} </h2>
        </div>
    );
};

export default memo(Recommend);