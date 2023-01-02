import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import { headerLinks } from '../../common/local-data';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ReactComponent as Logo } from '../../assets/img/CloudMusic-logo.svg';

const AppHeader = memo(() => {

    const ShowSelectItem = (item, index) => {
       if (index < 3) {
        return (
            <NavLink to={item.link} exact>
                {item.title}
                <i className='sprite_01 icon' ></i>
            </NavLink>
        )
       } else {
            return (
                <a href={item.link}>{item.title}</a>
            )
        }
    };

    return (
        <HeaderWrapper>
            <div className='wrap-v1 content'>
                <HeaderLeft>
                   <a href='#/' className='logo'>{<Logo/>}</a>
                   <div className='select-list'>
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div key={item.title} className='select-item'>
                                        {ShowSelectItem(item, index)}
                                    </div>
                                )
                            })
                        }
                   </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className='search' placeholder='music/vedio/radio/user' prefix={<SearchOutlined />}/>
                    <div className='center'>Creator center</div>
                    <button className='login'>Login</button>
                </HeaderRight>
                
            </div>
            <div className='divider'></div>
        </HeaderWrapper>
    );
});

export default AppHeader;

// <a href='#/' className='logo sprite_01'>CloudMusic</a>