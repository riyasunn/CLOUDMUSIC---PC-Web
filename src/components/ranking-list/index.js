import React, { memo } from 'react';

import { setImageSize } from '../../utils/format-utils';

import { RankingListWrapper, } from './style';



const RankingList = memo((props) => {
    const { info } = props;

    return (
        <RankingListWrapper>
            <div className='header'>
                <div className='image'>
                    <img src={setImageSize(info.coverImgUrl, 80)} alt=""/>
                    <a href='/待更新' className='sprite_cover'>{info.name}</a>
                </div>
                
            
            </div>
            <div className='list'>
            
            </div>
            <div className='footer'>
            
            </div>
            
        </RankingListWrapper>
    );
});

export default RankingList;