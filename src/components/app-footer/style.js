import styled from "styled-components";


export const FooterWrapper = styled.div`
    height: 130px;
    background-color: #f2f2f2;
    color: #666;
    border-top: 1px solid #d3d3d3;
    font-size: 16px;

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
export const FooterLeft = styled.div`
    padding-top: 30px;
    line-height: 24px;
    .copyright {
        color: #999;
    }
    .link {
        a {
            color: #999;
        };

        .line {
            margin: 0 10px;
            color: #999;
        };
    }
`
export const FooterRight = styled.div`
    display: flex;
    padding-top: 30px;

    .footer-img {
        display: flex;
        margin-right: 40px;
    };

    .link {
        display: block;
        width: 50px;
        height: 45px;
    };
    
`