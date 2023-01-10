import React, { memo } from 'react';


import { ThemeHeaderWrapper, } from './style';

const RcmThemeHeader = memo((props) => {
    const { title, keywords=[] } = props;
    return (
        <ThemeHeaderWrapper className='sprite_02'>
            <div className='left'>
                <h3 className='title'>{title}</h3>
                <div className='keywords'>
                    {
                        keywords.map((item) => {
                            return(
                                <div className='item' key={item}>
                                    <a href='待更新'>{item}</a>
                                    <span className='divider'>|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='right'>
                <a href='待更新'>More</a>
                <i className='sprite_02 icon'/>
            </div>
        </ThemeHeaderWrapper>
    );
});

export default RcmThemeHeader;