import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSettledSingersAction } from '../../store/action';
import { selectSettleSingers } from '../../store/selector';
import { setImageSize } from '../../../../../../utils/format-utils';
import { SettledSingerWrapper } from './style';
// import { HotRecommendWrapper, } from './style';

const SettledSinger = memo(() => {
    const dispatch = useDispatch();
    const settleSingers = useSelector(selectSettleSingers);

    useEffect(() => {
        dispatch(getSettledSingersAction())
    }, [dispatch]);

    return (
        <SettledSingerWrapper>
            <div className='title'>
                <h3>Singers</h3>
            </div>
            <div className='divider'/>
            {
                settleSingers.map((item, index) => {
                   return (
                    <div key={index} className="singers">
                        <img src={setImageSize(item.img1v1Url,62)} alt="" />
                        <div className='name'>{item.alias[0] || item.name}</div>
                    </div>
                   )
                })
            }
            <button >See all singers</button>
        </SettledSingerWrapper>
    );
});

export default SettledSinger;

