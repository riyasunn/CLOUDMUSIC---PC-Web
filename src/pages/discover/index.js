import React, { memo, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { discoverMenu } from "../../common/local-data";
import request from "../../services/request";

import { DiscoverWrapper, TopMenu } from "./style";




const Discover = memo((props) => {

    useEffect(() => {
        request({
            url: "/banner"
        }).then(res => {
            console.log(res)
        })
    }, []);
    
    const { route } = props;

    return (
        <DiscoverWrapper>
            <div className='top'>
                <TopMenu className="wrap-v1">
                {
                    discoverMenu.map((item) => {
                        return (
                            <div className='item' key={item.title}>
                                <NavLink to={item.link}>{item.title}</NavLink>
                            </div>
                        )
                    })
                }
                </TopMenu>
            </div>
            {renderRoutes(route.routes)}
        </DiscoverWrapper>
    );
});

export default Discover;
