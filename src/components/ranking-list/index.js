import React, { memo } from 'react';

import { setImageSize } from '../../utils/format-utils';

import { RankingListWrapper, } from './style';



const RankingList = memo((props) => {
    const { info, name } = props;
    const { tracks=[] } = info;

    return (
        <RankingListWrapper>
            <div className='header'>
                <div className='image'>
                    <img src={setImageSize(info.coverImgUrl, 80)} alt=""/>
                    <a href='/待更新' className='image_cover'> </a>
                </div>
                <div className='info'>
                    <a href='/待更新'>{name}</a>
                    <div>
                        <button className='btn play sprite_02'>a</button>
                        <button className='btn favor sprite_02'>b</button>
                    </div>
                </div>
            </div>

            <div className='list'>
            {
               tracks.slice(0,10).map((item, index) => {
                    return (
                        <div key={item.id} className='list-item'>
                            <div className='index'>{index+1}</div>
                            <div className='list-detail'>
                                <a href='/待更新' className='name text-nowrap'>{item.name}</a>
                                <div className='operate'>
                                    <button className='btn sprite_02 play'></button>
                                    <button className='btn sprite_icon2 add'></button>
                                    <button className='btn sprite_02 favor'></button>
                                </div>
                            </div>
                        </div>
                    )
               })
            }
            </div>
            <div className='footer'>
                <a href='/待更新' >All &gt;</a>
            </div>
            
        </RankingListWrapper>
    );
});

export default RankingList;