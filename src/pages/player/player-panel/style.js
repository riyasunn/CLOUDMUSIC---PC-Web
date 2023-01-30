import styled from "styled-components";

export const PlayerPanelWrapper = styled.div`
    position: absolute;
    bottom: 46px;
    height: 300px;
    width: 980px;
    left: 50%;
    transform: translateX(-50%);
    color: #e2e2e2;

    .content {
        display: flex;
        width: 979.5px;
        height: 260px;
        background: url(${require("../../../assets/img/playlist_bg.png")}) -1014px 0 repeat-y;
    }
   
   
   
`