import React, { memo } from 'react';

import { FooterWrapper, FooterLeft, FooterRight } from './style';
import { ReactComponent as FBLogo } from '../../assets/img/facebook.svg';
import { ReactComponent as InsLogo } from '../../assets/img/instagram.svg';
import { ReactComponent as GithubLogo } from '../../assets/img/github.svg';

const AppFooter = memo(() => {
    return (
        <FooterWrapper>
            <div className='wrap-v2 content'>
                <FooterLeft className='left'>
                    <span className='copyright'>© 2022 All Rights Reserved, CLOUDMUSIC</span>
                    <div className='link'>
                        <a href="https://www.canva.com/policies/privacy-policy/" target="_blank" rel='noopener noreferrer'>Privacy policy</a>
                        <span className='line'>|</span>
                        <a href="https://www.canva.com/policies/terms-of-use/" target="_blank" rel='noopener noreferrer'>Terms</a>
                    </div>
                </FooterLeft>

                <FooterRight className='right'>
                    <div className='footer-img'>
                        <a className='link' href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer'>{<FBLogo/>}</a>
                        <a className='link' href="https://www.instagram.com/" target='_blank' rel='noopener noreferrer'>{<InsLogo/>}</a>
                        <a className='link' href="https://www.github.com/" target='_blank' rel='noopener noreferrer'>{<GithubLogo/>}</a>
                    </div>
                </FooterRight>
            </div>
        </FooterWrapper>
    );
});

export default AppFooter;