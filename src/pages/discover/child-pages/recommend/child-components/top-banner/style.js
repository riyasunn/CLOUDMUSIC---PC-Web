import styled from "styled-components";

export const BannerWrapper = styled.div`
    .banner {
        height: 270px;
        background-color: lightblue;

        display: flex;
    }
`

export const BannerLeft = styled.div`
    width: 730px;
    background-color: pink;
`

export const BannerRight = styled.a`
    background: url(${require("../../../../../../assets/img/download.png")});
`

export const BannerControl = styled.div`

`