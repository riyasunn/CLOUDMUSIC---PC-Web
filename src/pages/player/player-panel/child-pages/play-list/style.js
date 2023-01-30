import styled from "styled-components";

export const PlayListWrapper = styled.div`
    /* display: flex; */
    position: absolute;
    top:10px;
    /* position: absolute; */
    width: 553px;
    /* left: 300px; */
    /* border: 10px solid #d3d3d3;
    border-width: 0 1px; */

    .play-item {
        display: flex;
        padding: 0 8px 0 25px;
        justify-content: space-between;
        position: relative;
        left: 2px;
        height: 28px;
        line-height: 28px;

        &.active {
            color: #fff;
            background-color: #000;

            ::before {
                content: "";
                width: 10px;
                height: 10px;
                background: url(${require("../../../../../assets/img/sprite_playlist2.png")}) no-repeat 0 9999px;
                background-position: -182px 0;
                position: absolute;
                left: 9px;
                top: 9px;
            }
        }
        
        .song-info {
            display: flex;
            justify-content: space-between;

            .artiest {
                width: 88px;
            };

            .duration {
                width: 45px;
            };
        }
    }
`;